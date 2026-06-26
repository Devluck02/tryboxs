import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCashbackStores } from "@/lib/api";
import StoreCard from "./StoreCard";

const CashbackStoresRow = async () => {
  const stores = await getCashbackStores();
  return (
    <div className="mt-12 sm:mt-16">
      <div className="mb-5 flex items-center justify-between sm:mb-7">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Top Cashback <span className="text-[#3E80DD]">Stores</span>
        </h2>
        <Link
          href="/stores"
          className="flex items-center gap-1 text-sm font-semibold text-[#3E80DD] transition-opacity hover:opacity-75"
        >
          View All <ArrowRight size={15} />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
};

export default CashbackStoresRow;
