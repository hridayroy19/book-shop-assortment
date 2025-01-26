import { model, Schema } from "mongoose";
import { Iuser } from "./user.Interface";


const userSchema = new Schema<Iuser>({
    name:{ type:String , required:[true , "please provide your name"]},
    email:{ type:String , required:[true , "please provide your Email"], unique:true},
    passwrod:{ type:String ,required:[true , "Enter your Password"] },
    role:{ type:String , required:true , default:"user", enum:{values:["user","admin"] ,message: '{VALUE} is not valid, please provide a valid role', } },
    photo:{ type:String  },
    userStatus:{ type:String , required:true , default:"active" , enum: ['active', 'inactive'], },
})


export const UserModel = model<Iuser>('user', userSchema); 