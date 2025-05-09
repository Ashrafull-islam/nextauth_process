import connectionToDatabase from "@/lib/dbconnect";
import users from "@/modals/users";
import { NextResponse } from "next/server";
import crypto from "crypto";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export const POST = async (request: any) => {
  try {
    const { email } = await request.json();
    await connectionToDatabase();

    const exitingUser = await users.findOne({ email });
    if (!exitingUser) {
      return NextResponse.json({ message: "Email doesn't exist" }, { status: 400 });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    const passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    const passwordResetExpires = Date.now() + 3600000;

    exitingUser.resetToken = passwordResetToken;
    exitingUser.resetTokenExpiry = passwordResetExpires;
    await exitingUser.save();

    const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;
    const body = `Click the link to reset your password:\n\n${resetUrl}\n\nIf you did not request this, please ignore this email.`;

    const msg = {
      to: email,
      from: "mmmdashrafull212@gmail.com", // ✅ MUST be verified in SendGrid
      subject: "Reset your password",
      text: body,
      mail_settings: {
        sandbox_mode: {
          enable: false
        }
      }
    };

    await sgMail.send(msg);

    return NextResponse.json({ message: "Reset password email sent" }, { status: 200 });

  } catch (error: any) {
    console.error("SendGrid error:", error.response?.body || error.message || error);
    return NextResponse.json({ message: "Failed to send reset email" }, { status: 500 });
  }
};




// import connectionToDatabase from "@/lib/dbconnect";
// import users from "@/modals/users";
// import { NextResponse } from "next/server";
// import crypto from "crypto";
// import sgMail from "@sendgrid/mail"
// import { error } from "console";

// export const POST = async (request: any) => {
//   try {
//     const { email } = await request.json();
//     await connectionToDatabase();

//     const exitingUser = await users.findOne({ email });
//     if (!exitingUser) {
//       return NextResponse.json(
//         { message: "Email doesn't exist" },
//         { status: 400 }
//       );
//     }

//     const resetToken = crypto.randomBytes(20).toString("hex");
//     const passwordResetToken = crypto
//       .createHash("sha256")
//       .update(resetToken)
//       .digest("hex");
//     const passwordResetExpires = Date.now() + 3600000;

//     exitingUser.resetToken = passwordResetToken;
//     exitingUser.resetTokenExpiry = passwordResetExpires;
//     await exitingUser.save(); // ⬅️ You forgot this — saves the updated user to the DB!

//     const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;
//     console.log("Reset URL:", resetUrl);
//     const body="Reset Password by clicking on following url" + resetUrl;
//     const msg={
//       to:email,
//       from:"mmmdashrafull212@gmail.com",
//       subject:"Reset Password",
//       text:body
//     }

//     sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

//     sgMail.send(msg).then(()=>{
//       return new NextResponse("Reset password email is sent",{status:200});
//     })
//     .catch(async (error)=>{
//       exitingUser.resetToken = undefined;
//       exitingUser.resetTokenExpiry=undefined;
//       await exitingUser.save();
//     })

//     try{
//       await exitingUser.save();
//       return new NextResponse("Email is sent for resing password",{
//         status:200,
//       });
//     } catch(error:any){
//       return new NextResponse(error,{
//         status:500,
//       })
//     }
// };
