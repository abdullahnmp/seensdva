// app/sign-up/[[...sign-up]]/page.js
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    // Center the SignUp component on the page
    <div className="flex justify-center items-center min-h-screen py-20">
       {/* Render the Clerk SignUp component */}
       {/* The `path` prop ensures Clerk knows this is the sign-up route */}
      <SignUp path="/sign-up" />
    </div>
  );
}