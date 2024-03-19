import { KadunaTable } from "@/models/Nigeria";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { orgName } = await req.json();
    const user = await KadunaTable.findOne({ orgName }).select("_id");


    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
