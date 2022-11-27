import mongoose from 'mongoose'

const Schema = mongoose.Schema

const photoSchema = new Schema({
  names: String,
  photo:
  {
      data: Buffer,
      contentType: String
  }
})

const Photo = mongoose.model('Photo', photoSchema)

export {
  Photo
}