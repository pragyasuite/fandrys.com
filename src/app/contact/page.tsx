"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-forest text-warm-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero-operations.jpg"
            alt="Farm worker contact operations"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 text-white/70 text-xs font-body font-bold uppercase tracking-widest">
            <Link href="/" className="hover:text-[#C5A880] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <span className="text-white">Contact Us</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-warm-white tracking-tight leading-tight">
            Contact & Enquiries
          </h1>
          <p className="font-body text-warm-white/80 max-w-2xl text-sm md:text-base leading-relaxed">
            Reach out to our Fandrys office for breeding stock, piglets, and export supply contracts.
          </p>
        </div>
      </section>

      {/* 2. Main Content Layout */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div>
              <span className="text-accent font-body font-bold text-xs uppercase tracking-widest block mb-2">
                Get In Touch
              </span>
              <h2 className="font-display font-extrabold text-3xl text-forest tracking-tight">
                Farm Office Details
              </h2>
              <p className="font-body text-foreground/70 text-sm mt-3 leading-relaxed">
                Please use the direct contact numbers below or fill out our official commercial enquiry form. Our logistics team coordinates shipping routes directly to domestic hubs and global container shipping ports.
              </p>
            </div>

            {/* Cards in precise requested order */}
            <div className="space-y-4">
              {/* Card 1: Company Name */}
              <div className="bg-warm-white p-5 rounded-2xl border border-accent/15 flex items-start gap-4 shadow-sm">
                <div className="bg-forest/5 text-forest p-2.5 rounded-xl shrink-0">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-foreground/50 tracking-wider">
                    Company Name
                  </span>
                  <span className="font-display font-bold text-base text-forest">
                    Fandrys India Private Limited
                  </span>
                </div>
              </div>

              {/* Card 2: Address */}
              <div className="bg-warm-white p-5 rounded-2xl border border-accent/15 flex items-start gap-4 shadow-sm">
                <div className="bg-forest/5 text-forest p-2.5 rounded-xl shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-foreground/50 tracking-wider">
                    Farm Address
                  </span>
                  <span className="font-body text-xs md:text-sm text-foreground/90 leading-relaxed block mt-1">
                    A/P Guttewadi, Gangakhed Road,
                    <br />
                    Tal Parali, Dist Beed,
                    <br />
                    Maharashtra, India - 431515
                  </span>
                </div>
              </div>

              {/* Card 3: Email */}
              <div className="bg-warm-white p-5 rounded-2xl border border-accent/15 flex items-start gap-4 shadow-sm">
                <div className="bg-forest/5 text-forest p-2.5 rounded-xl shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-foreground/50 tracking-wider">
                    Email Address
                  </span>
                  <a href="mailto:info@fandrys.com" className="font-body font-semibold text-sm text-foreground/90 break-all hover:text-forest transition-colors mt-1 block">
                    info@fandrys.com
                  </a>
                </div>
              </div>

              {/* Card 4: Contact Number (Merged Phone & WhatsApp) */}
              <div className="bg-warm-white p-5 rounded-2xl border border-accent/15 flex items-start gap-4 shadow-sm">
                <div className="bg-forest/5 text-forest p-2.5 rounded-xl shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-foreground/50 tracking-wider">
                    Phone & WhatsApp
                  </span>
                  <div className="flex flex-col gap-1.5 mt-1">
                    <a href="tel:+919028644499" className="font-body font-semibold text-sm text-foreground/90 hover:text-forest transition-colors block">
                      +91 90286 44499
                    </a>
                    <a
                      href="https://wa.me/919028644499"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-forest hover:text-accent font-semibold transition-colors"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="mb-6 lg:hidden">
              <h2 className="font-display font-extrabold text-2xl text-forest mb-2">
                Submit an Enquiry
              </h2>
              <p className="font-body text-sm text-foreground/75 leading-relaxed">
                Fill in the details below to submit your commercial requirements directly to our farm database.
              </p>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
