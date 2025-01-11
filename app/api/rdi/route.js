import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request) {
  try {
    const { account } = await request.json();

    if (!account) {
      return NextResponse.json({ message: "Account is required" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { walletAddress: account },
    });

    if (existingUser) {
      return NextResponse.json({ message: "Account already exists" }, { status: 409 });
    }

    

    const User = await prisma.user.create({
      data: {
        walletAddress: account,
      },
    });

    const rakshak_token = crypto
      .createHmac("sha256", process.env.SECRET_KEY) 
      .update(`${User.id}:${account}`)
      .digest("hex");

    const user = await prisma.user.update({
      where:{
        walletAddress: User.walletAddress
      },
      data:{
        rakshak_token:rakshak_token
      }
    })

    return NextResponse.json({
      message: "User created successfully",
      user: user,
      token: rakshak_token,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
