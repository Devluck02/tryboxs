"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { CATEGORIES } from "@/constants/categories";
import CategoryItem from "./CategoryItem";

const CategoriesGrid = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const availableLetters = useMemo(() => {
    return [...new Set(CATEGORIES.map((c) => c.name[0].toUpperCase()))].sort();
  }, []);

  const filtered = useMemo(() => {
    let result = CATEGORIES;
    if (activeFilter !== "All") {
      result = result.filter((c) => c.name[0].toUpperCase() === activeFilter);
    }
    if (search.trim()) {
      result = result.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return result;
  }, [search, activeFilter]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value) setActiveFilter("All");
  };

  return (
    <>
      {/* Search + Filter */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        {/* Search */}
        <div className="relative w-64 shrink-0">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search..."
            className="h-9 w-full rounded-full border border-gray-200 bg-white pl-10 pr-4 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#3E80DD] focus:outline-none"
          />
        </div>

        {/* A-Z Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => { setActiveFilter("All"); setSearch(""); }}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
              activeFilter === "All" && !search
                ? "bg-[#3E80DD] text-white shadow-sm"
                : "border border-gray-200 bg-white text-gray-500 hover:border-[#3E80DD] hover:text-[#3E80DD]"
            }`}
          >
            All
          </button>

          {availableLetters.map((letter) => (
            <button
              key={letter}
              onClick={() => { setActiveFilter(letter); setSearch(""); }}
              className={`h-9 w-9 rounded-full text-sm font-semibold transition-all ${
                activeFilter === letter && !search
                  ? "bg-[#3E80DD] text-white shadow-sm"
                  : "border border-gray-200 bg-white text-gray-500 hover:border-[#3E80DD] hover:text-[#3E80DD]"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="mb-4 text-xs text-gray-400">
        {filtered.length} {filtered.length === 1 ? "category" : "categories"} found
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-6">
          {filtered.map((category) => (
            <CategoryItem key={category.slug} category={category} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-lg font-semibold text-slate-900">No categories found</p>
          <p className="mt-1 text-sm text-gray-400">Try a different search or filter.</p>
          <button
            onClick={() => { setSearch(""); setActiveFilter("All"); }}
            className="mt-4 rounded-full bg-[#3E80DD] px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Show All Categories
          </button>
        </div>
      )}
    </>
  );
};

export default CategoriesGrid;
