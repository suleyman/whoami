import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { ip, geo } = request;
  return NextResponse.json({
    ip: "127.0.0.1",
    location: "Istanbul, Turkey",
  });
}
