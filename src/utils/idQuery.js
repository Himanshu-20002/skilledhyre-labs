import mongoose from "mongoose";

export function buildIdQuery(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return { _id: id };
  }

  return {
    $or: [{ _id: id }, { _id: new mongoose.Types.ObjectId(id) }],
  };
}
