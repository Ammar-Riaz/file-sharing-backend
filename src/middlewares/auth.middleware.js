import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const jwtVerify = asyncHandler(async (req, res, next) => {
  const accessToken =
    req.cookies?.accessToken ||
    req.headers.authorization?.replace("Bearer ", "");

  if (!accessToken) {
    throw new ApiError(401, "Unauthorized user");
  }

  const decodedToken = jwt.verify(
    accessToken,
    process.env.JWT_ACCESS_TOKEN_SECRET
  );

  const user = await User.findById(decodedToken._id).select(
    "-password -refreshToken"
  );

  if (!user) {
    throw new ApiError(401, "Unauthorized user");
  }

  req.user = user;

  next();
});

export { jwtVerify };
