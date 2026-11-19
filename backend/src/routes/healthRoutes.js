const express = require('express')
const {
  getDatabaseReadiness,
  getHealth,
} = require('../controllers/healthController')

const router = express.Router()

router.get('/', getHealth)
router.get('/ready', getDatabaseReadiness)

module.exports = router
