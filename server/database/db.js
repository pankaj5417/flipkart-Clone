import mongoose from "mongoose"

const Connection= async(username, password)=>{
    const URL=`mongodb+srv://${username}:${password}@flipkartdb.mdsn7.mongodb.net/flipkartClone?retryWrites=true&w=majority`
    try{

        await mongoose.connect(URL, {
             useNewUrlParser:true,
             useUnifiedTopology:true,
            //useFindAndModify:false
         })
         console.log("Database connected to MongoDB")
    }catch(err){
        console.log(err)
    }
}
 export default Connection