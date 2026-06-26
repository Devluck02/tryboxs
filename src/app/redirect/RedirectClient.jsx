"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ExternalLink, ShieldCheck, BadgePercent, ArrowLeft } from "lucide-react";

const TOTAL = 5;

const RedirectClient = () => {
  const params = useSearchParams();
  const to    = params.get("to")    || "";
  const store = params.get("store") || "Store";
  const deal  = params.get("deal")  || "";

  const [count, setCount] = useState(TOTAL);
  const [gone, setGone]   = useState(false);

  // validate: only allow safe https:// URLs
  const isSafe = to.startsWith("https://");

  useEffect(() => {
    if (!isSafe) return;
    if (count <= 0) {
      setGone(true);
      window.open(to, "_blank", "noopener,noreferrer");
      return;
    }
    const t = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [count, to, isSafe]);

  const progress = ((TOTAL - count) / TOTAL) * 100;

  if (!isSafe) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm font-semibold text-red-500">Invalid redirect URL.</p>
        <Link href="/" className="text-sm font-semibold text-[#3E80DD] hover:underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm">

        {/* Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

          {/* Top accent strip */}
          <div className="h-1 w-full bg-gradient-to-r from-[#3E80DD] to-[#6C5CE7]" />

          <div className="flex flex-col items-center gap-5 px-6 py-8 text-center">

            {/* Animated ring */}
            <div className="relative flex h-20 w-20 items-center justify-center">
              <svg className="absolute inset-0 -rotate-90" viewBox="0 0 80 80">
                <circle
                  cx="40" cy="40" r="34"
                  fill="none"
                  stroke="#F3F4F6"
                  strokeWidth="6"
                />
                <circle
                  cx="40" cy="40" r="34"
                  fill="none"
                  stroke="#3E80DD"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 34}`}
                  strokeDashoffset={`${2 * Math.PI * 34 * (1 - progress / 100)}`}
                  className="transition-all duration-1000 ease-linear"
                />
              </svg>
              <span className="text-2xl font-extrabold text-slate-900">
                {gone ? "✓" : count}
              </span>
            </div>

            {/* Store + status text */}
            <div className="flex flex-col gap-1">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                Redirecting to
              </p>
              <h1 className="text-xl font-extrabold text-slate-900">{store}</h1>
              {deal && (
                <p className="mt-0.5 text-xs text-gray-500 line-clamp-2">{deal}</p>
              )}
            </div>

            {/* Progress bar */}
            <div className="w-full overflow-hidden rounded-full bg-gray-100 h-1.5">
              <div
                className="h-full rounded-full bg-[#3E80DD] transition-all duration-1000 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Status message */}
            <p className="text-xs text-gray-400">
              {gone
                ? "New tab opened! Use the deal there."
                : `Redirecting to ${store} in ${count} second${count !== 1 ? "s" : ""}...`}
            </p>

            {/* Cashback reminder */}
            <div className="flex w-full items-start gap-2.5 rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-left">
              <BadgePercent size={15} className="mt-0.5 shrink-0 text-[#3E80DD]" />
              <p className="text-[11px] leading-relaxed text-slate-700">
                <span className="font-bold">Shop via TryBoxs</span> and automatically earn cashback on your purchase.
              </p>
            </div>

            {/* Manual link */}
            <a
              href={to}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#3E80DD] transition-opacity hover:opacity-75"
            >
              Not redirected? Click here
              <ExternalLink size={11} />
            </a>

          </div>
        </div>

        {/* Back link */}
        <Link
          href="/"
          className="mt-4 flex items-center justify-center gap-1.5 text-xs font-medium text-gray-400 transition-colors hover:text-gray-600"
        >
          <ArrowLeft size={12} /> Back to TryBoxs
        </Link>

        {/* Trust line */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-gray-400">
          <ShieldCheck size={11} className="text-emerald-500" />
          100% Safe Redirect — No Malware, No Spam
        </div>

      </div>
    </div>
  );
};

export default RedirectClient;
