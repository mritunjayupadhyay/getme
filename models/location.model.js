import mongoose, { Schema } from "mongoose";
// Schema and Model
const locationSchema = new mongoose.Schema({
  location: {
    type: { type: String, enum: ["Point"], required: true },
    coordinates: { type: [Number], required: true },
  },
  accuracy: { type: Number, required: true },
  image: {
    type: String,
  },
});

// Creating a 2dsphere index to support geospatial queries
locationSchema.index({ location: "2dsphere" });

export const Location = mongoose.model("Location", locationSchema);
