const { Router } = require('express');
const router = Router();

const UserController = require('../controllers/user-controller');

router.route('/')
    .get(UserController.index)
    .post(UserController.create);


router.route('/:userId')
    .get(UserController.show)
    .delete(UserController._delete);


router.route('/create')
    .post(UserController.create);


module.exports = router;