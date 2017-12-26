const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//create schema and model
const FirstSchema=new Schema({
	name:{
		type:String,
		required:[true,'Name field is required']
	},
	address:{
		type:String
	}

});
const Ninja=mongoose.model('ninja',FirstSchema)
module.exports=Ninja;