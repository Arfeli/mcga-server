// const { Router } = require('express');
// const router = Router();
const router = require('express-promise-router')();
const TodoController = require('../controllers/todo-controller');
//Home route handler
router.route('/todo-list')
    .get(TodoController.index)
    .post();

module.exports = router;