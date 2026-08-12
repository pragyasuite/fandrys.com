import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Fandrys India Private Limited | Large White Yorkshire Pig Farm Beed",
    template: "%s | Fandrys India Private Limited",
  },
  description: "Fandrys India Private Limited is a commercial Large White Yorkshire pig farm in Beed, Maharashtra. Supplying certified breeding stock, active piglets, and premium processed pork to domestic and international export markets worldwide.",
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent selection:text-forest">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
