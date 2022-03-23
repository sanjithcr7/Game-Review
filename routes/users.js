let mongoose=require('mongoose');
// mongoose.connect('mongodb+srv://Chandana:cvml462ccl4*@mytasker.wknnc.mongodb.net/gaming-forum?retryWrites=true&w=majority')
mongoose.connect('mongodb://localhost:27017/gaming-forum');
let schema=mongoose.Schema(
  {
    name:{
      type:String,
      required:true
    },
    review:{
      type:String,
      required:true
    }
  }
)
module.exports=mongoose.model('review',schema)