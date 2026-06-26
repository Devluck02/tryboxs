import Link from "next/link";
import Image from "next/image";
import { BadgeCheck, ArrowRight } from "lucide-react";

const CouponCard = ({ coupon }) => {
  const visibleCode = coupon.code.slice(0, 4);
  const hiddenCode = coupon.code.slice(4);

  return (
    <Link
      href={`/coupons/${coupon.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-2 px-4 pt-5 pb-4">
        {/* Brand logo */}
        <Image
          src={coupon.storeIcon}
          alt={coupon.store}
          width={coupon.storeIcon.width}
          height={coupon.storeIcon.height}
          className="h-9 w-auto object-contain"
        />

        {/* Store name + badge */}
        <div className="flex w-full items-center justify-between">
          <span className="text-sm font-bold text-slate-800">{coupon.store}</span>
          <span className="flex items-center gap-0.5 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-600">
            <BadgeCheck size={9} strokeWidth={2.5} /> Verified
          </span>
        </div>
      </div>

      {/* Dashed divider / ticket notch */}
      <div className="relative flex items-center">
        <span className="absolute -left-2.5 h-5 w-5 rounded-full border border-gray-100 bg-[#F9FAFB]" />
        <div className="w-full border-t border-dashed border-gray-200" />
        <span className="absolute -right-2.5 h-5 w-5 rounded-full border border-gray-100 bg-[#F9FAFB]" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 px-4 pt-3.5 pb-4">

        {/* Code box */}
        <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5">
          <span className="font-mono text-sm font-extrabold tracking-[0.16em] text-slate-800">
            {visibleCode}
            <span className="select-none blur-[4px]">{hiddenCode}</span>
          </span>
          <span className="text-[10px] font-medium text-gray-400">tap to copy</span>
        </div>

        {/* Title */}
        <p className="text-[13px] font-bold leading-snug text-slate-900">
          {coupon.title}
        </p>

        {/* CTA button */}
        <div className="mt-auto flex items-center justify-center gap-1.5 rounded-xl bg-[#3E80DD] px-3 py-2.5 text-xs font-bold text-white shadow-sm transition-all group-hover:bg-[#3271c8] group-hover:shadow-md">
          Get Coupon <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
};

export default CouponCard;
