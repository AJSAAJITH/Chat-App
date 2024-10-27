import mongoose from "mongoose";

const connectToMongoDB = async()=>{
    try {
       await mongoose.connect(process.env.MONGO_DB_URI)
        .then(con=>{
            console.log(`MongoDB is Connected to the host ${con.connection.host}`)
        })
        
    } catch (error) {
        console.log("Error Conneting to MonoDB", error.message);
    }
}

export default connectToMongoDB;