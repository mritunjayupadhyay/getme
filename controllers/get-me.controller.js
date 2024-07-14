import { ApiResponse } from "../utils/response.utils.js";
import { asyncHandler } from "../utils/async.utils.js";
import { isDate } from "../utils/date.utils.js";
import { GetMe } from "../models/GET_ME.model.js"

 
const getMe = asyncHandler(async (req, res) => {
  
    const me = await GetMe.find()

    return res
    .status(200)
    .json(
      new ApiResponse(200, me)
    );
});

const createMe = asyncHandler(async (req, res) => {
    const {
      lt, lg, s
    } = req.body;
  
   
    const event = await GetMe .create({
        lt, lg, s
    });
  
    await event.save();
  
    return res
      .status(201)
      .json(
        new ApiResponse(
          200,
          event,
          ""
        )
      );
  });

export { getMe, createMe };