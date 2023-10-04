import express from "express";
const router = express.Router();
import {
  createSong,
  updateSong,
  getAllSongs,
  DeleteSong,
} from "../controller/songsController.js";
router.route("/").get(getAllSongs).post(createSong);
router.route("/:id").delete(DeleteSong).patch(updateSong);
export default router;
