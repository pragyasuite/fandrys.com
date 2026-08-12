"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, ShieldAlert, Award, FileText, CheckCircle } from "lucide-react";

export default function LivestockPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-forest text-warm-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero-adult-yorkshire.jpg"
            alt="Yorkshire breeding facility"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 text-white/70 text-xs font-body font-bold uppercase tracking-widest">
            <Link href="/" className="hover:text-[#C5A880] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <span className="text-white">Livestock & Products</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-warm-white tracking-tight leading-tight">
            Our Livestock & Products
          </h1>
          <p className="font-body text-warm-white/80 max-w-2xl text-sm md:text-base leading-relaxed">
            Fandrys India Private Limited specializes in breeding and selling top-quality piglets, fully grown finishing pigs for cuts, and premium processed pork ready for domestic supply and global export.
          </p>
        </div>
      </section>

      {/* 2. Population Core Metric Banner */}
      <section className="py-12 bg-beige/30 border-b border-accent/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="font-display font-extrabold text-5xl text-forest tracking-tight bg-forest/5 px-6 py-3 rounded-2xl border border-accent/25">
              200+
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-forest">
                Large White Yorkshire Pigs
              </h2>
              <p className="font-body text-xs text-foreground/70">
                Active commercial population raised in our managed housing units in Maharashtra, serving domestic and international export markets.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="group flex items-center gap-2 bg-forest text-warm-white hover:bg-forest-light px-6 py-3 rounded-full font-body font-bold text-xs tracking-wider uppercase transition-colors"
          >
            Check Availability
            <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* 3. Detailed Livestock & Products Showcases */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
          
          {/* Item 1: Fully Grown Yorkshire Pigs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="lg:col-span-6 relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-lg border border-accent/20">
              <Image
                src="/images/livestock-adults.jpg"
                alt="Large White Yorkshire Adult Pigs"
                fill
                className="object-cover"
              />
            </div>
            {/* Details */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-accent font-body font-bold text-xs uppercase tracking-widest block">
                Core Breed Category
              </span>
              <h3 className="font-display font-extrabold text-3xl md:text-4xl text-forest leading-tight">
                Fully Grown Pigs & Breeders
              </h3>
              <p className="font-body text-foreground/80 leading-relaxed text-sm md:text-base">
                We raise and sell fully grown Large White Yorkshire pigs. Fed strictly on 100% top-quality dry feed formulations to guarantee lean growth and optimal health, these animals are sold to butcheries and institutional processors for premium pork cuts, as well as to other commercial pig farms for foundation breeding stock.
              </p>

              {/* Technical Attributes */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-beige/40 p-4 rounded-xl border border-accent/10">
                  <span className="block text-[10px] uppercase font-bold text-accent tracking-wider mb-1">
                    Feed Regiment
                  </span>
                  <span className="font-display font-bold text-sm text-forest">
                    100% Top-Quality Dry Feed
                  </span>
                </div>
                <div className="bg-beige/40 p-4 rounded-xl border border-accent/10">
                  <span className="block text-[10px] uppercase font-bold text-accent tracking-wider mb-1">
                    Breeding Records
                  </span>
                  <span className="font-display font-bold text-sm text-forest">
                    Pedigree Tracked
                  </span>
                </div>
                <div className="bg-beige/40 p-4 rounded-xl border border-accent/10">
                  <span className="block text-[10px] uppercase font-bold text-accent tracking-wider mb-1">
                    Health Certifications
                  </span>
                  <span className="font-display font-bold text-sm text-forest">
                    Veterinary Certified
                  </span>
                </div>
                <div className="bg-beige/40 p-4 rounded-xl border border-accent/10">
                  <span className="block text-[10px] uppercase font-bold text-accent tracking-wider mb-1">
                    Export Compliance
                  </span>
                  <span className="font-display font-bold text-sm text-forest">
                    APEDA / IEC Compliant
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact?type=adult"
                  className="group inline-flex items-center gap-2 bg-forest text-warm-white hover:bg-forest-light px-8 py-3.5 rounded-full font-body font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Enquire About Grown Stock
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* Item 2: Yorkshire Piglets */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Details (Order inverted on large screens) */}
            <div className="lg:col-span-6 lg:order-2 relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-lg border border-accent/20">
              <Image
                src="/images/livestock-piglets.jpg"
                alt="Yorkshire Piglets"
                fill
                className="object-cover"
              />
            </div>
            {/* Narrative */}
            <div className="lg:col-span-6 lg:order-1 space-y-6">
              <span className="text-accent font-body font-bold text-xs uppercase tracking-widest block">
                Early Stage Care
              </span>
              <h3 className="font-display font-extrabold text-3xl md:text-4xl text-forest leading-tight">
                Yorkshire Piglets
              </h3>
              <p className="font-body text-foreground/80 leading-relaxed text-sm md:text-base">
                Fandrys specializes in the breeding and sale of healthy Large White Yorkshire piglets. Raised on high-grade weaning formulas and transitioned to premium dry creep feeds, our piglets boast excellent immune strength and bone density. We supply piglets directly to farmers across India and international clients globally.
              </p>

              <ul className="space-y-3 font-body text-sm text-foreground/75 pt-2">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                  <span>Weaned on premium quality dry starter rations.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                  <span>Managed stress-free environment for healthy weight gain.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                  <span>Regular health and weight logging under veterinary care.</span>
                </li>
              </ul>

              <div className="pt-4">
                <Link
                  href="/contact?type=piglets"
                  className="group inline-flex items-center gap-2 bg-forest text-warm-white hover:bg-forest-light px-8 py-3.5 rounded-full font-body font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Enquire About Piglets
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* Item 3: Hygienically Processed Pork */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="lg:col-span-6 relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-lg border border-accent/20">
              <Image
                src="/images/meat-processing.jpg"
                alt="Hygienically Processed Pork cuts"
                fill
                className="object-cover"
              />
            </div>
            {/* Details */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-accent font-body font-bold text-xs uppercase tracking-widest block">
                Meat Processing Division
              </span>
              <h3 className="font-display font-extrabold text-3xl md:text-4xl text-forest leading-tight">
                Processed Pork & Cold Chain Logistics
              </h3>
              <p className="font-body text-foreground/80 leading-relaxed text-sm md:text-base">
                Fandrys India Private Limited operates a modern processing division adhering to rigorous food safety and hygiene guidelines. We supply premium chilled and frozen pork carcasses, primal cuts (shoulders, bellies, loins, ribs), and customized food-service portions to wholesalers, retailers, and meat distributors nationwide and in international export markets.
              </p>

              {/* Technical Attributes */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-beige/40 p-4 rounded-xl border border-accent/10">
                  <span className="block text-[10px] uppercase font-bold text-accent tracking-wider mb-1">
                    Product Options
                  </span>
                  <span className="font-display font-bold text-sm text-forest">
                    Whole Carcass / Custom Cuts
                  </span>
                </div>
                <div className="bg-beige/40 p-4 rounded-xl border border-accent/10">
                  <span className="block text-[10px] uppercase font-bold text-accent tracking-wider mb-1">
                    Temperature Controls
                  </span>
                  <span className="font-display font-bold text-sm text-forest">
                    Chilled (0-4°C) / Frozen (-18°C)
                </span>
                </div>
                <div className="bg-beige/40 p-4 rounded-xl border border-accent/10">
                  <span className="block text-[10px] uppercase font-bold text-accent tracking-wider mb-1">
                    Sanitation Compliance
                  </span>
                  <span className="font-display font-bold text-sm text-forest">
                    FSSAI Standard Compliant
                  </span>
                </div>
                <div className="bg-beige/40 p-4 rounded-xl border border-accent/10">
                  <span className="block text-[10px] uppercase font-bold text-accent tracking-wider mb-1">
                    Delivery logistics
                  </span>
                  <span className="font-display font-bold text-sm text-forest">
                    Cold-Chain Refrigerated
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/pork-products"
                  className="group inline-flex items-center gap-2 bg-forest text-warm-white hover:bg-forest-light px-8 py-3.5 rounded-full font-body font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Enquire About Pork Supply
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Livestock & Pork Enquiry Call-to-action Section */}
      <section className="bg-forest py-24 text-warm-white relative overflow-hidden border-t border-accent/25">
        {/* Ambient glow overlays */}
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
          <div className="bg-white/10 text-[#C5A880] p-4 rounded-full w-fit mx-auto border border-white/5">
            <Award className="h-8 w-8 text-[#C5A880]" />
          </div>
          <div className="space-y-4">
            <h2 className="font-display font-extrabold text-3xl text-white tracking-tight">
              Interested in Our Livestock or Pork Products?
            </h2>
            <p className="font-body text-white/80 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              We sell healthy piglets, fully grown animals for breeding or cuts, and premium processed pork cuts. Connect with Fandrys&apos; Parali, Beed farm office for supply timelines, domestic shipping, and international container logistics.
            </p>
          </div>
          <div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-warm-white text-forest hover:bg-accent hover:text-warm-white px-8 py-4 rounded-full font-body font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg"
            >
              Send Enquiry
              <FileText className="h-4.5 w-4.5" />
            </Link>
          </div>
          <div className="flex justify-center items-center gap-1.5 text-[10px] text-white/50 font-body">
            <ShieldAlert className="h-3.5 w-3.5 text-[#C5A880] shrink-0" />
            <span>Pricing, weights, and detailed pedigree records are provided strictly on direct verified inquiry.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
