import Song from "../model/Song.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

import { BadRequestError, NotFoundError } from "../errors/index.js";
// import checkPermissions from "../utils/checkPermissions.js";
import Songs from "../model/Song.js";

const createSong = async (req, res) => {
  const { title, genre } = req.body;

  if (!title || !genre) {
    throw new BadRequestError("Please provide all values");
  }
  // req.body.createdBy = req.user.userId;
  const song = await Songs.create(req.body);
  res.status(StatusCodes.CREATED).json({ song });
};
const getAllSongs = async (req, res) => {
  const { genre, sort, search } = req.query;

  let result = Song.find(); // Retrieve all jobs without any specific user filter

  // Apply filters if they are provided in the query parameters

  if (genre && genre !== "all") {
    result = result.where("genre").equals(genre);
  }
  if (search) {
    result = result.where("title").regex(new RegExp(search, "i"));
  }

  // Apply sorting options
  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("title");
  }
  if (sort === "z-a") {
    result = result.sort("-title");
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  // Apply pagination
  result = result.skip(skip).limit(limit);

  try {
    const songs = await result;
    const totalSongs = await Song.countDocuments(); // Get total count of all jobs without any user filter
    const numOfPages = Math.ceil(totalSongs / limit);

    res.status(StatusCodes.OK).json({ songs, totalSongs, numOfPages });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

const updateSong = async (req, res) => {
  const { id: songId } = req.params;
  const { title, genre } = req.body;
  if (!title || !genre) {
    throw new BadRequestError("Please provide all values");
  }
  const song = await Song.findOne({ _id: songId });
  if (!song) {
    throw new NotFoundError(`no song with id ${songId}`);
  }

  // checkPermissions(req.user, job.createdBy);
  const updatedSong = await Song.findOneAndUpdate({ _id: songId }, req.body, {
    new: true,
    runValidator: true,
  });
  res.status(StatusCodes.OK).json({ updatedSong });
};
const DeleteSong = async (req, res) => {
  const { id: songId } = req.params;

  const song = await Song.findOne({ _id: songId });

  if (!song) {
    throw new NotFoundError(`No song with id :${songId}`);
  }

  await song.deleteOne();

  res.status(StatusCodes.OK).json({ msg: "Success! song removed" });
};

export { createSong, updateSong, getAllSongs, DeleteSong };
