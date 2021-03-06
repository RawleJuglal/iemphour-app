var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
    local:{
        email: String,
        password: String,
        firstName: String,
        mInitial: String,
        lastName: String,
        phoneNumber: String,
        cpassword: String,
        stateIdImage:{ data: Buffer, contentType: String}
    },
});

userSchema.methods.generateHash = function(password) {  
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function(password) {  
  return bcrypt.compareSync(password, this.local.password);
};
module.exports = mongoose.model('User', userSchema);