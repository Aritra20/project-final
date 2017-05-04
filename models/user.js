var mongoose = require ("mongoose");
var bcrypt =require ("bcryptjs");
// user schema
var UserSchema =mongoose.Schema({
	name:{
		type:String,
	},
	email:{
		type:String,
	},
	gender:{
		type:String
	},
	work:{
		type:String
	},
	address:{
		type:String,
	},
	pin:{
		type:Number,
	},
	phone:{
		type:Number,
	},
	bday:{
		type:String,
	},
	roll:{
		type:Number,
	},
	password:{
		type:String, required: true, bcrypt:true
	},
	username:{
		type:String,
		index:true
	},
	profileimage:{
		type:String,
	}
});
var User = module.exports = mongoose.model("User",UserSchema);
module.exports.createUser =function(candidatePassword, hash ,callback){
	bcrypt.genSalt(10,function(err,salt){
		bcrypt.hash(newUser.password, salt,function(err, hash){
			newUser.password=hash;
			newUser.save(callback);
		});
	})};
	
module.exports.getUserById = function (id,callback){
	User.findById(id,callback);
};
module.exports.getUserByUsername = function (username,callback){
	var query ={username: username};
	User.findOne(query,callback);
};
module.exports.comparePassword =function(candidatePassword, hash ,callback){
	bcrypt.compare(candidatePassword,hash,function(err,isMatch){
		if(err) return callback(err);
		callback(null,isMatch);
	})};

module.exports.createUser =function(newUser, callback){
	bcrypt.hash(newUser.password,10,function(err,hash){
		if(err)throw err;
		// set hashed password
		newUser.password = hash;
		// create user
		newUser.save(callback);
	})};