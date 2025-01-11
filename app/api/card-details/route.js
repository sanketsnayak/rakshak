import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { account } = await request.json();

    if (!account) {
      return NextResponse.json(
        { status: "error", message: "No account address provided" },
        { status: 400 }
      );
    }

    const User = await prisma.user.findUnique({
      where: {
        walletAddress: account,
      },
    });

    if (!User) {
      return NextResponse.json(
        { status: "error", message: "User not found" },
        { status: 404 }
      );
    }

    console.log("User found:", User);

    return NextResponse.json(
      { status: "success", data: User },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { status: "error", message: "Internal server error" },
      { status: 500 }
    );
  }
}
