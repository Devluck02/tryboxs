import Link from "next/link";
import Image from "next/image";
import { Ticket } from "lucide-react";

const StoreCard = ({ store }) => {
  return (
    <Link
      href={`/stores/${store.slug}`}
      className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3E80DD]/30 hover:shadow-md"
    >
      <div className="flex h-14 w-full items-center justify-center">
        <Image
          src={store.logo}
          alt={store.name}
          width={store.logo.width}
          height={store.logo.height}
          className="h-11 w-auto object-contain"
        />
      </div>

      <div>
        <p className="text-sm font-bold text-slate-900">{store.name}</p>
        <p className="mt-0.5 text-xs font-medium text-[#3E80DD]">{store.cashback}</p>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-[#3E80DD] py-3 transition-transform duration-300 ease-out group-hover:translate-y-0">
        <Ticket size={15} className="text-white" />
        <span className="text-xs font-bold text-white">
          {store.coupons} Coupons Available
        </span>
      </div>
    </Link>
  );
};

export default StoreCard;
