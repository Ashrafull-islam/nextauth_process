import connectionToDatabase from "@/lib/dbconnect";
import users from "@/modals/users";
import { NextResponse } from "next/server";
import crypto from "crypto";

export const POST = async (req: Request) => {
  try {
    const { password, token } = await req.json();
    if (!token || !password) {
      return NextResponse.json({ message: "Invalid request" }, { status: 400 });
    }

    await connectionToDatabase();

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await users.findOne({
      resetToken: hashedToken,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({ message: "Token expired or invalid" }, { status: 400 });
    }

    user.password = password; // Hash it if you use bcrypt
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    return NextResponse.json({ message: "Password has been reset" }, { status: 200 });
  } catch (error) {
    console.error("Error resetting password:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
};
