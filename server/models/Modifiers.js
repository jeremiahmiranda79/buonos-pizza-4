const mongoose = require('mongoose');
const { Schema } = mongoose;

const modifiersSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0.01
  },
  quantity: { 
    type: Number,
    required: mongoose.rusted,
    min: 0
  }
});

const Modifiers = mongoose.model('Modifiers', modifiersSchema);

module.exports = Modifiers;