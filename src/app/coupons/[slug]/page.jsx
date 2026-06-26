import { getCouponBySlug, getAllCouponSlugs } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  BadgeCheck,
  ExternalLink,
  Clock,
  ShieldCheck,
  Tag,
} from "lucide-react";
import CopyCodeButton from "./CopyCodeButton";

export async function generateStaticParams() {
  const slugs = await getAllCouponSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const coupon = await getCouponBySlug(slug);
  if (!coupon) return {};
  return {
    title: `${coupon.store} Coupon — ${coupon.title}`,
    description: coupon.description,
  };
}

const CouponDetailPage = async ({ params }) => {
  const { slug } = await params;
  const coupon = await getCouponBySlug(slug);
  if (!coupon) notFound();

  return (
    <div className="mt-6 sm:mt-8">

      {/* Breadcrumb */}
      <nav className="mb-4 flex items-center gap-1 text-sm text-gray-400">
        <Link href="/" className="hover:text-[#3E80DD] transition-colors">Home</Link>
        <ChevronRight size={13} />
        <span className="cursor-default">Coupons</span>
        <ChevronRight size={13} />
        <span className="font-semibold text-slate-700">{coupon.store}</span>
      </nav>

      {/* Main Card */}
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">

        {/* ── Compact Header ── */}
        <div className="flex items-center gap-4 border-b border-gray-100 bg-gray-50/60 px-6 py-5">
          {/* Store logo */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white p-2.5 shadow-sm">
            <Image
              src={coupon.storeIcon}
              alt={coupon.store}
              width={coupon.storeIcon.width}
              height={coupon.storeIcon.height}
              className="h-full w-auto object-contain"
              priority
            />
          </div>

          {/* Info */}
          <div className="flex flex-1 flex-col gap-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {coupon.store}
              </p>
              <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-600">
                <BadgeCheck size={9} strokeWidth={2.5} /> Verified
              </span>
            </div>
            <h1 className="text-base font-extrabold leading-snug text-slate-900 sm:text-lg truncate">
              {coupon.title}
            </h1>
            <div className="flex items-center gap-1 text-[11px] text-gray-400">
              <Clock size={11} />
              <span>Limited time offer</span>
            </div>
          </div>
        </div>

        {/* ── Ticket notches ── */}
        <div className="relative flex items-center bg-white">
          <span className="absolute -left-3 h-6 w-6 rounded-full bg-gray-100 border border-gray-200" />
          <div className="w-full border-t border-dashed border-gray-200" />
          <span className="absolute -right-3 h-6 w-6 rounded-full bg-gray-100 border border-gray-200" />
        </div>

        {/* ── Body ── */}
        <div className="flex flex-col gap-6 px-6 py-6 sm:px-8">

          {/* Copy code */}
          <div>
            <div className="mb-3 flex items-center gap-1.5">
              <Tag size={13} className="text-[#3E80DD]" />
              <h2 className="text-sm font-bold text-slate-700">Coupon Code</h2>
            </div>
            <CopyCodeButton code={coupon.code} />
          </div>

          {/* Description */}
          <div>
            <h2 className="mb-1.5 text-sm font-bold text-slate-700">About this offer</h2>
            <p className="text-sm leading-relaxed text-gray-500">{coupon.description}</p>
          </div>

          {/* Steps */}
          {coupon.steps?.length > 0 && (
            <div>
              <h2 className="mb-3 text-sm font-bold text-slate-700">How to use this code?</h2>
              <ol className="flex flex-col gap-3">
                {coupon.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3E80DD] text-[10px] font-extrabold text-white">
                      {i + 1}
                    </span>
                    <p className="mt-0.5 text-sm leading-relaxed text-gray-600">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* CTA buttons */}
          <div className="flex flex-col gap-2.5 sm:flex-row">
            <a
              href={coupon.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#3E80DD] py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#3271c8] hover:shadow-md active:scale-95"
            >
              Visit {coupon.store} Store <ExternalLink size={13} className="opacity-70" />
            </a>
            <Link
              href="/"
              className="flex items-center justify-center gap-1.5 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm font-semibold text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-100"
            >
              More Deals
            </Link>
          </div>

        </div>
      </div>

      {/* Trust badges */}
      <div className="mt-3 grid grid-cols-3 gap-2.5">
        {[
          { icon: BadgeCheck, text: "100% Verified" },
          { icon: ShieldCheck, text: "Safe & Secure" },
          { icon: Clock, text: "Limited Offer" },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center justify-center gap-1.5 rounded-xl border border-gray-100 bg-white px-3 py-2.5 shadow-sm">
            <Icon size={13} className="shrink-0 text-[#3E80DD]" />
            <span className="text-[10px] font-semibold text-gray-500">{text}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CouponDetailPage;
