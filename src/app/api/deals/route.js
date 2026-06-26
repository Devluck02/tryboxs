import { NextResponse } from "next/server";
import { DEALS_OF_THE_DAY } from "@/constants/deals";

/**
 * GET /api/deals
 * Backend ready: Replace body with fetch to Express.js API
 * Note: `image` field will become a URL string from cloud storage
 */
export async function GET() {
  const data = DEALS_OF_THE_DAY.map(
    ({ id, brand, title, originalPrice, discountedPrice, discount, tag, grabbed, href }) => ({
      id,
      brand,
      title,
      originalPrice,
      discountedPrice,
      discount,
      tag,
      grabbed,
      href,
    })
  );

  return NextResponse.json({ success: true, data }, { status: 200 });
}
