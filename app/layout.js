// app/layout.js
import { ClerkProvider } from '@clerk/nextjs';
import { Geist, Geist_Mono, Roboto } from 'next/font/google';
import "./globals.css";
import Footer from "./HomeHub/Footer"; // Make sure path is correct
import Header from "./HomeHub/Header"; // Make sure path is correct

// --- Your Font Setup ---
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-roboto',
    display: 'swap',
});
// --- End Font Setup ---

export const metadata = {
    title: "Seensd", // Your application title
    description: "Your application description",
};

export default function RootLayout({ children }) {
    return (
        // Wrap your entire application with ClerkProvider
        <ClerkProvider>
            <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable}`}>
                <body>
                    {/* Header component should be inside ClerkProvider to potentially use auth state */}
                    <Header />
                    {/* pt-10 is likely to prevent overlap with a fixed Header */}
                    <main className="pt-10">
                        {children}
                    </main>
                    {/* Footer component */}
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    );
}