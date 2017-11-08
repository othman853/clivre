const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contentSchema = new Schema({
  class: String,
  title: String,
  type: String,
  url: String,
  author: String,
  preview: String,
  views: Number,
})

module.exports = mongoose.model('Content', contentSchema)
