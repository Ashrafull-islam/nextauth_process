import connectionToDatabase from "@/lib/dbconnect";
import { NextResponse } from "next/server";
import users from "@/modals/users";

export async function POST(request: Request) {
  try {
    const { email, name, password } = await request.json(); // FIXED

    await connectionToDatabase();

    const newUser = new users({ email, name, password }); // FIXED
    await newUser.save();

    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
  } catch (error) {
    console.error("POST /api/users error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
