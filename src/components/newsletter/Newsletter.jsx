"use client";

import { useState } from "react";
import { Send, Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="flex flex-col items-center gap-6 py-4 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3E80DD]/20 ring-1 ring-[#3E80DD]/30">
        <Mail size={26} className="text-[#3E80DD]" />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Get Exclusive Deals{" "}
          <span className="text-[#3E80DD]">in Your Inbox</span>
        </h2>
        <p className="text-sm text-white/60 sm:text-base">
          {subscribed
            ? "🎉 Thanks for subscribing! Watch your inbox for deals."
            : "Join 50,000+ smart shoppers. Get the latest coupons & cashback offers."}
        </p>
      </div>

      {!subscribed && (
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-lg items-center gap-2"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="h-12 w-full rounded-full border border-white/10 bg-white/8 px-5 text-sm text-white placeholder:text-white/40 focus:border-[#3E80DD]/50 focus:outline-none focus:ring-2 focus:ring-[#3E80DD]/20"
          />
          <button
            type="submit"
            className="inline-flex h-12 shrink-0 cursor-pointer items-center gap-2 rounded-full bg-[#3E80DD] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#2f6bc0]"
          >
            <Send size={16} />
            <span>Subscribe</span>
          </button>
        </form>
      )}

      {!subscribed && (
        <p className="text-xs text-white/40">
          No spam, ever. Unsubscribe anytime.
        </p>
      )}
    </div>
  );
};

export default Newsletter;
