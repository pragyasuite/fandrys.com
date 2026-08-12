import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://fandrys.co.in"),
  title: {
    default: "Fandrys India Private Limited | Large White Yorkshire Pig Farm Beed",
    template: "%s | Fandrys India Private Limited",
  },
  description: "Fandrys India Private Limited is a premium Large White Yorkshire pig farm and pork exporter in Beed, Maharashtra, supplying quality piglets and pork cuts.",
  alternates: {
    canonical: "/",
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
    "fandrys.co.in"
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
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
