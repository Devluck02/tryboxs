import { getDealBySlug, getAllDealSlugs } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Users,
  CheckCircle2,
  Flame,
  Tag,
  Clock,
  ChevronRight,
  ShieldCheck,
  BadgePercent,
} from "lucide-react";

export async function generateStaticParams() {
  const slugs = await getAllDealSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const deal = await getDealBySlug(slug);
  if (!deal) return {};
  if (deal.type === "cashback") {
    return {
      title: `${deal.brand} Cashback — ${deal.cashback}`,
      description: deal.description,
    };
  }
  return {
    title: `${deal.title} — ${deal.discount}% Off`,
    description: deal.description,
  };
}

const DealDetailPage = async ({ params }) => {
  const { slug } = await params;
  const deal = await getDealBySlug(slug);
  if (!deal) notFound();

  // ── Cashback Deal ──────────────────────────────────────────────────────────
  if (deal.type === "cashback") {
    return (
      <div className="mt-5 sm:mt-7">

        <nav className="mb-5 flex items-center gap-1.5 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#3E80DD] transition-colors">Home</Link>
          <ChevronRight size={13} />
          <span className="font-semibold text-slate-700">{deal.brand} Cashback</span>
        </nav>

        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left: Image */}
            <div className="flex flex-col border-b border-gray-100 bg-gray-50 lg:border-b-0 lg:border-r">
              {/* Badges */}
              <div className="flex items-center gap-2 px-5 pt-5">
                <span className="flex items-center gap-1 rounded-full bg-[#3E80DD] px-3 py-1 text-xs font-bold text-white">
                  <Flame size={11} fill="white" /> {deal.cashback}
                </span>
                <span className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-600">
                  <Tag size={11} /> Cashback Deal
                </span>
              </div>

              {/* Image — flush, no top/bottom gap */}
              <div className="overflow-hidden">
                <Image
                  src={deal.image}
                  alt={deal.brand}
                  width={deal.image.width}
                  height={deal.image.height}
                  className="w-full object-cover"
                  priority
                />
              </div>

              <p className="flex items-center gap-1.5 px-5 pb-5 text-xs font-medium text-gray-400">
                <Clock size={12} /> Limited time offer — activate now
              </p>
            </div>

            {/* Right: Info */}
            <div className="flex flex-col gap-5 p-6">

              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Cashback Deal</p>
                <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{deal.brand}</h1>
                <p className="text-2xl font-extrabold text-[#3E80DD]">{deal.cashback}</p>
                <p className="text-sm leading-relaxed text-gray-500">{deal.description}</p>
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold text-slate-800">How to get cashback?</p>
                <ol className="flex flex-col gap-3">
                  {deal.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3E80DD] text-xs font-extrabold text-white">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-gray-600">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-auto flex flex-col gap-2.5 pt-2 sm:flex-row">
                <Link
                  href={`/redirect?to=${encodeURIComponent(deal.affiliateLink)}&store=${encodeURIComponent(deal.brand)}&deal=${encodeURIComponent(deal.brand + " Cashback")}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#3E80DD] py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#3271c8] hover:shadow-md active:scale-95"
                >
                  <BadgePercent size={16} /> Shop & Earn Cashback
                </Link>
                <Link
                  href="/"
                  className="flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-600 transition-all hover:bg-gray-100"
                >
                  More Deals
                </Link>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { icon: CheckCircle2, text: "Verified Cashback" },
            { icon: ShieldCheck, text: "Secure & Safe" },
            { icon: Clock, text: "Fast Tracking" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center justify-center gap-1.5 rounded-xl border border-gray-100 bg-white px-3 py-2.5 shadow-sm">
              <Icon size={13} className="shrink-0 text-[#3E80DD]" />
              <span className="text-xs font-semibold text-gray-500">{text}</span>
            </div>
          ))}
        </div>

      </div>
    );
  }

  // ── Product Deal ───────────────────────────────────────────────────────────
  const Icon = deal.icon;
  const savings = deal.originalPrice - deal.discountedPrice;

  return (
    <div className="mt-5 sm:mt-7">

      <nav className="mb-5 flex items-center gap-1.5 text-sm text-gray-400">
        <Link href="/" className="hover:text-[#3E80DD] transition-colors">Home</Link>
        <ChevronRight size={13} />
        <Link href="/dealoftheday" className="hover:text-[#3E80DD] transition-colors">Deals</Link>
        <ChevronRight size={13} />
        <span className="font-semibold text-slate-700 line-clamp-1">{deal.title}</span>
      </nav>

      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left: Image Panel — no colorful bg */}
          <div className="flex flex-col border-b border-gray-100 bg-gray-50 lg:border-b-0 lg:border-r">
            {/* Badges */}
            <div className="flex items-center gap-2 px-5 pt-5">
              <span className={`flex items-center gap-1 rounded-full ${deal.badgeColor} px-3 py-1 text-xs font-bold text-white`}>
                <Flame size={11} fill="white" /> {deal.discount}% OFF
              </span>
              <span className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-600">
                <Tag size={11} /> {deal.tag}
              </span>
            </div>

            {/* Image */}
            <div className="my-2.5 overflow-hidden px-5">
              <Image
                src={deal.image}
                alt={deal.title}
                width={deal.image.width}
                height={deal.image.height}
                className="w-full object-cover"
                priority
              />
            </div>

            {/* Meta */}
            <div className="flex flex-col gap-1 px-5 pb-5">
              <p className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                <Users size={12} /> {deal.grabbed}+ people grabbed this deal
              </p>
              <p className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                <Clock size={12} /> Limited time — expires today
              </p>
            </div>
          </div>

          {/* Right: Info Panel */}
          <div className="flex flex-col gap-5 p-6">

            {/* Brand + Title */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p className={`text-xs font-bold uppercase tracking-widest ${deal.accentColor}`}>
                  {deal.brand}
                </p>
              </div>
              <h1 className="text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
                {deal.title}
              </h1>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-extrabold text-slate-900">
                ₹{deal.discountedPrice.toLocaleString("en-IN")}
              </span>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 line-through">
                  ₹{deal.originalPrice.toLocaleString("en-IN")}
                </span>
                <span className={`rounded-md ${deal.badgeColor} px-2 py-0.5 text-xs font-bold text-white`}>
                  Save ₹{savings.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="mb-1.5 text-sm font-semibold text-slate-800">About this product</p>
              <p className="text-sm leading-relaxed text-gray-500">{deal.description}</p>
            </div>

            {/* Steps */}
            <div>
              <p className="mb-3 text-sm font-semibold text-slate-800">How to avail this deal?</p>
              <ol className="flex flex-col gap-3">
                {deal.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${deal.badgeColor} text-xs font-extrabold text-white`}>
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-gray-600">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* CTA */}
            <div className="mt-auto flex flex-col gap-2.5 pt-2 sm:flex-row">
              <Link
                href={`/redirect?to=${encodeURIComponent(deal.affiliateLink)}&store=${encodeURIComponent(deal.brand)}&deal=${encodeURIComponent(deal.title)}`}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl ${deal.badgeColor} py-3 text-sm font-bold text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md active:scale-95`}
              >
                <BadgePercent size={16} /> Shop & Earn Cashback
              </Link>
              <Link
                href="/dealoftheday"
                className="flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-600 transition-all hover:bg-gray-100"
              >
                More Deals
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          { icon: CheckCircle2, text: "100% Verified Deal" },
          { icon: ShoppingCart, text: "Secure Checkout" },
          { icon: Clock, text: "Limited Time Offer" },
        ].map(({ icon: BadgeIcon, text }) => (
          <div key={text} className="flex items-center justify-center gap-1.5 rounded-xl border border-gray-100 bg-white px-3 py-2.5 shadow-sm">
            <BadgeIcon size={13} className="shrink-0 text-[#3E80DD]" />
            <span className="text-xs font-semibold text-gray-500">{text}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DealDetailPage;
