const express=require('express')
const PostModel = require('../models/Post.model')
const UserModel = require('../models/User.model')
const router=express.Router()

//create a post

router.post("/", async(req, res)=>{
    try{
        const newPost= await PostModel.create(req.body)
        return res.status(200).json({
            newPost,message:"a new post created"
        })

    }catch(err){
        return res.status(403).json(err)
    }
})
//update a post
router.put("/:id", async(req, res)=>{
    try{
        const post= await PostModel.findById(req.params.id)
        if(req.body.userId===post.userId){
            const updatedPost= await PostModel.updateOne({$set:req.body})

            return res.status(200).json({
                updatedPost,message:" post updated"
            })
        }else{
            return res.status(500).json("You can only update your post")
        }
    
        }catch(err){
            return res.status(403).json(err)
        }

    
})

//delete a post

router.delete("/:id", async(req, res)=>{
    try{
        const post= await PostModel.findById(req.params.id)
        if(req.body.userId===post.userId){
             await PostModel.deleteOne()

            return res.status(200).json({
            message:" post deleted"
            })
        }else{
            return res.status(500).json("You can only delete your post")
        }
    
        }catch(err){
            return res.status(403).json(err)
        }

    
})

//like a post
 router.put('/:id/likes', async(req,res)=>{
   try {
       const post= await PostModel.findById(req.params.id)

       if(!post.likes.includes(req.body.userId)){
           await post.updateOne({$push:{likes:req.body.userId}})
           return res.status(200).json("the post has been liked")
       }else{
           await post.updateOne({$pull:{likes:req.body.userId}})
           return res.status(200).json("the post is disliked")
       }
   } catch (error) {
       return res.status(403).json(error)
       
   }
 })

//get a post

router.get('/:id', async(req, res)=>{
    try {
        const post= await PostModel.findById(req.params.id)
        return res.status(200).send(post)
        
    }catch(error) {
        return res.status(403).json(error)
        
    }
})

// get timeline posts
router.get("/timeline/:userId", async(req,res)=>{
    
    try {
        const currentUser=await UserModel.findById(req.params.userId)
        const userPosts= await PostModel.find({userId:currentUser._id})
        const friendPosts= await Promise.all(
            currentUser.following.map(friendId=>{
               return PostModel.find({userId:friendId})
            })
        )
       // const timelinePosts=userPosts.concat(...friendPosts)
        return res.status(200).json(userPosts.concat(...friendPosts))
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports=router