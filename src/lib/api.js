/**
 * Centralized API Service Layer
 *
 * HOW BACKEND INTEGRATION WORKS:
 * 1. Abhi: functions directly return mock data (constants se)
 * 2. Jab backend ready ho: sirf is file me API_URL add karo aur
 *    har function ko fetch() call mein convert karo — baaki code same rahega
 *
 * Example (future):
 *   export async function getCategories() {
 *     const res = await fetch(`${API_URL}/categories`, { next: { revalidate: 60 } });
 *     if (!res.ok) throw new Error("Failed to fetch categories");
 *     return res.json();
 *   }
 */

import { CATEGORIES } from "@/constants/categories";
import { DEALS_OF_THE_DAY } from "@/constants/deals";
import { CASHBACK_DEALS } from "@/constants/cashbackDeals";
import { CASHBACK_STORES } from "@/constants/cashbackStores";
import { TRENDING_COUPONS } from "@/constants/trendingCoupons";
import { BRANDS } from "@/constants/brands";
import { HERO_SLIDES } from "@/constants/hero";

// ─── Helper (future use) ───────────────────────────────────────────────────────
// const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

// ─── Categories ───────────────────────────────────────────────────────────────
export async function getCategories() {
  return CATEGORIES;
}

// ─── Deals of the Day ─────────────────────────────────────────────────────────
export async function getDeals() {
  return DEALS_OF_THE_DAY;
}

// ─── Single Deal by slug (product + cashback dono mein search) ───────────────
export async function getDealBySlug(slug) {
  const [deals, cashbackDeals] = await Promise.all([getDeals(), getCashbackDeals()]);
  const product = deals.find((d) => d.slug === slug);
  if (product) return { ...product, type: "product" };
  const cashback = cashbackDeals.find((d) => d.slug === slug);
  if (cashback) return { ...cashback, type: "cashback" };
  return null;
}

// ─── All deal slugs (product + cashback) for generateStaticParams ─────────────
export async function getAllDealSlugs() {
  const [deals, cashbackDeals] = await Promise.all([getDeals(), getCashbackDeals()]);
  return [...deals.map((d) => d.slug), ...cashbackDeals.map((d) => d.slug)];
}

// ─── Cashback Deals ───────────────────────────────────────────────────────────
export async function getCashbackDeals() {
  return CASHBACK_DEALS;
}

// ─── Cashback Stores ──────────────────────────────────────────────────────────
export async function getCashbackStores() {
  return CASHBACK_STORES;
}

// ─── Trending Coupons ─────────────────────────────────────────────────────────
export async function getCoupons() {
  return TRENDING_COUPONS;
}

// ─── All Brands / Stores ──────────────────────────────────────────────────────
export async function getBrands() {
  return BRANDS;
}

// ─── Single Store by slug ─────────────────────────────────────────────────────
export async function getStoreBySlug(slug) {
  const stores = await getCashbackStores();
  return stores.find((s) => s.slug === slug) ?? null;
}

// ─── Single Cashback Deal by slug ─────────────────────────────────────────────
export async function getCashbackDealBySlug(slug) {
  const deals = await getCashbackDeals();
  return deals.find((d) => d.slug === slug) ?? null;
}

// ─── Single Coupon by slug ────────────────────────────────────────────────────
export async function getCouponBySlug(slug) {
  const coupons = await getCoupons();
  return coupons.find((c) => c.slug === slug) ?? null;
}

// ─── All coupon slugs for generateStaticParams ────────────────────────────────
export async function getAllCouponSlugs() {
  const coupons = await getCoupons();
  return coupons.map((c) => c.slug);
}

// ─── Single Category by slug ──────────────────────────────────────────────────
export async function getCategoryBySlug(slug) {
  const categories = await getCategories();
  return categories.find((c) => c.slug === slug) ?? null;
}

// ─── Hero Slides ──────────────────────────────────────────────────────────────
export async function getHeroSlides() {
  return HERO_SLIDES;
}
