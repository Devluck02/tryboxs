"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";

const PLACEHOLDERS = [
  "Search for brands and categories...",
  "Find the best cashback deals...",
  "Discover top coupons for Amazon...",
  "Search Flipkart, Myntra, Nykaa...",
  "Get exclusive discount codes...",
];

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setCursor((c) => !c), 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (value) return;

    const current = PLACEHOLDERS[phraseIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 70);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % PLACEHOLDERS.length);
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, value]);

  return (
    <div className="relative w-full">
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="h-10 w-full rounded-full border border-transparent bg-gray-100 pl-12 pr-4 text-sm text-gray-700 transition-colors focus:border-gray-200 focus:bg-white focus:outline-none sm:h-11"
      />

      {!value && (
        <div className="pointer-events-none absolute inset-y-0 left-12 flex items-center">
          <span className="text-sm text-gray-400">
            {displayText}
            <span className={`transition-opacity duration-100 ${cursor ? "opacity-100" : "opacity-0"}`}>
              |
            </span>
          </span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
