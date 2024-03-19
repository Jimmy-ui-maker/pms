
import { SiwesTableGuide } from "@/models/Tables";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const newSiwes = await SiwesTableGuide.create(body);
    return NextResponse.json(newSiwes, { status: 201 });
  } catch (error) {
    return NextResponse.json("Fail to add data", { status: 500 });
  }
}
export async function GET(req) {
  try {
    const siwes = await SiwesTableGuide.find();
    return NextResponse.json(siwes, { status: 201 });
  } catch (error) {
    return NextResponse("Fail to fetch", { status: 500 });
  }
}
