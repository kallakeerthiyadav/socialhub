
const express=require("express");

const bcrypt=require("bcryptjs");

const jwt=require("jsonwebtoken");

const User=require("../models/User");

const router=express.Router();



// REGISTER USER

router.post(

"/register",

async(req,res)=>{

try{


const {

username,

email,

password,

profilePic,

bio

}=req.body;



const existing=

await User.findOne({

email

});


if(existing){

return res.status(400).json({

message:

"User Already Exists"

});

}



const hashed=

await bcrypt.hash(

password,

10

);



const user=

new User({

username,

email,

password:hashed,

profilePic,

bio

});


await user.save();



const token=

jwt.sign(

{

id:user._id

},

process.env.JWT_SECRET,

{

expiresIn:

"7d"

}

);



res.json({

message:

"Registered Successfully",

token,

user

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




// LOGIN USER

router.post(

"/login",

async(req,res)=>{

try{


const {

email,

password

}=req.body;



const user=

await User.findOne({

email

});


if(!user){

return res.status(400).json({

message:

"User Not Found"

});

}



const match=

await bcrypt.compare(

password,

user.password

);


if(!match){

return res.status(400).json({

message:

"Wrong Password"

});

}



const token=

jwt.sign(

{

id:user._id

},

process.env.JWT_SECRET,

{

expiresIn:

"7d"

}

);



res.json({

message:

"Login Success",

token,

user

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
