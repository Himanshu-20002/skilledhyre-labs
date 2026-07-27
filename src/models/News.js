import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.Mixed,
    default: () => new mongoose.Types.ObjectId(),
  },
  title: { type: String, required: true },
  name: String, // Added based on user request
  heading: String,
  shortDescription: String,
  cardImage: String,
  content: String,
  sections: [
    {
      id: String,
      html: String,
      initialHtml: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.News || mongoose.model("News", NewsSchema);
