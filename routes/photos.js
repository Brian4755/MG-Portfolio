import { Router } from "express";
import * as photosCtrl from '../controllers/photos.js'

const router = Router()

// GET -- localhost:3000/photos
router.get('/', photosCtrl.index)

// GET -- localhost:3000/photos/new
router.get('/new', photosCtrl.new)

// POST -- localhost:3000/photos
router.post('/', photosCtrl.create)

export {
  router
}
