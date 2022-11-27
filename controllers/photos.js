import { Photo } from '../models/photo.js'

function index(req, res) {
  Photo.find({})
  .then(photos => {
    res.render('photos/index', {
      photos,
      title: 'Photos'
    })
  })
}

function newPhoto(req, res) {
  res.render('photos/new', {
    title: "Add Photo"
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res) {
  Photo.create(req.body)
  .then(photo => {
    res.redirect('/photos')
    console.log(photo)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  newPhoto as new,
  create
}