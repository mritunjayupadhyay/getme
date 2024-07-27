import { ApiResponse } from "../utils/response.utils.js";
import { asyncHandler } from "../utils/async.utils.js";
import { isDate } from "../utils/date.utils.js";
import { GetMe } from "../models/GET_ME.model.js";
import { Location } from "../models/location.model.js";

const getMe = asyncHandler(async (req, res) => {
  const me = await GetMe.find();

  return res.status(200).json(new ApiResponse(200, me));
});

const createMe = asyncHandler(async (req, res) => {
  const { lt, lg, s, acc } = req.body;

  const event = await GetMe.create({
    lt,
    lg,
    s,
  });

  await event.save();

  return res.status(201).json(new ApiResponse(200, event, ""));
});

const createLocation = asyncHandler(async (req, res) => {
  const { lt, lg, s, acc } = req.body;
  const latitude = parseFloat(lt);
  const longitude = parseFloat(lg);
  const location = new Location({
    location: {
      type: "Point",
      coordinates: [longitude, latitude],
    },
    image: s,
    accuracy: acc
  });
  try {
    await location.save();
    return res.status(201).json(new ApiResponse(201, location, ""));
  } catch (error) {
    return res.status(400).json(new ApiResponse(400, error, ""));
  }
});

export { getMe, createMe, createLocation };
