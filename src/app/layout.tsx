'use client'
import type { Metadata } from "next";
import "../styles/globals.css";
import { ReactNode, useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Link from "next/link";

// export const metadata = {
//   title: "George Andrade-Munoz",
//   description: "An introduction.",
// };

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [showMyName, setShowMyName] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setShowMyName(window.scrollY < 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <html lang="en">
      <head>
        {/* Elegant serif and clean sans-serif fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?&family=Lovers+Quarrel&family=Electrolize&family=Habibi&family=Shippori+Antique&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <div
          style={{
            maxWidth: "var(--container-maxWidth)",
            margin: "0 auto",
            minHeight: "100vh",
            background: "var(--color-bg-primary)",
            color: "var(--color-text-primary)",
            fontFamily: "var(--font-primary)",
            padding: "var(--space-xlarge) var(--gutter)",
            position: "relative",
          }}
        >
          <Link href="/" className={"myName"} style={{ opacity: showMyName ? 1 : 0, pointerEvents: showMyName ? 'auto' : 'none', transition: 'opacity 0.3s' }}>
            <div>
              George Andrade-Munoz
            </div>
          </Link>
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
