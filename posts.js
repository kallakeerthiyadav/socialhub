
const express=require("express");

const Post=require("../models/Post");

const auth=require("../middleware/auth");

const router=express.Router();



// CREATE POST

router.post(

"/create",

auth,

async(req,res)=>{

try{

const post=

new Post({

...req.body,

comments:

req.body.comments || [],

likes:

req.body.likes || []

});


await post.save();


res.json({

message:

"Post Created",

post

});

}

catch(err){

res.status(500).json({

message:

err.message

});

}

}

);




// GET ALL POSTS

router.get(

"/all",

async(req,res)=>{

try{

const posts=

await Post.find()

.sort({

createdAt:-1

});


res.json(

posts

);

}

catch(err){

res.status(500).json({

message:

err.message

});

}

}

);




// COMMENT SYSTEM

router.put(

"/comment/:id",

auth,

async(req,res)=>{

try{

const post=

await Post.findById(

req.params.id

);


if(!post){

return res.status(404).json({

message:

"Post Not Found"

});

}


post.comments.push({

username:

req.body.username,

text:

req.body.text

});


await post.save();


res.json({

message:

"Comment Added",

comments:

post.comments

});

}

catch(err){

res.status(500).json({

message:

err.message

});

}

}

);




// LIKE / UNLIKE SYSTEM

router.put(

"/like/:id",

auth,

async(req,res)=>{

try{

const post=

await Post.findById(

req.params.id

);


if(!post){

return res.status(404).json({

message:

"Post Not Found"

});

}


const userId=

req.user.id;


if(

post.likes.includes(

userId

)

){

post.likes.pull(

userId

);

}

else{

post.likes.push(

userId

);

}


await post.save();


res.json({

message:

"Like Updated",

likes:

post.likes.length,

liked:

post.likes.includes(

userId

)

});

}

catch(err){

res.status(500).json({

message:

err.message

});

}

}

);




// DELETE POST

router.delete(

"/delete/:id",

auth,

async(req,res)=>{

try{

const post=

await Post.findById(

req.params.id

);


if(!post){

return res.status(404).json({

message:

"Post Not Found"

});

}


await Post.findByIdAndDelete(

req.params.id

);


res.json({

message:

"Post Deleted"

});

}

catch(err){

res.status(500).json({

message:

err.message

});

}

}

);



module.exports=

router;
