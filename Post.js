
const mongoose=require(

"mongoose"

);


const postSchema=

new mongoose.Schema(

{

userId:{

type:String,

default:""

},


username:{

type:String,

required:true

},


profilePic:{

type:String,

default:"logo.jpg"

},


image:{

type:String,

required:true

},


caption:{

type:String,

default:""

},


likes:[

{

type:String

}

],


comments:[

{

username:{

type:String

},

text:{

type:String

}

}

]

},

{

timestamps:true

}

);


module.exports=

mongoose.model(

"Post",

postSchema

);

