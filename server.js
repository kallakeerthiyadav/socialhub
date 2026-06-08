
const express=require("express");

const cors=require("cors");

const mongoose=require("mongoose");

require("dotenv").config();

const authRoutes=require("./routes/auth");

const postRoutes=require("./routes/posts");

const userRoutes=require("./routes/users");

const notificationRoutes=

require("./routes/notifications");

const app=express();




// Middleware

app.use(cors());

app.use(express.json());




// Routes

app.use(

"/api/auth",

authRoutes

);


app.use(

"/api/posts",

postRoutes

);


app.use(

"/api/users",

userRoutes

);


app.use(

"/api/notifications",

notificationRoutes

);




// MongoDB Connection

mongoose.connect(

process.env.MONGO_URI

)

.then(()=>{

console.log(

"MongoDB Connected"

);

})

.catch((err)=>{

console.log(err);

});




// Test Route

app.get(

"/",

(req,res)=>{

res.send(

"Social Hub Backend Running"

);

}

);




// Start Server

const PORT=

process.env.PORT || 5000;



app.listen(

PORT,

()=>{

console.log(

"Server Running On Port",

PORT

);

}

);

