import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { ip, geo } = request;
  return NextResponse.json({
    ip: ip,
    location: geo?.city,
  });
}
