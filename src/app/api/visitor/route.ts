import { NextResponse } from "next/server";

let visitorCount = 1000;

export async function GET() {
  visitorCount += 1;

  return NextResponse.json({ count: visitorCount });
}

export async function POST() {
  visitorCount += 1;
  return NextResponse.json({ count: visitorCount });
}
