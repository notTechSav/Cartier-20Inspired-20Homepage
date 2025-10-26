import { NextResponse } from "next/server";

export async function GET() {
  const ping = process.env.PING_MESSAGE ?? "ping";
  return NextResponse.json({ message: ping });
}
