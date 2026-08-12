"use client";

import Link from "next/link";
import { ChevronRight, ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      {/* 1. Header Banner */}
      <section className="bg-forest text-warm-white py-20 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 text-white/70 text-xs font-body font-bold uppercase tracking-widest">
            <Link href="/" className="hover:text-[#C5A880] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <span className="text-white">Privacy Policy</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-warm-white tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="font-body text-warm-white/80 max-w-2xl text-sm md:text-base leading-relaxed">
            How Fandrys India Private Limited protects, manages, and respects your commercial data.
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
                <ShieldCheck className="h-6 w-6 text-forest shrink-0" />
                <h3 className="font-display font-bold text-lg text-forest">Privacy Commitment</h3>
              </div>
              <p className="font-body text-xs md:text-sm text-foreground/75 leading-relaxed">
                Fandrys India Private Limited is committed to protecting the corporate, individual, and commercial details you share with us.
              </p>
              <div className="h-px bg-black/[0.05]" />
              <ul className="space-y-4 font-body text-xs text-foreground/80">
                <li className="flex items-center gap-2.5">
                  <Lock className="h-4 w-4 text-forest" />
                  <span>Secure SSL Encryption</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Eye className="h-4 w-4 text-forest" />
                  <span>No data sharing with third parties</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <FileText className="h-4 w-4 text-forest" />
                  <span>APEDA / FSSAI standard safety</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Narrative */}
          <div className="lg:col-span-8 space-y-8 font-body text-sm md:text-base text-foreground/85 leading-relaxed">
            <div>
              <span className="text-xs uppercase font-bold text-accent tracking-widest block mb-2">Effective Date</span>
              <p className="font-semibold text-forest">August 10, 2026</p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-2xl text-forest">1. Information We Collect</h2>
              <p>
                We collect information directly from you when you submit an enquiry via our website forms or reach out to us via telephone, email, or WhatsApp. This includes:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Corporate details (Company name, business license details, APEDA codes).</li>
                <li>Contact details (Name, email address, WhatsApp number, telephone number).</li>
                <li>Delivery information (Shipping ports, wholesale target destinations, delivery addresses).</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-2xl text-forest">2. How We Use Your Information</h2>
              <p>
                The information collected is used solely to facilitate commercial transactions, reply to wholesale supply enquiries, configure container shipping routes, and complete necessary import/export documentations. We use it to:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Provide accurate pricing on breeding stock, piglets, and pork carcasses.</li>
                <li>Fulfill global export shipments and coordinate temperature-controlled container logistics.</li>
                <li>Send official company updates and compliance certificates relative to your purchase.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-2xl text-forest">3. Data Security & Storage</h2>
              <p>
                All data submitted through the Fandrys portal is encrypted using industry-standard Secure Sockets Layer (SSL) protocols. Your business information is stored securely on servers with restricted access controls. We enforce strict internal data guidelines to prevent unauthorized access, loss, or alteration.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-2xl text-forest">4. Cookies & Analytics</h2>
              <p>
                Our website utilizes standard traffic cookies to monitor visitor count, general geographic regions, and page performance. Cookies help us optimize our server speeds and improve layout layouts for regional and global buyers. You can disable cookies inside your personal browser settings without losing access to our catalog.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-2xl text-forest">5. Third-Party Disclosures</h2>
              <p>
                We do not sell, rent, or trade your personal or corporate details. Data is shared with external partners only when necessary to execute import-export shipments, such as coordinating customs clearings with APEDA, shipping container lines, and government veterinary departments.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-2xl text-forest">6. Contacting Us</h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to modify, view, or remove your contact records from our database, please write to our data safety officer at:
              </p>
              <div className="bg-beige/40 p-6 rounded-2xl border border-accent/15 mt-4 space-y-2">
                <p className="font-bold text-forest">Fandrys India Private Limited</p>
                <p className="text-xs md:text-sm">A/P Guttewadi, Gangakhed Road, Tal Parali, Dist Beed, MH, India - 431515</p>
                <p className="text-xs md:text-sm font-semibold">Email: info@fandrys.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
