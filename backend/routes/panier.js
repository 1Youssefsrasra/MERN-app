const express = require('express')
const{getPaniers, getPanier, deletePanier, updatePanier, createPanier}= require('../controllers/panierController')

const router = express.Router()

router.get('/', getPaniers)
router.get('/:id', getPanier)
router.post('/', createPanier)
router.delete('/:id', deletePanier)
router.patch('/:id', updatePanier)


module.exports = router 