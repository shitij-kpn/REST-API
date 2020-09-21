const express = require('express');
const {
  signup,
  login,
  forgotPassword,
  resetPassword
} = require('../controllers/authController');
const userController = require('./../controllers/userController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.patch('/forgotPassword', forgotPassword);
router.post('/resetPassword', resetPassword);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
