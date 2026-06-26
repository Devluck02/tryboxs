import { NextResponse } from "next/server";
import { CATEGORIES } from "@/constants/categories";

/**
 * GET /api/categories
 * Backend ready: Replace body with fetch to Express.js API
 */
export async function GET() {
  const data = CATEGORIES.map(({ name, slug, bg, text, deals }) => ({
    name,
    slug,
    bg,
    text,
    deals,
  }));

  return NextResponse.json({ success: true, data }, { status: 200 });
}
