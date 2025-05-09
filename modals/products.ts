import mongoose, { Schema, Document } from "mongoose";

// Define the interface for Food
export interface IFood extends Document {
    name: string;
    title: string;
    photo1: string;
    photo2: string;
    photo3: string;
    price: number;  // Use Number for price instead of string
    description: string;
}

// Define the schema
const foodSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        title: { type: String, required: true },
        photo1: { type: String, required: true },
        photo2: { type: String, required: true },
        photo3: { type: String, required: true },
        price: { type: Number, required: true },  // Changed to Number
        description: { type: String, required: true }
    },
    { timestamps: true }  // Adding timestamps for createdAt and updatedAt fields (optional)
);

// Export the model, checking if it already exists
export default mongoose.models.Food || mongoose.model<IFood>('Food', foodSchema);
