const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const librosSchema = new Schema({

//This must be passed to upload format
  book_url: {
    type: String,
    required: true,
  },

  book_title: {
    type: String,
    required: true,
  },
  
  book_description: {
    type: String,
    required: true,
  },

  book_category: {
    type: String,
    required: true,
  },

  book_year: {
    type: Number,
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

const Libros = mongoose.model('Libros', librosSchema);

module.exports = Libros;