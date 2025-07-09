import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Navigation from "../components/Navigation";

export const metadata = {
  title: "George Andrade-Munoz",
  description: "An introduction.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Elegant serif and clean sans-serif fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Playfair+Display:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div
          style={{
            maxWidth: "var(--container-max-width)",
            margin: "0 auto",
            minHeight: "100vh",
            background: "var(--color-bg-primary)",
            color: "var(--color-text-primary)",
            fontFamily: "var(--font-sans)",
            padding: "var(--space-xlarge) var(--gutter)",
          }}
        >
          {/* Navigation will go here */}
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
