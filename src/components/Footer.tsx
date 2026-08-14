import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, Award, Star, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const googleShareUrl = "https://share.google/II9iq7YVZUzeq8xrX";

  return (
    <footer className="bg-[#121212] text-warm-white relative overflow-hidden border-t border-white/5 pt-20 pb-8">
      {/* Premium accent light bar at the top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-forest via-[#C5A880] to-transparent" />
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-forest/5 rounded-full blur-3xl -mr-48 -mb-48 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#C5A880]/5 rounded-full blur-3xl -ml-40 -mt-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 relative z-10">
        
        {/* Column 1: Brand Info (Span 4) */}
        <div className="md:col-span-4 space-y-6">
          <Link href="/" className="inline-block transition-transform hover:scale-[1.02] duration-300">
            <Image
              src="/images/logo-v2.png"
              alt="Fandrys India Private Limited Logo"
              width={220}
              height={64}
              className="h-17 w-auto object-contain"
            />
          </Link>
          <p className="text-white/80 text-sm leading-relaxed max-w-sm">
            Fandrys India Private Limited operates a state-of-the-art commercial Large White Yorkshire breeding farm and pork processing division in Parali, Beed, Maharashtra. We maintain strict biosafety and cold chain standards to supply national markets.
          </p>
          
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://wa.me/919028644499"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:bg-forest hover:text-white hover:border-forest hover:scale-105 transition-all duration-300"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="tel:+919028644499"
              className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#C5A880] hover:text-[#121212] hover:border-[#C5A880] hover:scale-105 transition-all duration-300"
              aria-label="Call Farm Office"
            >
              <Phone className="h-4.5 w-4.5" />
            </a>
            <a
              href="mailto:info@fandrys.com"
              className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:bg-forest hover:text-white hover:border-forest hover:scale-105 transition-all duration-300"
              aria-label="Email Farm Office"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
            <a
              href={googleShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-xs text-amber-400 hover:bg-white/10 transition-all font-body font-semibold"
            >
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              Google Review
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links (Span 2) */}
        <div className="md:col-span-2 space-y-6">
          <h3 className="font-display font-bold text-sm tracking-wider uppercase text-white">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-white/80 font-body">
            <li>
              <Link href="/about" className="group flex items-center gap-2 hover:text-[#C5A880] transition-all duration-200">
                <span className="w-1.5 h-1.5 rounded-full bg-forest opacity-0 group-hover:opacity-100 transition-all duration-200 shrink-0" />
                <span className="group-hover:translate-x-1 transition-transform duration-200">Our Story</span>
              </Link>
            </li>
            <li>
              <Link href="/livestock" className="group flex items-center gap-2 hover:text-[#C5A880] transition-all duration-200">
                <span className="w-1.5 h-1.5 rounded-full bg-forest opacity-0 group-hover:opacity-100 transition-all duration-200 shrink-0" />
                <span className="group-hover:translate-x-1 transition-transform duration-200">Our Livestock</span>
              </Link>
            </li>
            <li>
              <Link href="/pork-products" className="group flex items-center gap-2 hover:text-[#C5A880] transition-all duration-200">
                <span className="w-1.5 h-1.5 rounded-full bg-forest opacity-0 group-hover:opacity-100 transition-all duration-200 shrink-0" />
                <span className="group-hover:translate-x-1 transition-transform duration-200">Pork Products</span>
              </Link>
            </li>
            <li>
              <Link href="/enquiry" className="group flex items-center gap-2 hover:text-[#C5A880] transition-all duration-200">
                <span className="w-1.5 h-1.5 rounded-full bg-forest opacity-0 group-hover:opacity-100 transition-all duration-200 shrink-0" />
                <span className="group-hover:translate-x-1 transition-transform duration-200">Send Enquiry</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="group flex items-center gap-2 hover:text-[#C5A880] transition-all duration-200">
                <span className="w-1.5 h-1.5 rounded-full bg-forest opacity-0 group-hover:opacity-100 transition-all duration-200 shrink-0" />
                <span className="group-hover:translate-x-1 transition-transform duration-200">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Trust & Compliance Badges (Span 3) */}
        <div className="md:col-span-3 space-y-6">
          <h3 className="font-display font-bold text-sm tracking-wider uppercase text-white">
            Trust & Compliance
          </h3>
          <div className="space-y-4">
            {/* FSSAI Badge */}
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4.5 flex gap-3.5 items-center">
              <div className="bg-forest/10 p-2.5 rounded-xl shrink-0">
                <ShieldCheck className="h-5 w-5 text-forest" />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-white/50">
                  Food Safety
                </span>
                <span className="font-display font-bold text-xs text-white">
                  FSSAI Standards Compliant
                </span>
              </div>
            </div>

            {/* Pedigree Badge */}
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4.5 flex gap-3.5 items-center">
              <div className="bg-[#C5A880]/10 p-2.5 rounded-xl shrink-0">
                <Award className="h-5 w-5 text-[#C5A880]" />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#C5A880]/70">
                  Breed Quality
                </span>
                <span className="font-display font-bold text-xs text-[#C5A880]">
                  100% Pure Yorkshire Pedigree
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 4: Contact details (Span 3) */}
        <div className="md:col-span-3 space-y-6">
          <h3 className="font-display font-bold text-sm tracking-wider uppercase text-white">
            Farm Office
          </h3>
          <ul className="flex flex-col gap-4.5 text-sm text-white/80">
            <li className="flex items-start gap-3.5">
              <div className="bg-white/[0.03] border border-white/5 p-2 rounded-xl text-forest shrink-0 mt-0.5">
                <MapPin className="h-4 w-4" />
              </div>
              <span className="leading-relaxed">
                A/P Guttewadi, Gangakhed Road,
                <br />
                Tal Parali, Dist Beed,
                <br />
                Maharashtra, India - 431515
              </span>
            </li>
            <li className="flex items-center gap-3.5">
              <div className="bg-white/[0.03] border border-white/5 p-2 rounded-xl text-forest shrink-0">
                <Phone className="h-4 w-4" />
              </div>
              <span>+91 90286 44499</span>
            </li>
            <li className="flex items-center gap-3.5">
              <div className="bg-white/[0.03] border border-white/5 p-2 rounded-xl text-forest shrink-0">
                <Mail className="h-4 w-4" />
              </div>
              <a href="mailto:info@fandrys.com" className="break-all hover:text-forest transition-colors">
                info@fandrys.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom copyright section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/50 relative z-10">
        <p>© {currentYear} Fandrys India Private Limited. All rights reserved.</p>
        <div className="flex items-center gap-4 md:gap-6 text-white/60">
          <Link href="/privacy-policy" className="hover:text-forest transition-colors">Privacy Policy</Link>
          <span className="text-white/10 font-thin">|</span>
          <Link href="/terms-of-service" className="hover:text-forest transition-colors">Terms of Service</Link>
          <span className="text-white/10 font-thin">|</span>
          <span className="text-white/40">Beed, MH, India</span>
        </div>
      </div>
    </footer>
  );
}
