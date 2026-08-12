import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Truck,
  CheckCircle,
  ThermometerSnowflake,
  ClipboardCheck,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Processed Pork & Cold Chain Logistics | Fandrys",
  description: "Order FSSAI-compliant processed pork cuts, carcasses, and wholesale portions. Safe refrigerated cold chain shipping from Beed to global trade ports.",
  alternates: {
    canonical: "https://fandrys.co.in/pork-products",
  },
};

export default function PorkProductsPage() {
  const products = [
    {
      title: "Whole & Half Carcasses",
      description: "Hygienically dressed pork carcasses, head-on or head-off, pre-chilled to preserve shelf life. Ideal for wholesale butcher networks, institutional processors, and cold storage distributors.",
      specs: ["Dressed Weight: 70 - 95 kg", "Storage: Chilled (0°C to 4°C) or Frozen (-18°C)", "Pack: Wrapped food-grade poly-sheeting"],
      image: "/images/meat-processing.jpg"
    },
    {
      title: "Premium Primal Cuts",
      description: "Vacuum-sealed primal cuts processed strictly from our own Large White Yorkshire pigs. Provides exceptional meat-to-fat ratios, tenderness, and uniform sizing for retail packs and supermarkets.",
      specs: ["Available Cuts: Pork Belly, Loin Racks, Shoulders, Ribs", "Packaging: Thick gauge vacuum-packed bags", "Delivery: Temperature-monitored cold chain"],
      image: "/images/livestock-adults.jpg"
    },
    {
      title: "Institutional & Custom Portion Cuts",
      description: "Portioned and trimmed specifications designed for hotels, high-end restaurants, and catering services (HORECA). Handled in automated, sanitised facilities with strict weight logs.",
      specs: ["Portions: Pork chops, diced pork, collar rolls, ribs", "Portion Sizes: Tailored to client menu specs", "Hygienic standard: Sterilised stainless processing lines"],
      image: "/images/hero-operations.jpg"
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-forest text-warm-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/meat-processing.jpg"
            alt="Pork meat processing room"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 text-white/70 text-xs font-body font-bold uppercase tracking-widest">
            <Link href="/" className="hover:text-[#C5A880] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <span className="text-white">Pork Meat Division</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-warm-white tracking-tight leading-tight">
            Pork Processing & Supply
          </h1>
          <p className="font-body text-warm-white/80 max-w-2xl text-sm md:text-base leading-relaxed">
            State-of-the-art hygienic pig meat processing, custom packaging, and strict cold-chain distribution from our Beed facility to domestic ports and global export destinations.
          </p>
        </div>
      </section>

      {/* 2. Facility Standards Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-body font-bold text-xs uppercase tracking-widest mb-3 block">
              Quality Assurance
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-forest leading-tight">
              Uncompromising Food Safety Standards
            </h2>
            <p className="font-body text-foreground/75 text-sm md:text-base mt-4 leading-relaxed">
              Fandrys India Private Limited maintains a sterile cold-room workflow. From slaughter monitoring to dispatch, our pork processing adheres directly to FSSAI guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-warm-white p-6 rounded-2xl border border-accent/15 flex flex-col items-start gap-4">
              <div className="bg-forest/10 text-forest p-3 rounded-xl">
                <ThermometerSnowflake className="h-6 w-6 text-forest" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest">
                Sub-Zero Cold Chain
              </h3>
              <p className="font-body text-xs md:text-sm text-foreground/70 leading-relaxed">
                Automated chiller corridors that rapidly lower carcass temperatures to prevent bacterial load and retain peak meat quality.
              </p>
            </div>

            <div className="bg-warm-white p-6 rounded-2xl border border-accent/15 flex flex-col items-start gap-4">
              <div className="bg-forest/10 text-forest p-3 rounded-xl">
                <ClipboardCheck className="h-6 w-6 text-forest" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest">
                FSSAI Compliance
              </h3>
              <p className="font-body text-xs md:text-sm text-foreground/70 leading-relaxed">
                Sterilised workspace parameters, regular water quality testings, and strict biosecurity guidelines across our plant.
              </p>
            </div>

            <div className="bg-warm-white p-6 rounded-2xl border border-accent/15 flex flex-col items-start gap-4">
              <div className="bg-forest/10 text-forest p-3 rounded-xl">
                <ShieldCheck className="h-6 w-6 text-forest" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest">
                Veterinary Inspections
              </h3>
              <p className="font-body text-xs md:text-sm text-foreground/70 leading-relaxed">
                Every animal undergoes ante-mortem and post-mortem evaluation by certified veterinarians to guarantee fit-for-food release.
              </p>
            </div>

            <div className="bg-warm-white p-6 rounded-2xl border border-accent/15 flex flex-col items-start gap-4">
              <div className="bg-forest/10 text-forest p-3 rounded-xl">
                <Truck className="h-6 w-6 text-forest" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest">
                Refrigerated Logistics
              </h3>
              <p className="font-body text-xs md:text-sm text-foreground/70 leading-relaxed">
                Dedicated cold-van logistics and cargo connections securing a seamless supply chain from Beed directly to domestic ports (JNPT, Mumbai) for global export.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Catalog Grid */}
      <section className="bg-beige/30 py-24 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <div className="max-w-xl">
            <span className="text-accent font-body font-bold text-xs uppercase tracking-widest mb-3 block">
              Product Categories
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-forest leading-tight">
              Processed Pork Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((prod, index) => (
              <div key={index} className="bg-warm-white rounded-3xl overflow-hidden shadow-md border border-accent/15 flex flex-col group">
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-xl text-forest">
                      {prod.title}
                    </h3>
                    <p className="font-body text-xs md:text-sm text-foreground/75 leading-relaxed">
                      {prod.description}
                    </p>
                    <div className="h-px bg-black/[0.06] my-2" />
                    <ul className="space-y-2">
                      {prod.specs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-foreground/75 font-body">
                          <CheckCircle className="h-4 w-4 text-forest shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/contact?type=meat&product=${encodeURIComponent(prod.title)}`}
                    className="group inline-flex items-center justify-center gap-2 bg-forest text-warm-white hover:bg-forest-light px-6 py-3 rounded-xl font-body font-bold text-xs tracking-wider uppercase transition-all shadow-sm"
                  >
                    Request Pricing
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Global Supply Chain & Export Logistics */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-lg border border-accent/20">
            <Image
              src="/images/meat-processing.jpg"
              alt="Cold chain supply logistics"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-6 space-y-6">
            <span className="text-accent font-body font-bold text-xs uppercase tracking-widest block">
              Export Logistics Reach
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-forest leading-tight">
              Seamless Cold Chain Logistics from Beed to Global Ports
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed text-sm md:text-base">
              At Fandrys, we bridge the agricultural capacity of Beed, Maharashtra with the global pork demand. We manage complete cold-chain logistics pathways directly to domestic cargo hubs and major international container shipping ports (like JNPT, Mumbai) to export our premium pork products to countries all over the world.
            </p>
            <p className="font-body text-foreground/70 text-xs leading-relaxed">
              Every shipment is tracked via temperature loggers inside cold transport containers, ensuring that our pork reaches international ports and buyers in the exact same pristine, fresh condition as it left our cooling facilities.
            </p>
            <div className="flex gap-4 items-center bg-beige/40 p-4.5 rounded-2xl border border-accent/10 w-fit">
              <Truck className="h-5 w-5 text-forest shrink-0" />
              <span className="font-body text-xs font-semibold text-forest">
                Express Refrigerated Container Routes & Global Export Channels
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call to action enquiry */}
      <section className="bg-forest py-24 text-center px-6 md:px-12 relative overflow-hidden border-t border-accent/20">
        <div className="max-w-2xl mx-auto space-y-6 relative z-10 text-warm-white">
          <Award className="h-10 w-10 text-accent mx-auto" />
          <h2 className="font-display font-extrabold text-3xl text-warm-white leading-tight">
            Order Processed Pork in Wholesale Volumes
          </h2>
          <p className="font-body text-warm-white/80 text-sm md:text-base leading-relaxed">
            Partner with Fandrys India Private Limited for institutional pork supply, wholesale orders, and continuous cold chain supply routes to global export destinations.
          </p>
          <Link
            href="/contact?type=meat"
            className="group inline-flex items-center gap-2 bg-warm-white text-forest hover:bg-accent hover:text-warm-white px-8 py-3.5 rounded-full font-body font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md"
          >
            Submit Meat Supply Enquiry
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
