import type { Metadata } from "next";
import { Inter } from "next/font/google";
import IntroSplash from "@/components/IntroSplash";
import SmoothScroll from "@/components/SmoothScroll";
import { getSiteUrl, siteDescription, siteName } from "@/lib/site";
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
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  icons: {
    icon: "/avatar.png",
    apple: "/avatar.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    title: siteName,
    description: siteDescription,
    images: [{ url: "/avatar.png", width: 512, height: 512, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/avatar.png"],
  },
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
