import mongoose from "mongoose";

export function buildIdQuery(id) {
  if (!id) return { _id: null };

  const conditions = [{ _id: id }, { name: id }];

  if (mongoose.Types.ObjectId.isValid(id)) {
    conditions.push({ _id: new mongoose.Types.ObjectId(id) });
  }

  return {
    $or: conditions,
  };
}
