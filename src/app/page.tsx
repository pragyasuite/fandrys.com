import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Fandrys India Private Limited | Yorkshire Pig Farm Beed",
  description: "Explore Fandrys India Private Limited, a premier Large White Yorkshire pig farm in Beed, Maharashtra, supplying quality piglets and processed pork globally.",
  alternates: {
    canonical: "https://fandrys.co.in",
  },
};

export default function Home() {
  return <HomeClient />;
}
