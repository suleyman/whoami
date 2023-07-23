import { NextRequest, NextResponse } from "next/server";
import { geolocation } from "@vercel/edge";

export async function GET(request: NextRequest) {
  const ip = request.ip;
  return NextResponse.json({
    ip: ip,
    location: geolocation(request)
  });
}
