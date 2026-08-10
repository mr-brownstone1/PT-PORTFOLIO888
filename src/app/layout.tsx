import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import ClientChrome from "@/components/ClientChrome";
import { getSiteUrl, siteDescription, siteName } from "@/lib/site";
import "./globals.css";

/** Inter has no Thai subset — pair with Noto Sans Thai for bilingual UI */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const notoThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-thai",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
  const htmlStyle = {
    colorScheme: "light dark",
    ["--font-inter-display"]: "var(--font-inter)",
  } as CSSProperties;

  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoThai.variable}`}
      style={htmlStyle}
    >
      <body className="min-h-screen font-sans text-kathin-text antialiased">
        <ClientChrome>{children}</ClientChrome>
      </body>
    </html>
  );
}
