import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center px-4 pt-8 pb-2.5">
      <div className="flex w-full max-w-md flex-col items-center text-center">

        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 shadow-sm">
          <SearchX size={30} className="text-gray-300" strokeWidth={1.5} />
        </div>

        {/* 404 label */}
        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#3E80DD]">
          404 — Page Not Found
        </p>

        {/* Heading */}
        <h1 className="mt-1.5 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          Oops! This page doesn't exist.
        </h1>

        {/* Subtext */}
        <p className="mt-2 text-sm leading-relaxed text-gray-500">
          The page you're looking for may have been moved, deleted, or never existed.
          Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-col items-center gap-2.5 sm:flex-row">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl bg-[#3E80DD] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#3271c8] hover:shadow-md active:scale-95"
          >
            <ArrowLeft size={15} /> Back to Home
          </Link>
          <Link
            href="/dealoftheday"
            className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-2.5 text-sm font-semibold text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50"
          >
            Browse Deals
          </Link>
        </div>


      </div>
    </div>
  );
};

export default NotFound;
