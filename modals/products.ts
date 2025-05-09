import mongoose,{Schema,Document} from "mongoose";
export interface IFood extends Document {
    name:string;
    title:string;
    photo:string;
    price:string;
}
const foodSchema:Schema = new Schema ({
    name:{type:String,required:true,},
    title:{type:String,required:true},
    photo:{type:String,required:true},
    price:{type:String,required:true},
},
);
export default mongoose.models.Food || mongoose.model<IFood>('Food', foodSchema);