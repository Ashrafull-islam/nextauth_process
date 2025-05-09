"use server"

import connectionToDatabase from "@/lib/dbconnect";
import User from "@/modals/products";

export const registerUser = async (payload) => {
    await connectionToDatabase();
    const result = await User.create(payload);
    return result;
}
