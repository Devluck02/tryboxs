"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

const CopyCodeButton = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const el = document.createElement("textarea");
      el.value = code;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5">
        <span className="font-mono text-lg font-extrabold tracking-[0.2em] text-slate-900 sm:text-xl">
          {code}
        </span>
        <button
          onClick={handleCopy}
          aria-label="Copy coupon code"
          className="ml-4 flex shrink-0 items-center gap-1.5 rounded-lg bg-[#3E80DD] px-4 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#3271c8] active:scale-95"
        >
          {copied ? (
            <><Check size={13} strokeWidth={2.5} /> Copied!</>
          ) : (
            <><Copy size={13} /> Copy</>
          )}
        </button>
      </div>

      {copied && (
        <p className="text-xs font-medium text-emerald-600">
          ✓ Code copied — paste it at the store checkout!
        </p>
      )}
    </div>
  );
};

export default CopyCodeButton;
