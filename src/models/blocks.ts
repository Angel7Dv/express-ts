import mongoose, {Schema, model} from "mongoose";


// interface
interface Block extends mongoose.Document{
    field:string
}

//  shema
const BlockShema = new Schema({
    field: String,

})

// model
export default model<Block>('block', BlockShema)