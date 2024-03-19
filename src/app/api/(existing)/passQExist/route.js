import { PassQTable } from "@/models/PassQ";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const user = await PassQTable.findOne(body).select("_id");
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
