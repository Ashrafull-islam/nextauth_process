import connectionToDatabase from "@/lib/dbconnect";
import user from "@/modals/products";
import { NextResponse } from "next/server";

export async function DELETE(request:Request,{params}:{params:{id:string}}){
    try{
        await connectionToDatabase();

        const deletedUser=await user.findByIdAndDelete(params.id);
        if(!deletedUser){
            return NextResponse.json({success:false,message:"user not found"},{status:404});
        }
        return NextResponse.json({success:true,message:"User deleted sucessfully"});

    }
    catch (error) {
        console.error("Error deleting user :",error);
        return NextResponse.json({success:false,message:"Failed to delete user"},{status:500})
    }
}


export async function PUT(request:Request,
    {params}:{params:{id:string}}
) {
    try{
        await connectionToDatabase();
        const body=await request.json();
        const updateUser=await user.findByIdAndUpdate(
            params.id,
            {$set:body},
            {new:true,runValidators:true}
        );
        if(!updateUser){
            return NextResponse.json({success:false,message:"user not found"},{status:404});
        }
        return NextResponse.json({success:true,user:updateUser});

    }catch(error){
        console.error("Enter updating user :",error);
        return NextResponse.json({success:false,message:"Failed to update user"},{status:500});
    }
}