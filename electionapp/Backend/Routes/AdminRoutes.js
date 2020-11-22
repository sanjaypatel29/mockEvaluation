const express = require('express');
const { registeradmin, loginadmin } = require('../controllers/adminControllers');
const { authMiddleWare } = require('../middleware/middleware');
const router = express.Router();

router.post('/register', registeradmin);
router.post('/login', loginadmin);
router.use(authMiddleWare);

module.exports = router;
