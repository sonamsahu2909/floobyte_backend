const router = require("express").Router();
// const { checkToken } = require("../../auth/token_validation");
const {
  create,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser
} = require("./user.controller");
router.get("/", getUsers);
router.post("/create", create);
router.get("/:id", getUserByUserId);
router.post("/login", login);
router.patch("/update", updateUsers);
router.delete("/delete", deleteUser);

module.exports = router;
