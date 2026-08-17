import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  History,
  Target,
  Compass,
  Tractor,
  Droplets,
  Layers,
  Heart,
  ChevronRight,
  Shield,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story & Farm",
  description: "Learn about Fandrys India Private Limited in Parali, Beed. Read our history of purebred Yorkshire pig breeding and global export compliance.",
  alternates: {
    canonical: "https://fandrys.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-forest text-warm-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero-infrastructure.jpg"
            alt="Farm aerial overview"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 text-white/70 text-xs font-body font-bold uppercase tracking-widest">
            <Link href="/" className="hover:text-[#C5A880] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <span className="text-white">About Us</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-warm-white tracking-tight leading-tight">
            Our Farm & Story
          </h1>
          <p className="font-body text-warm-white/80 max-w-2xl text-sm md:text-base leading-relaxed">
            Building Fandrys India Private Limited as a modern, highly hygienic, and scalable commercial pig farming and pork processing enterprise in Parali, Beed, Maharashtra, serving domestic and international export markets.
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 bg-forest/5 border border-forest/10 text-forest px-3 py-1 rounded-full text-xs font-body font-bold uppercase tracking-wider w-fit">
              <History className="h-3.5 w-3.5" />
              <span>Established ~1 Year Ago</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-forest leading-tight">
              A Scalable Enterprise in Beed, Maharashtra
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed text-base md:text-lg">
              Established approximately one year ago (in 2025), <strong>Fandrys India Private Limited</strong> began with a clear commercial focus: to establish a premier breeding, raising, and hygienic pork processing facility for <strong>Large White Yorkshire pigs</strong> in Parali, Beed, Maharashtra, serving regional demands and building dedicated export channels to supply clients all over the world.
            </p>
            <p className="font-body text-foreground/75 leading-relaxed text-sm md:text-base">
              Today, our active population has grown to <strong>200+ healthy Large White Yorkshire pigs</strong> with a total farm capacity of <strong>500+ animals</strong> across <strong>1 acre</strong> of state-of-the-art facilities. We feed our herd with 100% premium quality dry feed for optimal development. Our commercial sales cover weaned piglets, fully grown finishing stock, and processed meat cuts, serving the expanding needs of domestic and global export markets.
            </p>
            <div className="bg-beige/40 p-6 rounded-2xl border border-accent/15 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="block text-[10px] uppercase font-bold text-accent tracking-wider">
                  Location
                </span>
                <span className="font-display font-bold text-base text-forest">
                  Parali, Beed, Maharashtra, India
                </span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-accent tracking-wider">
                  Specialization
                </span>
                <span className="font-display font-bold text-base text-forest">
                  Yorkshire Breed & Global Export
                </span>
              </div>
            </div>
          </div>

          {/* Narrative Image */}
          <div className="lg:col-span-5 relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl border border-accent/20">
            <Image
              src="/images/livestock-adults.jpg"
              alt="Our Farm Yorkshire pig breed"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Section */}
      <section className="bg-beige/30 py-24 md:py-32 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Vision */}
          <div className="bg-warm-white p-8 md:p-12 rounded-3xl border border-accent/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="bg-forest/5 text-forest p-4 rounded-2xl w-fit mb-8 border border-forest/10">
                <Target className="h-8 w-8 text-forest" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-forest mb-4">
                Our Vision
              </h3>
              <p className="font-body text-foreground/80 text-base md:text-lg leading-relaxed italic">
                &ldquo;To build Fandrys as a professionally managed, scalable pig farming and premium pork processing business from Maharashtra with opportunities to serve domestic markets and export premium pork and breeding stock all over the world.&rdquo;
              </p>
            </div>
            <div className="h-1 w-20 bg-forest mt-8" />
          </div>

          {/* Mission */}
          <div className="bg-forest text-warm-white p-8 md:p-12 rounded-3xl border border-accent/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="bg-white/10 text-[#C5A880] p-4 rounded-2xl w-fit mb-8 border border-white/5">
                <Compass className="h-8 w-8 text-[#C5A880]" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-warm-white mb-6">
                Our Mission
              </h3>
              <ul className="space-y-4 font-body text-sm md:text-base text-warm-white/90">
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <span><strong>Responsible Management:</strong> Maintaining the highest standards of daily livestock care.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <span><strong>Hygienic Pork Processing:</strong> Operating a modern, standardized meat processing line conforming to FSSAI and APEDA guidelines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <span><strong>Nutrition & Dry Feed:</strong> Feeding 100% premium quality dry feed formulas to secure optimal development.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <span><strong>Global Compliance:</strong> Adhering to strict international trade, customs biosafety, and APEDA export regulations.</span>
                </li>
              </ul>
            </div>
            <div className="h-1 w-20 bg-[#C5A880] mt-8" />
          </div>
        </div>
      </section>

      {/* 4. Farm Infrastructure Showcases */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-accent font-body font-bold text-xs uppercase tracking-widest mb-3 block">
              The Facility
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-forest leading-tight">
              Farm Infrastructure
            </h2>
            <p className="font-body text-foreground/75 text-sm md:text-base mt-4 leading-relaxed">
              Our farm relies on structured compartments and automated drinking systems to secure pig bio-security and healthy environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Housing */}
            <div className="bg-warm-white rounded-2xl overflow-hidden border border-accent/15 group">
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src="/images/hero-infrastructure.jpg"
                  alt="Pig housing infrastructure"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Tractor className="h-5 w-5 text-accent" />
                  <h3 className="font-display font-bold text-lg text-forest">
                    Pig Housing
                  </h3>
                </div>
                <p className="font-body text-xs md:text-sm text-foreground/70 leading-relaxed">
                  Properly ventilated concrete floor housing arrays with separated chambers to ensure healthy space allocation per pig.
                </p>
              </div>
            </div>

            {/* Premium Dry Feed */}
            <div className="bg-warm-white rounded-2xl overflow-hidden border border-accent/15 group">
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src="/images/hero-operations.jpg"
                  alt="Feeding areas"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="h-5 w-5 text-accent" />
                  <h3 className="font-display font-bold text-lg text-forest">
                    Premium Dry Feed
                  </h3>
                </div>
                <p className="font-body text-xs md:text-sm text-foreground/70 leading-relaxed">
                  Automated feeders supplying 100% premium dry feed formulas to ensure clean digestion and optimal carcass yield.
                </p>
              </div>
            </div>

            {/* Water Systems */}
            <div className="bg-warm-white rounded-2xl overflow-hidden border border-accent/15 group">
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src="/images/hero-operations.jpg"
                  alt="Water systems"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Droplets className="h-5 w-5 text-accent" />
                  <h3 className="font-display font-bold text-lg text-forest">
                    Water Systems
                  </h3>
                </div>
                <p className="font-body text-xs md:text-sm text-foreground/70 leading-relaxed">
                  Nipple-style drinking nozzles that supply clean, filtered water on demand while preventing moisture log within pens.
                </p>
              </div>
            </div>

            {/* Piglet Areas */}
            <div className="bg-warm-white rounded-2xl overflow-hidden border border-accent/15 group">
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src="/images/hero-piglets.jpg"
                  alt="Piglet areas"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="h-5 w-5 text-accent" />
                  <h3 className="font-display font-bold text-lg text-forest">
                    Piglet Nursery Units
                  </h3>
                </div>
                <p className="font-body text-xs md:text-sm text-foreground/70 leading-relaxed">
                  Warm, draught-free enclosures with mother farrowing protection rails to minimize piglet crushing and guarantee early survival.
                </p>
              </div>
            </div>

            {/* Surroundings */}
            <div className="bg-warm-white rounded-2xl overflow-hidden border border-accent/15 group">
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src="/images/hero-infrastructure.jpg"
                  alt="Farm surroundings"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Tractor className="h-5 w-5 text-accent" />
                  <h3 className="font-display font-bold text-lg text-forest">
                    Farm Surroundings
                  </h3>
                </div>
                <p className="font-body text-xs md:text-sm text-foreground/70 leading-relaxed">
                  Secured outer fencing perimeter, clean drainage, and open access roads for transport vehicles and bulk feed arrivals.
                </p>
              </div>
            </div>

            {/* Management Areas */}
            <div className="bg-warm-white rounded-2xl overflow-hidden border border-accent/15 group">
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src="/images/hero-operations.jpg"
                  alt="Management areas"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <h3 className="font-display font-bold text-lg text-forest">
                    Management & Records
                  </h3>
                </div>
                <p className="font-body text-xs md:text-sm text-foreground/70 leading-relaxed">
                  Dedicated administration room to track feed consumption, veterinary journals, growth rate spreadsheets, and business files.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Banner */}
      <section className="py-24 bg-forest text-warm-white text-center px-6 md:px-12 relative overflow-hidden border-t border-accent/20">
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="font-display font-extrabold text-3xl text-warm-white leading-tight">
            Interested in a Commercial Partnership?
          </h2>
          <p className="font-body text-warm-white/80 text-sm md:text-base leading-relaxed">
            Connect with Fandrys India Private Limited to coordinate supply delivery paths to national distributors and international ports.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-warm-white text-forest hover:bg-accent hover:text-warm-white px-8 py-3.5 rounded-full font-body font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md"
          >
            Contact Our Farm Office
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
