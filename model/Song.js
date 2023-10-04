import mongoose from "mongoose";

const SongSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please provide your song"],
      maxlength: 50,
    },

    genre: {
      type: String,
      enum: ["Rap", "R&B", "classic", "electronic", "pop"],
      default: "Rap",
    },
  },
  { timestamps: true }
);
export default mongoose.model("Song", SongSchema);
