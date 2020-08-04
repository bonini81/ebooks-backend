const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enlacesSchema = new Schema({


  link_url: {
    type: String,
    required: true,
  },

  link_title: {
    type: String,
    required: true,
  },
  
  link_description: {
    type: String,
    required: true,
  },

  tag: {
    type: String,
    required: true,
  },


  is_active: {
    type: Boolean,
    default: true,
  },

  //Populate from User
  added_by: [
    { type: Schema.Types.ObjectId, ref: 'Users' }
  ]
  
},
{
  timestamps: true,
});

const Enlaces = mongoose.model('Enlaces', enlacesSchema);

module.exports = Enlaces;