const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Below 2 Bcrypts dependencies
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
// End Bcrypt Dependencies

const usersSchema = new Schema({

  user_name: {
    type: String,
    required: true,
  },

  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    //Check that there is no replication
    unique: true,
  },

  password: {
    type: String,

  },

  is_active: {
    type: Boolean,
    default: true,
  },


},
{
  timestamps: true,
});


//Bcrypt PassWord Hasher Script

usersSchema.pre('save', function(next) {
  var user = this;

// only hash the password if it has been modified (or is new)
if (!user.isModified('password')) return next();

// generate a salt
bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
  if (err) return next(err);

  // hash the password using our new salt
  bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
  });
});


});



// End Bcrypt Script

const Users = mongoose.model('User', usersSchema);

module.exports = Users;

