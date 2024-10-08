import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carlos Guzman",
  description: "Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon import and config */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>

        {/* Link preview metadata */}
        <meta property="og:title" content="Carlos Guzman | Portfolio" />
        <meta property="og:description" content="Check out my latest projects, skills, and professional experience. Let's connect!" />
        <meta property="og:image" content="/profile-square.jpg" />
        <meta property="og:url" content="https://carlosguzmanr.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>

      {/* Website content from page.tsx */}
      <body className={inter.className}>{children}</body>

    </html>
  );
}
