import type { Metadata } from "next";
import { Inter } from "next/font/google";
import IntroSplash from "@/components/IntroSplash";
import SmoothScroll from "@/components/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interDisplay = Inter({
  subsets: ["latin"],
  variable: "--font-inter-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Suphaphorn | UX/UI Designer",
  description:
    "Designing user-friendly systems that solve real problems. UX/UI design case studies and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interDisplay.variable}`}
      style={{ colorScheme: "light dark" }}
    >
      <body className="min-h-screen font-sans text-kathin-text antialiased">
        <SmoothScroll>
          <IntroSplash />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
