import { NextRequest, NextResponse } from 'next/server';
require("dotenv").config();

export async function GET(req: NextRequest) {
    const email = process.env.EMAIL;
    const pass = process.env.EMAIL_PASS;

    if (!email || !pass) {
        return NextResponse.json({ message: "Environment variables are missing" }, { status: 500 });
    }

    return NextResponse.json({ email, pass }, { status: 200 });
}
