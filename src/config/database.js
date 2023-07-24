import mongoose from 'mongoose';


// const connect = async () => {
//     await mongoose
//     .connect("mongodb://127.0.0.1:27017/twitter_Dev")
//     .then(() => console.log("MongoDB Connected"))
//     .catch((err) => console.log("Mongo Error",err));
// }

// module.exports=connect;

export const connect = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/twitter_Dev");
}

