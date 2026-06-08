
const mongoose=require("mongoose");

const notificationSchema=

new mongoose.Schema({

receiver:{

type:

mongoose.Schema.Types.ObjectId,

ref:"User"

},

senderName:{

type:String

},

message:{

type:String

},

createdAt:{

type:Date,

default:Date.now

}

});

module.exports=

mongoose.model(

"Notification",

notificationSchema

);
