"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import telegramIcon from "@/assets/telegram.png";

const LIVE_MESSAGES = [
  "🔥 Flat 50% Off on Top Fashion Brands — Limited Time Only!",
  "⚡ Up to 70% Off on Electronics — Deal Expires Today!",
  "🎁 Exclusive Coupons Updated Daily — Don't Miss Out!",
  "🚨 New Deals Just Dropped — Check Our Telegram Now!",
];

const NotificationBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId;
    const interval = setInterval(() => {
      setVisible(false);
      timeoutId = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % LIVE_MESSAGES.length);
        setVisible(true);
      }, 300);
    }, 3000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="border-b border-gray-100 bg-gray-50">
      <div className="mx-auto flex max-w-360 items-center justify-center gap-3 px-4 py-2">
        <p
          className={`w-60 shrink-0 overflow-hidden whitespace-nowrap text-center text-xs font-medium text-gray-600 transition-opacity duration-300 sm:w-105 sm:text-sm ${visible ? "opacity-100" : "opacity-0"}`}
        >
          {LIVE_MESSAGES[currentIndex]}
        </p>

        <Link
          href="https://t.me/yourchannel"
          target="_blank"
          className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#3E80DD] px-3 py-1 text-xs font-semibold text-white transition hover:bg-[#2f6bc0] sm:text-sm"
        >
          <Image src={telegramIcon} alt="Telegram" width={14} height={14} priority />
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default NotificationBar;
