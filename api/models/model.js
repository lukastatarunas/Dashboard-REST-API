'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Widgets = new Schema({
  id: {
    type: Number,
    required: 'Kindly enter the id of the widget'
  },
  column: {
    type: Number,
    required: 'Kindly enter the column of the widget'
  },
  type: {
    type: Number,
    required: 'Kindly enter the type of the widget'
  },
  title: {
    type: String,
    required: 'Kindly enter the title of the widget'
  },
  headerType: {
    type: Number,
    required: 'Kindly enter the header type of the widget'
  },
});

module.exports = mongoose.model('Widgets', Widgets);

const Data = new Schema({
    id: {
      type: Number,
      required: 'Kindly enter the id'
    },
    firstName: {
      type: String,
      required: 'Kindly enter the first name'
    },
    lastName: {
      type: String,
      required: 'Kindly enter the last name'
    },
    userName: {
      type: String,
      required: 'Kindly enter the user name'
    },
});
  
module.exports = mongoose.model('Data', Data);

  const Info = new Schema({
    id: {
      type: Number,
      required: 'Kindly enter the id'
    },
    author: {
      type: String,
      required: 'Kindly enter the author'
    },
    message: {
      type: String,
      required: 'Kindly enter the message'
    },
});
  
module.exports = mongoose.model('Info', Info);