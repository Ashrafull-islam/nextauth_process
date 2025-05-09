import connectionToDatabase from "@/lib/dbconnect";
import user from "@/modals/products";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
      // Connect to MongoDB
      await connectionToDatabase();
      const data = await request.json();
      // Destructure data from the request (adjust according to your request structure)
      const { name,title,photo,price} = data;
      //check for exting entry
      const existing=await user.findOne({name:name});
      if(existing){
          return NextResponse.json({
              success:false,
              alert:"Coffee already exit",
          },{
              status:400
          });
      }
      // Create a new user document
      const newUser = new user({name,title,photo,price});
  
      // Save the user document to MongoDB
      await newUser.save();
      // Return a success response with the created user data
      return NextResponse.json({ success: true, user: newUser });
    } catch (error) {
      console.error("Error creating user:", error);
      return NextResponse.json({ success: false, message: "Failed to create user" });
    }
  }
  // GET: Get all users
  export async function GET() {
      try {
        await connectionToDatabase();
        const users = await user.find(); // Get all users
        return NextResponse.json({ success: true, users });
      } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ success: false, message: "Failed to fetch users" });
      }
    }
  