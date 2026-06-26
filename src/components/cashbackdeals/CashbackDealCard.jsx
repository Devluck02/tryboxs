import Link from "next/link";
import Image from "next/image";

const CashbackDealCard = ({ deal }) => {
  return (
    <Link
      href={deal.href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative bg-gray-100">
        {deal.image ? (
          <Image
            src={deal.image}
            alt={deal.brand}
            width={deal.image.width}
            height={deal.image.height}
            className="h-auto w-full"
          />
        ) : (
          <div className="h-40 w-full bg-gradient-to-br from-gray-100 to-gray-200" />
        )}

        <span className="absolute bottom-3 left-3 rounded-full bg-[#3E80DD] px-3 py-1 text-xs font-bold text-white shadow">
          {deal.cashback}
        </span>
      </div>

      <div className="flex flex-col gap-1.5 p-4">
        <p className="text-sm font-bold text-slate-900">{deal.brand}</p>
        <p className="text-xs leading-relaxed text-gray-500 line-clamp-2">
          {deal.description}
        </p>
      </div>
    </Link>
  );
};

export default CashbackDealCard;
