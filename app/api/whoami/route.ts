import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { ip, geo } = request;
  return NextResponse.json({
    ip: ip || "127.0.0.1",
    location: geo?.city || "Istanbul, Turkey",
  });
}
