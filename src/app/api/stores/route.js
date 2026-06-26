import { NextResponse } from "next/server";
import { BRANDS } from "@/constants/brands";

/**
 * GET /api/stores
 * Backend ready: Replace body with fetch to Express.js API
 */
export async function GET() {
  return NextResponse.json({ success: true, data: BRANDS }, { status: 200 });
}
