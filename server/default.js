 import {  products } from "./constants/product.js"

 import Product from "./models/productSchema.js"

const DefaultData= async ()=>{
try{
    await Product.deleteMany({})
 await Product.insertMany(products)

}catch(err){
    console.log("error",err.message)
}
}

export default DefaultData