import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/cafeteriaBackend'

mongoose.connect(url);

const conection = mongoose.connection;

conection.once('open', ()=>{
    console.log('BD conectada')
})