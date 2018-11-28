const bcrypt = require('bcrypt');
const SALT = 10;

const hashpassword = (input) =>{
	return new Promise((resolve, reject)=>{
		bcrypt.hash(input, SALT, function(error, hashedValue){
			if (err) {
				return reject(err)
			}
			resolve(hashedValue)
		})
	})
}

const comparepassword = (input, hash) => {
	return new Promise((resolve, reject) => {
		bcrypt.compare(input, hash, function(err, same){
			if(err) return reject(err);
			return resolve(same);
		})
	})
}
module.exports = {
	hashpassword,
	comparepassword
}