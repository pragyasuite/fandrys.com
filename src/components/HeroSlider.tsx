"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  image: string;
  headline: string;
  supporting: string;
  ctaText: string;
  ctaHref: string;
}

const slides: Slide[] = [
  {
    image: "/images/hero-adult-yorkshire.jpg",
    headline: "Large White Yorkshire Breeding Stock, Exported Worldwide.",
    supporting: "Fandrys India Private Limited is a premier commercial Large White Yorkshire pig farm in Maharashtra, shipping certified pedigree breeding stock to farms and agricultural projects globally.",
    ctaText: "Explore Our Farm",
    ctaHref: "/about",
  },
  {
    image: "/images/hero-piglets.jpg",
    headline: "Purebreed Yorkshire Piglets for Global Markets.",
    supporting: "We breed and raise healthy, active piglets under strict biosecurity, optimized for international breeding programs and global supply chains.",
    ctaText: "View Our Livestock",
    ctaHref: "/livestock",
  },
  {
    image: "/images/meat-processing.jpg",
    headline: "Hygienic Pork Processing for Global Export.",
    supporting: "FSSAI and APEDA compliant pig meat processing and custom packaging with temperature-secure refrigerated containers shipping to international markets all over the world.",
    ctaText: "Pork Products",
    ctaHref: "/pork-products",
  },
  {
    image: "/images/hero-infrastructure.jpg",
    headline: "World-Class Biosecure Farm Infrastructure.",
    supporting: "Fandrys is building a state-of-the-art agricultural enterprise, built to conform to international sanitary standards and secure global trade partnerships.",
    ctaText: "About Our Farm",
    ctaHref: "/about",
  },
  {
    image: "/images/hero-operations.jpg",
    headline: "Care. Management. Consistent Global Growth.",
    supporting: "Combining professional livestock husbandry with modern automated feeding and strict export compliance protocols.",
    ctaText: "Contact Us",
    ctaHref: "/contact",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback(() => {
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    autoplayTimer.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5550);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [startAutoplay]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    startAutoplay();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    startAutoplay();
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    startAutoplay();
  };

  // Touch handlers for swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="relative w-full h-[85vh] md:h-[90vh] bg-charcoal overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].headline}
              fill
              priority
              className="object-cover object-center"
            />
            {/* Cinematic overlay gradients - dual masking for maximum text clarity */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Text Content Container */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start text-left text-warm-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
                exit: {
                  opacity: 0,
                  transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1,
                  },
                },
              }}
              className="max-w-2xl"
            >
              {/* Animated Label */}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -10 },
                }}
                className="inline-block text-[#C5A880] font-body font-bold text-xs md:text-sm tracking-widest uppercase mb-4"
              >
                Large White Yorkshire Commercial Pig Farm & Exporter
              </motion.span>

              {/* Animated Heading */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -15 },
                }}
                className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1] mb-6 drop-shadow-lg"
              >
                {slides[currentIndex].headline}
              </motion.h1>

              {/* Animated Paragraph */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -15 },
                }}
                className="font-body text-sm md:text-lg text-white/95 leading-relaxed mb-8 drop-shadow-sm max-w-xl"
              >
                {slides[currentIndex].supporting}
              </motion.p>

              {/* Animated Action Button */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -15 },
                }}
              >
                <Link
                  href={slides[currentIndex].ctaHref}
                  className="group inline-flex items-center gap-2 bg-forest text-warm-white hover:bg-forest-light px-8 py-3.5 rounded-full font-body font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  {slides[currentIndex].ctaText}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Manual Slide Navigation Controls */}
      <div className="absolute inset-x-0 bottom-8 z-20 flex items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
        {/* Indicators/Dots */}
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                index === currentIndex ? "w-8 bg-forest" : "w-2 bg-warm-white/40 hover:bg-warm-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Previous / Next Arrow Controls */}
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-warm-white/20 bg-charcoal/20 backdrop-blur-sm text-warm-white hover:bg-forest hover:text-warm-white hover:border-forest transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-warm-white/20 bg-charcoal/20 backdrop-blur-sm text-warm-white hover:bg-forest hover:text-warm-white hover:border-forest transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
