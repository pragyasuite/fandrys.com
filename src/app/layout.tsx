import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://fandrys.com"),
  title: {
    default: "Fandrys | Large White Yorkshire Pig Farm Beed",
    template: "%s | Fandrys",
  },
  description: "Fandrys India Private Limited is a premium Large White Yorkshire pig farm and pork exporter in Beed, Maharashtra, supplying quality piglets and pork cuts.",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "zIqfIMQs1DXl5ZvzphKRE82YTtKqefYSG9yd0N5sQWE",
  },
  keywords: [
    "Fandrys India Private Limited",
    "Fandrys pig farm",
    "Large White Yorkshire pig farm India",
    "Yorkshire pig farm Maharashtra",
    "Pig farm Beed",
    "Pig farming Beed",
    "Global pig exporter India",
    "Pork export Maharashtra",
    "APEDA certified pig farm",
    "International pork supplier",
    "Large White Yorkshire export",
    "fandrys.com"
  ],
  openGraph: {
    title: "Fandrys India Private Limited | Large White Yorkshire Pig Farm Beed",
    description: "Professionally managed commercial Large White Yorkshire pig farm in Beed, Maharashtra, supplying premium breeding stock and hygienic pork products to domestic and global export markets.",
    type: "website",
    locale: "en_IN",
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
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent selection:text-forest">
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W490QZN6G1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W490QZN6G1');
          `}
        </Script>

        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
