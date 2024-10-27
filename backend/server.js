import app from './app.js'
import connectToMongoDB from './db/connectToMogoDB.js';


const PORT = process.env.PORT || 5000
connectToMongoDB();
const server = app.listen(PORT,()=>{
    console.log(`Server is Running with port: ${PORT} in ${process.env.NODE_ENV}`);
})