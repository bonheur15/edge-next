import { NextResponse } from "next/server";
export const runtime = 'edge'; 
export const preferredRegion = ['iad1', 'cdg1','gru1','cpt1'];
export async function GET() {
    return NextResponse.json({
        hello: "world"
    })
}
export const dynamic = "force-dynamic";
