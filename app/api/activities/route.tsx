import { NextResponse } from "next/server";
import { activities } from "@/constant";
export async function GET() {
  return NextResponse.json(activities);
}
