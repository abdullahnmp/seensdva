// middleware.js (place this file in the root of your project, or inside `src` if you use it)
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define routes that should be publicly accessible without authentication
const isPublicRoute = createRouteMatcher([
    '/',                     // Homepage
    '/contact',              // Contact page
    '/gallery-viewer',       // Gallery page
    '/event/(.*)',           // Dynamic event details pages
    '/individual-venue-page(.*)', // Venue pages (adjust pattern if needed)
    '/sign-in(.*)',          // Clerk's sign-in page route
    '/sign-up(.*)',          // Clerk's sign-up page route
    '/api/clerk-webhook(.*)', // Example API route for Clerk webhooks (if used)
    '/api/stripe-webhook(.*)' // Example API route for Stripe webhooks (if used)
    // Add any other public routes or API endpoints here
]);

export default clerkMiddleware((auth, request) => {
  // Protect routes that are not public
  if (!isPublicRoute(request)) {
    auth().protect(); // If the route is not public, redirect unauthenticated users to the sign-in page
  }
});

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    // Ensure the root route is matched as well if needed (often covered by the pattern above)
     '/',
  ],
};