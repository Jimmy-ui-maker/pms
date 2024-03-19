
import { PassQTable } from "@/models/PassQ";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const newPassQ = await PassQTable.create(body);
    return NextResponse.json(newPassQ, { status: 201 });
  } catch (error) {
    return NextResponse.json("Fail to add data", { status: 500 });
  }
}
export async function GET(req) {
  try {
    const passQ = await PassQTable.find();
    return NextResponse.json(passQ, { status: 201 });
  } catch (error) {
    return NextResponse("Fail to fetch", { status: 500 });
  }
}
