import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users } from "lucide-react";

const DealCard = ({ deal }) => {
  const Icon = deal.icon;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="relative overflow-hidden">
        <Image
          src={deal.image}
          alt={deal.title}
          width={deal.image.width}
          height={deal.image.height}
          className="h-auto w-full"
        />
        <span className={`absolute left-3 top-3 rounded-full ${deal.badgeColor} px-2.5 py-1 text-xs font-bold text-white shadow`}>
          {deal.discount}% OFF
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-white/80 px-2.5 py-1 text-xs font-semibold text-gray-600 backdrop-blur shadow">
          {deal.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-wide ${deal.accentColor}`}>
            {deal.brand}
          </p>
          <h3 className="mt-1 text-sm font-bold leading-snug text-slate-900 sm:text-base">
            {deal.title}
          </h3>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-lg font-extrabold text-slate-900">
            ₹{deal.discountedPrice.toLocaleString("en-IN")}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ₹{deal.originalPrice.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <Users size={13} />
          <span>{deal.grabbed}+ people grabbed this</span>
        </div>

        <Link
          href={`/deals/${deal.slug}`}
          className="mt-auto flex items-center justify-center gap-1.5 rounded-xl bg-[#3E80DD] py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Get Deal <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
};

export default DealCard;
