import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Truck, Award, Phone } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Commercial Supply Enquiry",
  description: "Submit a commercial enquiry to Fandrys India Private Limited for Large White Yorkshire piglets, breeding stock, or bulk processed pork.",
  alternates: {
    canonical: "https://fandrys.com/enquiry",
  },
};

export default function EnquiryPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-forest text-warm-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero-operations.jpg"
            alt="Farm commercial enquiry operations"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 text-white/70 text-xs font-body font-bold uppercase tracking-widest">
            <Link href="/" className="hover:text-[#C5A880] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <span className="text-white">Commercial Enquiry</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-warm-white tracking-tight leading-tight">
            Commercial Supply Enquiry
          </h1>
          <p className="font-body text-warm-white/80 max-w-2xl text-sm md:text-base leading-relaxed">
            Request pricing, availability timelines, and logistics details for Yorkshire piglets, breeding stock, or processed pork carcasses.
          </p>
        </div>
      </section>

      {/* 2. Main Content Layout */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Buyer Guidelines & Specifications */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div>
              <span className="text-accent font-body font-bold text-xs uppercase tracking-widest block mb-2">
                Wholesale & Export Quotes
              </span>
              <h2 className="font-display font-extrabold text-3xl text-forest tracking-tight">
                Ordering Guidelines
              </h2>
              <p className="font-body text-foreground/70 text-sm mt-3 leading-relaxed">
                Fandrys India Private Limited provides verified quotes directly from our Parali, Beed farm office. Please complete the form with your commercial requirements.
              </p>
            </div>

            {/* Information Cards */}
            <div className="space-y-4 font-body">
              {/* Card 1: Breeding & Pedigree */}
              <div className="bg-warm-white p-5 rounded-2xl border border-accent/15 flex items-start gap-4 shadow-sm">
                <div className="bg-forest/5 text-forest p-2.5 rounded-xl shrink-0">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-forest mb-1">
                    Pedigree & Health Logs
                  </h3>
                  <p className="text-xs text-foreground/75 leading-relaxed">
                    Vaccination records, weight logs, and pedigree lineage charts are attached to all confirmed breeding stock dispatches.
                  </p>
                </div>
              </div>

              {/* Card 2: Logistics & Cold Chain */}
              <div className="bg-warm-white p-5 rounded-2xl border border-accent/15 flex items-start gap-4 shadow-sm">
                <div className="bg-forest/5 text-forest p-2.5 rounded-xl shrink-0">
                  <Truck className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-forest mb-1">
                    Temperature-Controlled Shipping
                  </h3>
                  <p className="text-xs text-foreground/75 leading-relaxed">
                    We coordinate refrigerated container logistics connecting Beed to domestic markets and international ports (JNPT, Mumbai).
                  </p>
                </div>
              </div>

              {/* Card 3: Food Safety Standard */}
              <div className="bg-warm-white p-5 rounded-2xl border border-accent/15 flex items-start gap-4 shadow-sm">
                <div className="bg-forest/5 text-forest p-2.5 rounded-xl shrink-0">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-forest mb-1">
                    FSSAI & APEDA Standard
                  </h3>
                  <p className="text-xs text-foreground/75 leading-relaxed">
                    Processes conform strictly to food safety and veterinary release standards for wholesale buyers.
                  </p>
                </div>
              </div>
            </div>

            {/* Urgent Phone Box */}
            <div className="bg-beige/40 p-6 rounded-2xl border border-accent/15 flex items-center justify-between gap-4">
              <div>
                <span className="block text-[10px] uppercase font-bold text-accent tracking-wider">
                  Need Immediate Assistance?
                </span>
                <span className="font-display font-bold text-sm text-forest block mt-0.5">
                  Direct Farm Line
                </span>
              </div>
              <a
                href="tel:+919028644499"
                className="flex items-center gap-2 bg-forest text-warm-white hover:bg-forest-light px-4 py-2.5 rounded-full text-xs font-bold transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                Call Office
              </a>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="mb-6 lg:hidden">
              <h2 className="font-display font-extrabold text-2xl text-forest mb-2">
                Submit your Requirements
              </h2>
              <p className="font-body text-sm text-foreground/75 leading-relaxed">
                Fill in the details below to submit your commercial requirements directly to our farm database.
              </p>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* 3. Bottom Contact Link Banner */}
      <section className="bg-beige/30 py-16 border-t border-accent/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-display font-bold text-xl text-forest mb-1">
              Looking for our Farm Location or Direct Phone Contact?
            </h3>
            <p className="font-body text-xs md:text-sm text-foreground/70">
              Visit our Contact & Location page for Google Maps navigation, Google Reviews, and direct office phone details.
            </p>
          </div>
          <Link
            href="/contact"
            className="group flex items-center gap-2 bg-forest text-warm-white hover:bg-forest-light px-6 py-3 rounded-full font-body font-bold text-xs tracking-wider uppercase transition-colors shrink-0 shadow-sm"
          >
            Visit Contact Page
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
