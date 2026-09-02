import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, MessageCircle, ShieldCheck, Star, ExternalLink, ArrowRight, Map } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Farm Location",
  description: "Get in touch with Fandrys India Private Limited in Parali, Beed, Maharashtra. Find our farm location on Google Maps, call us, or leave a review.",
  alternates: {
    canonical: "https://fandrys.com/contact",
  },
};

export default function ContactPage() {
  const googleShareUrl = "https://maps.app.goo.gl/13WdfHXY5UNHULcY9";

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
            <span className="text-white">Contact & Location</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-warm-white tracking-tight leading-tight">
            Contact & Farm Location
          </h1>
          <p className="font-body text-warm-white/80 max-w-2xl text-sm md:text-base leading-relaxed">
            Reach out to our Fandrys office in Parali, Beed, Maharashtra. Connect via phone, email, WhatsApp, or find us on Google Maps.
          </p>
        </div>
      </section>

      {/* 2. Main Content Layout */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-accent font-body font-bold text-xs uppercase tracking-widest block mb-2">
                Get In Touch
              </span>
              <h2 className="font-display font-extrabold text-3xl text-forest tracking-tight">
                Farm Office Details
              </h2>
              <p className="font-body text-foreground/70 text-sm mt-3 leading-relaxed">
                Reach out directly to our administrative team or visit our Google Business profile for customer reviews and location navigation.
              </p>
            </div>

            {/* Reorganized Contact Cards in precise requested order */}
            <div className="space-y-4 font-body">
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
                  <span className="text-xs md:text-sm text-foreground/90 leading-relaxed block mt-1">
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
                  <a href="mailto:info@fandrys.com" className="font-semibold text-sm text-foreground/90 break-all hover:text-forest transition-colors mt-1 block">
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
                    <a href="tel:+919028644499" className="font-semibold text-sm text-foreground/90 hover:text-forest transition-colors block">
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

              {/* Google Business & Review Card */}
              <div className="bg-gradient-to-br from-forest/5 to-beige/40 p-6 rounded-3xl border border-forest/15 space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-forest text-warm-white p-2 rounded-xl">
                      <Star className="h-4 w-4 fill-warm-white" />
                    </div>
                    <div>
                      <span className="font-display font-bold text-sm text-forest block">
                        Google Local Business
                      </span>
                      <span className="text-[10px] text-foreground/60">
                        Fandrys India Private Limited
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-foreground/75 leading-relaxed">
                  Have you visited our farm or purchased livestock? We welcome your review on Google Local!
                </p>
                <a
                  href={googleShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 bg-forest text-warm-white hover:bg-forest-light py-3 px-6 rounded-full font-body font-bold text-xs tracking-wider uppercase transition-all shadow-md"
                >
                  Review Us on Google
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Location Embed & Enquiry Link */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-warm-white p-6 md:p-8 rounded-3xl border border-accent/15 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-accent font-body font-bold text-xs uppercase tracking-widest block mb-1">
                    Google Maps Location
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-forest">
                    Find Our Farm in Beed
                  </h3>
                </div>
                <a
                  href={googleShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-forest hover:text-accent font-body font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <Map className="h-4 w-4" />
                  Open in Google Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Embedded Google Map iframe */}
              <div className="relative w-full h-[360px] md:h-[420px] rounded-2xl overflow-hidden border border-accent/20 shadow-inner bg-beige/50">
                <iframe
                  title="Fandrys India Private Limited Farm Location"
                  src="https://maps.google.com/maps?q=18.759345872572474,76.66265371904527&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-accent/10 text-xs font-body text-foreground/75">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-forest shrink-0" />
                  Gangakhed Road, Tal Parali, Dist Beed, Maharashtra 431515
                </span>
                <a
                  href={googleShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest hover:underline font-semibold"
                >
                  View Google Local Profile →
                </a>
              </div>
            </div>

            {/* Commercial Enquiry Redirect Banner */}
            <div className="bg-forest text-warm-white p-8 rounded-3xl border border-accent/20 shadow-xl space-y-4">
              <span className="text-[#C5A880] font-body font-bold text-xs uppercase tracking-widest block">
                Wholesale & Export Orders
              </span>
              <h3 className="font-display font-extrabold text-2xl text-white">
                Looking to Submit a Commercial Enquiry?
              </h3>
              <p className="font-body text-white/80 text-xs md:text-sm leading-relaxed max-w-xl">
                We have created a dedicated enquiry portal where you can specify your required quantities of piglets, breeding stock, or processed pork cuts.
              </p>
              <Link
                href="/enquiry"
                className="group inline-flex items-center gap-2 bg-warm-white text-forest hover:bg-accent hover:text-warm-white px-6 py-3 rounded-full font-body font-bold text-xs tracking-wider uppercase transition-all shadow-md mt-2"
              >
                Go to Enquiry Form
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
