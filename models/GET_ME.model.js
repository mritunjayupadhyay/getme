import mongoose, { Schema } from "mongoose";

const getmeSchema = new Schema({
  lt: {
    type: String,
  },
  lg: {
    type: String,
  },
  s: {
    type: String,
  },
});

export const GetMe = mongoose.model("GetMe", getmeSchema);
