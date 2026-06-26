"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../logo/Logo";
import SearchBar from "../searchbar/SearchBar";
import Login from "../login/Login";
import Navbar from "../navbar/Navbar";
import { Menu, X } from "lucide-react";
import NotificationBar from "../notificationbar/NotificationBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-30 border-b bg-white transition-all duration-300 ${
          isScrolled ? "border-gray-200 shadow-sm" : "border-transparent"
        }`}
      >
        <NotificationBar />
        <div className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

          {/* Top Header */}
          <div className="flex items-center justify-between gap-4 py-3">
            <Logo />

            {/* Desktop Search */}
            <div className="hidden md:flex flex-1 max-w-xl">
              <SearchBar />
            </div>

            <div className="hidden items-center gap-4 md:flex">
              <Link
                href="/help"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-[#3E80DD]"
              >
                Help
              </Link>
              <Login />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="pb-3 md:hidden">
            <SearchBar />
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:block border-t border-gray-100">
          <div className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <Navbar />
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <aside
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={`fixed top-0 left-0 z-50 h-screen w-70 bg-white shadow-xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 p-4">
          <span className="text-lg font-bold">Menu</span>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1 text-gray-500 transition-colors hover:bg-gray-100"
            aria-label="Close Menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="p-4">
          <Navbar mobile={true} />

          <div className="mt-6 border-t border-gray-100 pt-4">
            <Login mobile={true} />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;