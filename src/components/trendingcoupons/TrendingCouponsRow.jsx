import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCoupons } from "@/lib/api";
import CouponCard from "./CouponCard";

const TrendingCouponsRow = async () => {
  const coupons = await getCoupons();
  return (
    <div className="mt-12 sm:mt-16">
      <div className="mb-5 flex items-center justify-between sm:mb-7">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Trending <span className="text-[#3E80DD]">Coupons</span>
        </h2>
        <Link
          href="/coupons"
          className="flex items-center gap-1 text-sm font-semibold text-[#3E80DD] transition-opacity hover:opacity-75"
        >
          View All <ArrowRight size={15} />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {coupons.slice(0, 4).map((coupon, i) => (
          <CouponCard key={coupon.id} coupon={coupon} index={i} />
        ))}
      </div>
    </div>
  );
};

export default TrendingCouponsRow;
