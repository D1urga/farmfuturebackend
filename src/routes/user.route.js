import { Router } from "express";

import {
  getAllUsers,
  //   approveFollower,
  //   follow,
  //   followingPosts,
  //   getAllusers,
  getCurrentUser,
  getUser,
  getUserById,
  //   getCurrentusers,
  loginUser,
  logoutUser,
  registerUser,
  userprofile,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/current-user").get(getCurrentUser);
router.route("/getuser/:email").get(getUser);
router.route("/getAllUser").get(getAllUsers);
router.route("/getUserById/:id/:id2").get(getUserById);
router.route("/userprofile/:id").get(userprofile);

// router.route("/allUsers/:currentUser").get(getAllusers);
// router.route("/currentUser/:user").get(getCurrentusers);
// router.route("/follow/:followTo/:follower").post(follow);
// router.route("/followingPost/:id").get(followingPosts);
// router.route("/approveFollower/:followerId").post(approveFollower);

export default router;
