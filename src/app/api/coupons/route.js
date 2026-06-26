import { NextResponse } from "next/server";
import { TRENDING_COUPONS } from "@/constants/trendingCoupons";

/**
 * GET /api/coupons
 * Backend ready: Replace body with fetch to Express.js API
 * Note: `storeIcon` will become a URL string from cloud storage
 */
export async function GET() {
  const data = TRENDING_COUPONS.map(({ id, store, code, title, description, href }) => ({
    id,
    store,
    code,
    title,
    description,
    href,
  }));

  return NextResponse.json({ success: true, data }, { status: 200 });
}
