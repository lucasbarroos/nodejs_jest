const { Router } = require('express');

const router = Router();
const UserController = require('../../controllers/User/index');

router.post('/user', UserController.store);
router.put('/user/:id', UserController.update);
router.get('/user/:id', UserController.show);
router.get('/users/:page', UserController.index);
router.delete('/user/:id', UserController.destroy);

module.exports = router;
