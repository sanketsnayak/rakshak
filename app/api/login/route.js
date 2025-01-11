import prisma from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(request) {
    try {
        const { address } = await request.json()
        if ( !address) {
            return NextResponse.json({ message: "Credentials are required" }, { status: 404 })
        }
        const existingUser = await prisma.user.findUnique({
            where:{
                walletAddress: address
            }
        })
        if(!existingUser)
        {
            return NextResponse.json({message:"No user with these credentials"}, {status:404})
        }
        return NextResponse.json({message:"Logged in successfully"}, {status:200})
    } catch (error) {
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }

}