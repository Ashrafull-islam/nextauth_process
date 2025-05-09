import mongoose, { Document, Schema } from 'mongoose';
// models/User.js

export interface User extends Document {
    name:string;
    email:string;
    pasword:string;
}
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
  resetToken: String,
  resetTokenExpiry: Date
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);
