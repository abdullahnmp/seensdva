// app/sign-in/[[...sign-in]]/page.js
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    // Center the SignIn component on the page
    <div className="flex justify-center items-center min-h-screen py-20">
      {/* Render the Clerk SignIn component */}
      {/* The `path` prop ensures Clerk knows this is the sign-in route */}
      <SignIn path="/sign-in" />
    </div>
  );
}