import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Yorkshire Pig Farm & Pork Exporter",
  description: "Explore Fandrys India Private Limited, a premier Large White Yorkshire pig farm in Beed, Maharashtra, supplying quality piglets and processed pork globally.",
  alternates: {
    canonical: "https://fandrys.com",
  },
};

export default function Home() {
  return <HomeClient />;
}
