"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  TrendingUp,
  Activity,
  Heart,
  Calendar,
  MessageCircle,
  FileText,
  Sprout,
  Droplets,
  Warehouse,
  Maximize,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import HeroSlider from "@/components/HeroSlider";

export default function HomeClient() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="bg-background min-h-screen text-foreground">
      {/* 1. HERO SLIDER */}
      <HeroSlider />

      {/* 2. FARM INTRODUCTION & STATISTICS */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Intro text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <span className="text-accent font-body font-bold text-xs uppercase tracking-widest mb-3">
              About Our Farm
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-forest leading-tight mb-6">
              Commercial Pig Farming with a Focus on Quality & Growth.
            </h2>
            <p className="font-body text-foreground/80 text-base md:text-lg leading-relaxed mb-8">
              Based in Guttewadi (Parali, Beed), Maharashtra, <strong>Fandrys India Private Limited</strong> is a professionally managed commercial Large White Yorkshire pig farm. We specialize in breeding and selling healthy piglets, fully grown animals for breeding or cuts, and premium processed pork meat. With an active population of 200+ pigs raised on 100% top-quality dry feed under strict biosecurity protocols, we serve domestic markets and operate a compliant export supply chain shipping to international markets worldwide.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 bg-forest text-warm-white hover:bg-forest-light px-8 py-3.5 rounded-full font-body font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Discover Our Farm
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
            </Link>
          </motion.div>

          {/* Statistics Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-gradient-to-br from-forest via-forest to-[#9A1218] text-warm-white p-8 md:p-10 rounded-3xl shadow-2xl relative border border-white/10 overflow-hidden"
          >
            {/* Custom glowing background circle overlays */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/20 rounded-full blur-2xl -ml-16 -mb-16" />
            
            <div className="relative z-10 flex flex-col gap-6">
              <div>
                <span className="font-body text-[10px] font-bold uppercase tracking-widest text-white/70 block mb-1">
                  Active Population
                </span>
                <div className="font-display font-extrabold text-5xl md:text-6xl text-white tracking-tight mt-1">
                  200+
                </div>
                <p className="font-body text-xs text-white/85 mt-2 leading-relaxed">
                  Healthy commercial Yorkshire pigs bred and raised under managed biosafety protocols.
                </p>
              </div>

              <div className="h-px bg-white/10 my-1" />

              {/* Verified Statistics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Farm Capacity */}
                <div className="bg-white/[0.06] border border-white/10 p-4.5 rounded-2xl flex flex-col gap-3 hover:bg-white/[0.1] transition-all duration-300 group">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold text-white/70 tracking-widest">
                      Farm Capacity
                    </span>
                    <Warehouse className="h-4 w-4 text-white/50 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-display font-extrabold text-lg text-white leading-none">
                    500 Animals
                  </span>
                </div>

                {/* Breeding Stock */}
                <div className="bg-white/[0.06] border border-white/10 p-4.5 rounded-2xl flex flex-col gap-3 hover:bg-white/[0.1] transition-all duration-300 group">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold text-white/70 tracking-widest">
                      Breeding Stock
                    </span>
                    <Award className="h-4 w-4 text-white/50 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-display font-extrabold text-lg text-white leading-none">
                    50+
                  </span>
                </div>

                {/* Yorkshire Piglets */}
                <div className="bg-white/[0.06] border border-white/10 p-4.5 rounded-2xl flex flex-col gap-3 hover:bg-white/[0.1] transition-all duration-300 group">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold text-white/70 tracking-widest">
                      Yorkshire Piglets
                    </span>
                    <Heart className="h-4 w-4 text-white/50 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-display font-extrabold text-lg text-white leading-none">
                    150
                  </span>
                </div>

                {/* Farm Area */}
                <div className="bg-white/[0.06] border border-white/10 p-4.5 rounded-2xl flex flex-col gap-3 hover:bg-white/[0.1] transition-all duration-300 group">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold text-white/70 tracking-widest">
                      Farm Area
                    </span>
                    <Maximize className="h-4 w-4 text-white/50 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-display font-extrabold text-lg text-white leading-none">
                    1 Acre
                  </span>
                </div>
              </div>

              {/* Verified Badge pill at the bottom */}
              <div className="text-[10px] text-white/80 flex items-center gap-2 mt-2 bg-white/[0.05] py-2 px-4 rounded-xl border border-white/5 w-fit">
                <Calendar className="h-3.5 w-3.5 text-white/60 shrink-0" />
                <span>Operational History: ~1 Year (Beed, Maharashtra)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. WHY CHOOSE OUR FARM */}
      <section className="bg-beige/40 py-24 md:py-32 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-accent font-body font-bold text-xs uppercase tracking-widest mb-3 block">
              Core Strengths
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-forest leading-tight">
              A Professionally Managed Commercial Farming System
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Card 1 */}
            <motion.div
              variants={itemVariants}
              className="bg-warm-white p-8 rounded-2xl border border-accent/10 hover:border-accent/40 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full"
            >
              <div className="bg-forest/10 text-forest p-3.5 rounded-xl w-fit mb-6 transition-transform group-hover:scale-105 duration-300">
                <Award className="h-6 w-6 text-forest" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest mb-3">
                Large White Yorkshire
              </h3>
              <p className="font-body text-sm text-foreground/75 leading-relaxed flex-grow">
                Focused specifically on commercial Large White Yorkshire pig farming to ensure top genetics and growth ratios.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={itemVariants}
              className="bg-warm-white p-8 rounded-2xl border border-accent/10 hover:border-accent/40 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full"
            >
              <div className="bg-forest/10 text-forest p-3.5 rounded-xl w-fit mb-6 transition-transform group-hover:scale-105 duration-300">
                <Layers className="h-6 w-6 text-forest" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest mb-3">
                200+ Livestock
              </h3>
              <p className="font-body text-sm text-foreground/75 leading-relaxed flex-grow">
                A commercial-scale livestock operation with 200+ pigs, built for scale, reliable supply, and market consistency.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={itemVariants}
              className="bg-warm-white p-8 rounded-2xl border border-accent/10 hover:border-accent/40 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full"
            >
              <div className="bg-forest/10 text-forest p-3.5 rounded-xl w-fit mb-6 transition-transform group-hover:scale-105 duration-300">
                <ShieldCheck className="h-6 w-6 text-forest" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest mb-3">
                Responsible Management
              </h3>
              <p className="font-body text-sm text-foreground/75 leading-relaxed flex-grow">
                Focused on professional daily animal care, specialized nutritionist-guided feeding, and strict farm sanitation.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              variants={itemVariants}
              className="bg-warm-white p-8 rounded-2xl border border-accent/10 hover:border-accent/40 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full"
            >
              <div className="bg-forest/10 text-forest p-3.5 rounded-xl w-fit mb-6 transition-transform group-hover:scale-105 duration-300">
                <TrendingUp className="h-6 w-6 text-forest" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest mb-3">
                Export Excellence
              </h3>
              <p className="font-body text-sm text-foreground/75 leading-relaxed flex-grow">
                Developing a highly compliant agricultural enterprise structured to serve national trade and export markets all over the world.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. ADULT PIGS + PIGLETS SECTION (SPLIT) */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Card: Adults */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-warm-white rounded-3xl overflow-hidden shadow-xl border border-accent/15 flex flex-col h-full group"
          >
            <div className="relative h-[250px] md:h-[350px] overflow-hidden">
              <Image
                src="/images/livestock-adults.jpg"
                alt="Large White Yorkshire adult breeding profile"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow justify-between">
              <div>
                <span className="text-accent font-body font-bold text-xs uppercase tracking-widest block mb-2">
                  Breeding & cuts
                </span>
                <h3 className="font-display font-extrabold text-2xl text-forest mb-4">
                  Fully Grown Yorkshire Animals
                </h3>
                <p className="font-body text-foreground/85 text-sm md:text-base leading-relaxed mb-6">
                  Highly adaptable, fast-growing fully grown pigs. We sell live animals directly to processors and butchers for quality pork cuts, and supply prime breeding animals for farm stock scaling globally.
                </p>
              </div>
              <Link
                href="/livestock"
                className="group inline-flex items-center gap-2 text-forest hover:text-accent font-body font-bold text-xs tracking-wider uppercase transition-colors pt-2"
              >
                Breed Specifications
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card: Piglets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-warm-white rounded-3xl overflow-hidden shadow-xl border border-accent/15 flex flex-col h-full group"
          >
            <div className="relative h-[250px] md:h-[350px] overflow-hidden">
              <Image
                src="/images/livestock-piglets.jpg"
                alt="Yorkshire piglets in clean straw farrowing pen"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow justify-between">
              <div>
                <span className="text-accent font-body font-bold text-xs uppercase tracking-widest block mb-2">
                  Early stage growth
                </span>
                <h3 className="font-display font-extrabold text-2xl text-forest mb-4">
                  Healthy Yorkshire Piglets
                </h3>
                <p className="font-body text-foreground/85 text-sm md:text-base leading-relaxed mb-6">
                  Carefully weaned and raised in warm nurseries. We supply healthy, active piglets directly to commercial pig farms looking to start or expand their production lineage, prepped for export shipping.
                </p>
              </div>
              <Link
                href="/livestock"
                className="group inline-flex items-center gap-2 text-forest hover:text-accent font-body font-bold text-xs tracking-wider uppercase transition-colors pt-2"
              >
                Piglet Information
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. INFRASTRUCTURE MINI PREVIEW */}
      <section className="py-24 md:py-32 bg-charcoal text-warm-white relative overflow-hidden border-t border-accent/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -mr-64 -mt-64 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-white/70 font-body font-bold text-xs uppercase tracking-widest block">
              Modern Facilities
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-warm-white leading-tight">
              Biosecure Housing Infrastructure
            </h2>
            <p className="font-body text-warm-white/80 text-sm md:text-base leading-relaxed">
              We separate our animals into specialized farrowing, nursery, and finishing sheds to ensure stress-free living conditions. Clean concrete flooring and sanitization lanes keep environmental risks to a minimum.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 bg-[#C5A880] text-charcoal hover:bg-[#FAF9F6] px-8 py-3.5 rounded-full font-body font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md"
              >
                View Infrastructure Details
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-accent/20"
          >
            <Image
              src="/images/hero-infrastructure.jpg"
              alt="Pig farm sheds and surroundings Beed"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* 6. PORK MEAT PROCESSING DIVISION */}
      <section className="py-24 md:py-32 bg-beige/30 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-accent/20 lg:order-2"
          >
            <Image
              src="/images/meat-processing.jpg"
              alt="Hygienic pig meat processing and vacuum packing facility"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 lg:order-1"
          >
            <span className="text-accent font-body font-bold text-xs uppercase tracking-widest block">
              Meat Processing Division
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-forest leading-tight">
              Hygienic & Standardized Pork Processing
            </h2>
            <p className="font-body text-foreground/80 text-base leading-relaxed">
              Fandrys India Private Limited operates a modern, state-of-the-art pig meat processing and packaging division. Built around high-grade stainless steel facilities and strict biosafety protocols, we process premium quality pork to serve distributors, food service providers, and retail partners across India and global export markets.
            </p>
            <p className="font-body text-foreground/75 text-sm leading-relaxed">
              Our facilities maintain rigorous temperature management from slaughter to transport, securing flavor, shelf-life, and sanitary standards. We offer direct wholesale shipping routes and robust cold chain logistics connecting Beed, Maharashtra to domestic cargo airports and international container shipping ports.
            </p>

            <ul className="space-y-3 pt-2 font-body text-sm text-foreground/80">
              <li className="flex items-center gap-3">
                <div className="bg-forest/10 p-1.5 rounded-lg text-forest shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <span><strong>Hygienic Slaughter:</strong> Fully sterilized temperature-controlled processing.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-forest/10 p-1.5 rounded-lg text-forest shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <span><strong>Primal Pork Cuts:</strong> Whole carcasses, loins, bellies, shoulders, and ribs.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-forest/10 p-1.5 rounded-lg text-forest shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <span><strong>Refrigerated Cold Chain:</strong> Sealed vacuum packaging and refrigerated logistics.</span>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/pork-products"
                className="group inline-flex items-center gap-2 bg-forest text-warm-white hover:bg-forest-light px-8 py-3.5 rounded-full font-body font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Enquire About Pork Supply
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. FARM MANAGEMENT APPROACH (METHODOLOGY) */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="text-accent font-body font-bold text-xs uppercase tracking-widest mb-3 block">
              Methodology
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-forest leading-tight mb-6">
              Our Disciplined Livestock Management Process
            </h2>
            <p className="font-body text-foreground/85 text-sm md:text-base leading-relaxed mb-8">
              We employ professional management practices to keep our pigs growing in a healthy, sustainable environment. Each of our daily routines supports the farm&apos;s efficiency.
            </p>
            <div className="bg-beige/40 p-6 rounded-2xl border border-accent/15">
              <span className="font-body text-xs font-bold text-forest uppercase block mb-1">
                Verified Fact
              </span>
              <p className="font-body text-xs text-foreground/80 leading-relaxed">
                Our farm is based in the agrarian hub of Parali, Beed, Maharashtra, providing rich regional feed source accessibility.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-warm-white p-8 rounded-2xl border border-accent/15 hover:shadow-md transition-shadow">
              <div className="bg-forest/10 text-forest p-3 rounded-xl w-fit mb-6">
                <Sprout className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest mb-3">
                Nutrition & Dry Feed
              </h3>
              <p className="font-body text-sm text-foreground/75 leading-relaxed">
                We feed our pigs 100% top-quality dry feed formulations. Nutrition programs are tailored dynamically to secure optimal growth and immune support.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-warm-white p-8 rounded-2xl border border-accent/15 hover:shadow-md transition-shadow">
              <div className="bg-forest/10 text-forest p-3 rounded-xl w-fit mb-6">
                <Droplets className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest mb-3">
                Clean Water
              </h3>
              <p className="font-body text-sm text-foreground/75 leading-relaxed">
                Maintaining continuous access to clean, fresh drinking water using modern automated nipple drinkers that reduce waste.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-warm-white p-8 rounded-2xl border border-accent/15 hover:shadow-md transition-shadow">
              <div className="bg-forest/10 text-forest p-3 rounded-xl w-fit mb-6">
                <Activity className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest mb-3">
                Farm Hygiene
              </h3>
              <p className="font-body text-sm text-foreground/75 leading-relaxed">
                Regular cleaning and maintaining a managed livestock environment. Strict bio-exclusion steps are followed in sheds.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-warm-white p-8 rounded-2xl border border-accent/15 hover:shadow-md transition-shadow">
              <div className="bg-forest/10 text-forest p-3 rounded-xl w-fit mb-6">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest mb-3">
                Livestock Monitoring
              </h3>
              <p className="font-body text-sm text-foreground/75 leading-relaxed">
                Regular daily observation and management of livestock to spot growth bottlenecks early and adjust spacing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GLOBAL MARKET VISION */}
      <section className="relative py-32 bg-[#121212] overflow-hidden text-warm-white border-y border-accent/10">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero-infrastructure.jpg"
            alt="Farm infrastructure outline"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/95 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <span className="text-white/70 font-body font-bold text-xs uppercase tracking-widest block">
              Our Vision
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-warm-white leading-tight mb-6">
              Growing from Beed to Global Export Markets.
            </h2>
            <p className="font-body text-warm-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              Our goal is to establish Fandrys India Private Limited as a premier global livestock brand from Maharashtra, creating dedicated export channels to supply clients all over the world with certified breeding stock, active piglets, and premium processed pork cuts.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-forest text-warm-white hover:bg-forest-light px-8 py-3.5 rounded-full font-body font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-xl"
            >
              Talk to Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-24 md:py-32 bg-forest text-warm-white text-center px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-warm-white leading-tight mb-4">
            Looking for Yorkshire Piglets, Grown Animals or Pork Cuts?
          </h2>
          <p className="font-body text-warm-white/80 text-sm md:text-base leading-relaxed mb-10">
            Get in touch with Fandrys India Private Limited for top-quality weaned piglets, fully grown animals for cuts, and premium processed pork cuts ready for domestic supply and global export channels.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/enquiry"
              className="group flex items-center justify-center gap-2 bg-warm-white text-forest hover:bg-accent hover:text-warm-white px-8 py-4 rounded-full font-body font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md"
            >
              Send Enquiry
              <FileText className="h-4 w-4" />
            </Link>

            <a
              href="https://wa.me/919028644499"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-warm-white border border-warm-white/40 hover:border-warm-white px-8 py-4 rounded-full font-body font-bold text-xs tracking-wider uppercase transition-all duration-300"
            >
              WhatsApp Us
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
