import { NextResponse } from "next/server";
import { CASHBACK_DEALS } from "@/constants/cashbackDeals";

/**
 * GET /api/cashback-deals
 * Backend ready: Replace body with fetch to Express.js API
 */
export async function GET() {
  const data = CASHBACK_DEALS.map(({ id, brand, cashback, description, href }) => ({
    id,
    brand,
    cashback,
    description,
    href,
  }));

  return NextResponse.json({ success: true, data }, { status: 200 });
}
