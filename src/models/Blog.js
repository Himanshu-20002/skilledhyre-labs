import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.Mixed,
    default: () => new mongoose.Types.ObjectId(),
  },
  title: { type: String, required: true },
  name: String, // Added based on user request "ame is equal ===" interpreted as name field
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

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
