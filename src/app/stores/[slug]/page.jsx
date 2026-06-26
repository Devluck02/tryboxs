import { getStoreBySlug, getCashbackStores, getCoupons } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Ticket } from "lucide-react";
import CouponCard from "@/components/trendingcoupons/CouponCard";

export async function generateStaticParams() {
  const stores = await getCashbackStores();
  return stores.map((store) => ({ slug: store.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const store = await getStoreBySlug(slug);
  if (!store) return {};
  return {
    title: `${store.name} Coupons & Cashback`,
    description: `Get the best ${store.name} coupon codes, promo codes and ${store.cashback} on TryBoxs.`,
  };
}

const StoreDetailPage = async ({ params }) => {
  const { slug } = await params;
  const [store, allCoupons] = await Promise.all([
    getStoreBySlug(slug),
    getCoupons(),
  ]);

  if (!store) notFound();

  const storeCoupons = allCoupons.filter(
    (c) => c.store.toLowerCase() === store.name.toLowerCase()
  );

  return (
    <div className="mt-6 sm:mt-8">
      <Link
        href="/stores"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#3E80DD] transition-opacity hover:opacity-75"
      >
        <ArrowLeft size={15} /> All Stores
      </Link>

      {/* Store Header */}
      <div className="mt-4 flex flex-col items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:flex-row sm:items-center">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gray-50 p-3">
          <Image
            src={store.logo}
            alt={store.name}
            width={store.logo.width}
            height={store.logo.height}
            className="h-14 w-auto object-contain"
          />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {store.name}
          </h1>
          <p className="mt-1 text-sm font-semibold text-[#3E80DD]">{store.cashback}</p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-gray-500">
            <Ticket size={13} />
            <span>{store.coupons} coupons available</span>
          </div>
        </div>
      </div>

      {/* Coupons */}
      <div className="mt-8">
        <h2 className="mb-5 text-xl font-extrabold text-slate-900 sm:text-2xl">
          {store.name} <span className="text-[#3E80DD]">Coupons</span>
        </h2>

        {storeCoupons.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {storeCoupons.map((coupon) => (
              <CouponCard key={coupon.id} coupon={coupon} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-gray-200 bg-white py-12 text-center">
            <Ticket size={32} className="text-gray-300" />
            <p className="text-sm font-semibold text-gray-400">
              No coupons available right now
            </p>
            <p className="text-xs text-gray-400">New coupons will be added soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreDetailPage;
