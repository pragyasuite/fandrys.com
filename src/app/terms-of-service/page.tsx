import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Scale, DollarSign, Truck } from "lucide-react";



export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms of service for Fandrys India Private Limited. Outlines commercial trade terms, wholesale orders, and export container shipping.",
  alternates: {
    canonical: "https://fandrys.co.in/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      {/* 1. Header Banner */}
      <section className="bg-forest text-warm-white py-20 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 text-white/70 text-xs font-body font-bold uppercase tracking-widest">
            <Link href="/" className="hover:text-[#C5A880] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <span className="text-white">Terms of Service</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-warm-white tracking-tight leading-tight">
            Terms of Service
          </h1>
          <p className="font-body text-warm-white/80 max-w-2xl text-sm md:text-base leading-relaxed">
            Legal terms governing sales agreements, logistics, and website usage for Fandrys India Private Limited.
          </p>
        </div>
      </section>

      {/* 2. Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Quick Info Sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="bg-warm-white p-6 rounded-3xl border border-accent/15 space-y-6 shadow-sm">
              <div className="flex items-center gap-2.5">
                <Scale className="h-6 w-6 text-forest shrink-0" />
                <h3 className="font-display font-bold text-lg text-forest">Quick Overview</h3>
              </div>
              <p className="font-body text-xs md:text-sm text-foreground/75 leading-relaxed">
                By accessing this portal or submitting queries, you agree to comply with our commercial trade and livestock supply terms.
              </p>
              <div className="h-px bg-black/[0.05]" />
              <ul className="space-y-4 font-body text-xs text-foreground/80">
                <li className="flex items-center gap-2.5">
                  <DollarSign className="h-4 w-4 text-forest" />
                  <span>Verified payment triggers</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Truck className="h-4 w-4 text-forest" />
                  <span>Cold chain shipping guidelines</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-forest" />
                  <span>Governing Law: MH, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Narrative */}
          <div className="lg:col-span-8 space-y-8 font-body text-sm md:text-base text-foreground/85 leading-relaxed">
            <div>
              <span className="text-xs uppercase font-bold text-accent tracking-widest block mb-2">Last Updated</span>
              <p className="font-semibold text-forest">August 10, 2026</p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-2xl text-forest">1. Agreement to Terms</h2>
              <p>
                Welcome to the website of <strong>Fandrys India Private Limited</strong>. By viewing, browsing, or submitting commercial quotes on our website (fandrys.co.in), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. If you disagree with any portion of these terms, you must exit this portal immediately.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-2xl text-forest">2. Commercial Wholesales & Ordering</h2>
              <p>
                All livestock (Large White Yorkshire piglets, fully grown breeding stock) and processed pork pricing quotes are subject to verification.
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Quotes submitted online do not establish a binding order until verified by our farm office.</li>
                <li>Pedigree logs and health records are released strictly upon order confirmation and verification.</li>
                <li>Fandrys reserves the right to decline supply contracts based on biosecurity risks, transport route bottlenecks, or stock levels.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-2xl text-forest">3. Logistics & Cold Chain Deliveries</h2>
              <p>
                Fandrys coordinates bulk logistics under strict temperature regulations (chilled or frozen).
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>We coordinate direct container shipping via temperature-controlled lines to major global ports (like JNPT, Mumbai) and domestic hubs.</li>
                <li>Ownership and risk transition milestones are strictly defined in individual shipping invoices and contracts (FOB, CIF, etc.).</li>
                <li>Distributors must ensure their receiving depots maintain standard refrigerated cooling to prevent meat spoilage upon delivery.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-2xl text-forest">4. Intellectual Property</h2>
              <p>
                All content, text copy, farm photographs, brand graphics, and official logos (including the red pig-on-meat emblem) are the exclusive property of <strong>Fandrys India Private Limited</strong> and are protected under Indian and international copyright laws. Unauthorized reproduction, modification, or framing is strictly prohibited.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-2xl text-forest">5. Limitation of Liability</h2>
              <p>
                Fandrys India Private Limited, its directors, and employees shall not be liable for any indirect, incidental, or consequential damages resulting from your usage of this portal, temporary website offline status, or variations in regional third-party logistics.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-2xl text-forest">6. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of Maharashtra, India. Any disputes arising relative to these terms or our commercial contracts shall be subject to the exclusive jurisdiction of the competent courts in Beed, Maharashtra.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-2xl text-forest">7. Contact Information</h2>
              <p>
                For questions or clarifications regarding our Terms of Service, please contact our administrative team at:
              </p>
              <div className="bg-beige/40 p-6 rounded-2xl border border-accent/15 mt-4 space-y-2">
                <p className="font-bold text-forest">Fandrys India Private Limited</p>
                <p className="text-xs md:text-sm">A/P Guttewadi, Gangakhed Road, Tal Parali, Dist Beed, MH, India - 431515</p>
                <p className="text-xs md:text-sm font-semibold">Email: info@fandrys.co.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
