"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { HERO_SLIDES } from "@/constants/hero";

const Hero = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", dragFree: false },
    [Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const resetAutoplay = useCallback(
    () => emblaApi?.plugins()?.autoplay?.reset(),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    resetAutoplay();
  }, [emblaApi, resetAutoplay]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    resetAutoplay();
  }, [emblaApi, resetAutoplay]);

  const scrollTo = useCallback(
    (index) => {
      emblaApi?.scrollTo(index);
      resetAutoplay();
    },
    [emblaApi, resetAutoplay]
  );

  // Track active dot
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  // Detect drag vs click so Link doesn't fire on drag
  const handlePointerDown = (e) => {
    dragStartX.current = e.clientX;
    setIsDragging(false);
  };

  const handlePointerMove = (e) => {
    if (Math.abs(e.clientX - dragStartX.current) > 5) setIsDragging(true);
  };

  const handleLinkClick = (e) => {
    if (isDragging) e.preventDefault();
  };

  return (
    <div className="group/slider relative select-none">
      <div
        className="overflow-hidden"
        ref={emblaRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
      >
        <div className="-ml-4 flex">
          {HERO_SLIDES.map((slide, i) => (
            <div
              key={slide.id}
              className="min-w-0 flex-[0_0_85%] pl-4 sm:flex-[0_0_48%] lg:flex-[0_0_31%]"
            >
              <Link
                href={slide.href}
                onClick={handleLinkClick}
                draggable={false}
                className="group/card relative block overflow-hidden rounded-2xl shadow-sm"
              >
                {/* Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={slide.image.width}
                  height={slide.image.height}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                  priority={i < 3}
                  draggable={false}
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${slide.overlay}`} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end gap-1.5 p-4 sm:p-5">
                  <span className="w-fit rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase text-white backdrop-blur-sm">
                    {slide.tag}
                  </span>

                  <h2 className="text-sm font-extrabold leading-snug text-white drop-shadow sm:text-base">
                    {slide.title}
                  </h2>

                  <p className="line-clamp-1 text-[11px] leading-snug text-white/80 sm:text-xs">
                    {slide.description}
                  </p>

                  <span className="mt-1 flex w-fit items-center gap-1 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-gray-900 shadow transition-all duration-200 group-hover/card:bg-[#3E80DD] group-hover/card:text-white">
                    {slide.cta} <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 z-10 -translate-x-3 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 p-2 text-gray-900 opacity-0 shadow-md backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95 group-hover/slider:translate-x-0 group-hover/slider:opacity-100 sm:left-4"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 z-10 translate-x-3 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 p-2 text-gray-900 opacity-0 shadow-md backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95 group-hover/slider:translate-x-0 group-hover/slider:opacity-100 sm:right-4"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dot indicators */}
      <div className="mt-4 flex items-center justify-center gap-1.5">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === selectedIndex
                ? "w-5 bg-[#3E80DD]"
                : "w-1.5 bg-gray-300 hover:bg-gray-400"
            } h-1.5`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
