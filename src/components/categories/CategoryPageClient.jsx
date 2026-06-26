"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import DealCard from "@/components/dealoftheday/DealCard";
import { CATEGORIES } from "@/constants/categories";
import { DEALS_OF_THE_DAY } from "@/constants/deals";

const PRICE_RANGES = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under ₹1,000", min: 0, max: 1000 },
  { label: "₹1,000 – ₹5,000", min: 1000, max: 5000 },
  { label: "Above ₹5,000", min: 5000, max: Infinity },
];

const RATINGS = [
  { label: "All", value: 0 },
  { label: "4★ & above", value: 4 },
  { label: "3★ & above", value: 3 },
];

const CategoryPageClient = ({ slug }) => {
  const category = CATEGORIES.find((c) => c.slug === slug);
  const Icon = category.icon;

  const [priceIdx, setPriceIdx] = useState(0);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [ratingIdx, setRatingIdx] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const filterRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const brands = useMemo(
    () => [...new Set(DEALS_OF_THE_DAY.map((d) => d.brand))].sort(),
    []
  );

  const filtered = useMemo(() => {
    let result = DEALS_OF_THE_DAY;
    if (priceIdx !== 0) {
      const { min, max } = PRICE_RANGES[priceIdx];
      result = result.filter((d) => d.discountedPrice >= min && d.discountedPrice < max);
    }
    if (selectedBrands.length > 0) {
      result = result.filter((d) => selectedBrands.includes(d.brand));
    }
    if (ratingIdx !== 0) {
      result = result.filter((d) => (d.rating || 0) >= RATINGS[ratingIdx].value);
    }
    return result;
  }, [priceIdx, selectedBrands, ratingIdx]);

  const toggleBrand = (brand) =>
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );

  const clearAll = () => { setPriceIdx(0); setSelectedBrands([]); setRatingIdx(0); };
  const hasFilters = priceIdx !== 0 || selectedBrands.length > 0 || ratingIdx !== 0;

  const toggle = (name) => setOpenDropdown((prev) => (prev === name ? null : name));

  const priceLabel = priceIdx === 0 ? "Price" : PRICE_RANGES[priceIdx].label;
  const brandLabel = selectedBrands.length === 0 ? "Brand" : selectedBrands.length === 1 ? selectedBrands[0] : `Brand (${selectedBrands.length})`;
  const ratingLabel = ratingIdx === 0 ? "Rating" : RATINGS[ratingIdx].label;

  return (
    <div className="mt-3 space-y-4">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-sm text-gray-400">
        <Link href="/" className="hover:text-[#3E80DD] transition-colors">Home</Link>
        <ChevronRight size={13} />
        <Link href="/categories" className="hover:text-[#3E80DD] transition-colors">Categories</Link>
        <ChevronRight size={13} />
        <span className="font-semibold text-slate-700">{category.name}</span>
      </nav>

      {/* Title + Filters Row */}
      <div className="flex flex-wrap items-center gap-6">
        <h2 className="text-lg font-bold text-slate-800">
          Top <span className={category.text}>{category.name}</span> Deals
          <span className="ml-2 text-xs font-medium text-gray-400">({filtered.length} results)</span>
        </h2>

        {/* Filter Dropdowns */}
        <div ref={filterRef} className="flex flex-wrap items-center gap-2.5">

          {/* Price */}
          <div className="relative">
            <button
              onClick={() => toggle("price")}
              className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                priceIdx !== 0
                  ? "border-[#3E80DD] bg-[#3E80DD]/5 text-[#3E80DD]"
                  : "border-gray-200 bg-white text-slate-600 hover:border-gray-300"
              }`}
            >
              {priceLabel}
              <ChevronDown size={12} className={`transition-transform ${openDropdown === "price" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "price" && (
              <div className="absolute left-0 top-full z-30 mt-1.5 w-44 rounded-xl border border-gray-100 bg-white p-3 shadow-lg">
                {PRICE_RANGES.map((range, i) => (
                  <label key={i} className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-gray-50">
                    <input
                      type="radio"
                      name="price"
                      checked={priceIdx === i}
                      onChange={() => { setPriceIdx(i); setOpenDropdown(null); }}
                      className="accent-[#3E80DD]"
                    />
                    <span className={`text-sm ${priceIdx === i ? "font-semibold text-slate-800" : "text-slate-500"}`}>
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Brand */}
          <div className="relative">
            <button
              onClick={() => toggle("brand")}
              className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                selectedBrands.length > 0
                  ? "border-[#3E80DD] bg-[#3E80DD]/5 text-[#3E80DD]"
                  : "border-gray-200 bg-white text-slate-600 hover:border-gray-300"
              }`}
            >
              {brandLabel}
              <ChevronDown size={12} className={`transition-transform ${openDropdown === "brand" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "brand" && (
              <div className="absolute left-0 top-full z-30 mt-1.5 w-44 rounded-xl border border-gray-100 bg-white p-3 shadow-lg">
                {brands.map((brand) => (
                  <label key={brand} className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="accent-[#3E80DD]"
                    />
                    <span className={`text-sm ${selectedBrands.includes(brand) ? "font-semibold text-slate-800" : "text-slate-500"}`}>
                      {brand}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="relative">
            <button
              onClick={() => toggle("rating")}
              className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                ratingIdx !== 0
                  ? "border-[#3E80DD] bg-[#3E80DD]/5 text-[#3E80DD]"
                  : "border-gray-200 bg-white text-slate-600 hover:border-gray-300"
              }`}
            >
              {ratingLabel}
              <ChevronDown size={12} className={`transition-transform ${openDropdown === "rating" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "rating" && (
              <div className="absolute left-0 top-full z-30 mt-1.5 w-44 rounded-xl border border-gray-100 bg-white p-3 shadow-lg">
                {RATINGS.map((r, i) => (
                  <label key={i} className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-gray-50">
                    <input
                      type="radio"
                      name="rating"
                      checked={ratingIdx === i}
                      onChange={() => { setRatingIdx(i); setOpenDropdown(null); }}
                      className="accent-[#3E80DD]"
                    />
                    <span className={`text-sm ${ratingIdx === i ? "font-semibold text-slate-800" : "text-slate-500"}`}>
                      {r.label}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Clear all */}
          {hasFilters && (
            <button
              onClick={clearAll}
              className="text-sm font-semibold text-gray-400 hover:text-slate-700 transition-colors"
            >
              Clear all
            </button>
          )}

        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col gap-4 lg:flex-row">

        {/* Left: Hero */}
        <div className="lg:w-56 lg:shrink-0">
          <div className={`rounded-2xl ${category.bg} px-6 py-6 lg:sticky lg:top-44`}>
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/60 shadow-sm ${category.text}`}>
              <Icon size={22} strokeWidth={1.75} />
            </div>
            <h1 className="mt-3 text-xl font-extrabold tracking-tight text-slate-900">
              {category.name}
            </h1>
            <p className={`mt-1 text-xs font-semibold ${category.text}`}>
              {category.deals}+ deals available
            </p>
          </div>
        </div>

        {/* Right: Deals */}
        <div className="flex-1">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {filtered.map((deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-base font-semibold text-slate-700">No deals match your filters</p>
              <p className="mt-1 text-sm text-gray-400">Try adjusting or clearing the filters.</p>
              <button
                onClick={clearAll}
                className="mt-4 rounded-full bg-[#3E80DD] px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default CategoryPageClient;
