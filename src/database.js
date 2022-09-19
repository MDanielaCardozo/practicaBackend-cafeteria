import mongoose from "mongoose";

//const url = 'mongodb://localhost:27017/cafeteriaBackend';
const url = 'mongodb+srv://mdanielacardozo:mtkZQ5FjoyI9ZEIk@clusterdani.7tfbsbj.mongodb.net/cafeteria';


mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('BD conectada')
})

// const connectDB = async ()=> {
//     try {
//         await mongoose.connect(url);
//         console.log('BD conectada')
//     } catch (error) {
//         console.log(error)
//     }
// }

// connectDB();