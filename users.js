const express=require("express");

const auth=require("../middleware/auth");

const User=require("../models/User");

const router=express.Router();

router.put(

"/follow/:id",

auth,

async(req,res)=>{

try{

const target=

await User.findById(

req.params.id

);

const me=

await User.findById(

req.user.id

);

if(!target){

return res.status(404).json({

message:"User Not Found"

});

}

if(

me.following.includes(

target._id

)

){

me.following.pull(target._id);

target.followers.pull(me._id);

}

else{

me.following.push(target._id);

target.followers.push(me._id);

}

await me.save();

await target.save();

res.json({

message:"Updated"

});

}

catch(err){

res.status(500).json({

message:err.message

});

}

}

);



router.put(

"/update",

auth,

async(req,res)=>{

try{

const user=

await User.findByIdAndUpdate(

req.user.id,

{

username:req.body.username,

profilePic:req.body.profilePic,

bio:req.body.bio

},

{

new:true

}

);

res.json(user);

}

catch(err){

res.status(500).json({

message:err.message

});

}

}

);

module.exports=router;