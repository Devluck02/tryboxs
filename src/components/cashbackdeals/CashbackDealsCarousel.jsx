"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CashbackDealCard from "./CashbackDealCard";

const CashbackDealsCarousel = ({ deals }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="mt-12 sm:mt-16">
      <div className="mb-5 flex items-center justify-between sm:mb-7">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Top <span className="text-[#3E80DD]">Cashback</span> Deals
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:border-[#3E80DD] hover:text-[#3E80DD] active:scale-95"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:border-[#3E80DD] hover:text-[#3E80DD] active:scale-95"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden pb-4" ref={emblaRef}>
        <div className="-ml-4 flex">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="min-w-0 flex-[0_0_72%] pl-4 sm:flex-[0_0_38%] lg:flex-[0_0_23%]"
            >
              <CashbackDealCard deal={deal} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CashbackDealsCarousel;
