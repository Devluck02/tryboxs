import { CASHBACK_STORES } from "@/constants/cashbackStores";
import StoresGrid from "@/components/cashbackstores/StoresGrid";

export const metadata = {
  title: "All Stores | TryBoxs",
  description: "Browse all stores and brands offering cashback deals on TryBoxs.",
};

const StoresPage = () => {
  return (
    <div className="py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          All <span className="text-[#3E80DD]">Stores</span>
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          {CASHBACK_STORES.length} stores available with exclusive cashback & coupons
        </p>
      </div>

      <StoresGrid stores={CASHBACK_STORES} />
    </div>
  );
};

export default StoresPage;
