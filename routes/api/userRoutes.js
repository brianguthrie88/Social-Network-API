const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addUserFriend,
  removeUserFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/videos/:videoId/responses
router.route('/:userId/friends/:friendId').post(addUserFriend).delete(removeUserFriend);

module.exports = router;
