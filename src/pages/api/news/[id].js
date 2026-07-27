import { connectToDatabase } from "../../../utils/db";
import { buildIdQuery } from "../../../utils/idQuery";
import News from "../../../models/News";

export default async function handler(req, res) {
  await connectToDatabase();
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const newsItem = await News.findOne(buildIdQuery(id));
      if (!newsItem)
        return res.status(404).json({ error: "News item not found" });
      return res.status(200).json(newsItem);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch news item" });
    }
  }

  if (req.method === "PUT") {
    try {
      const newsItem = await News.findOneAndUpdate(buildIdQuery(id), req.body, {
        new: true,
        runValidators: true,
      });
      if (!newsItem)
        return res.status(404).json({ error: "News item not found" });
      return res.status(200).json(newsItem);
    } catch (error) {
      return res.status(500).json({ error: "Failed to update news item" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const newsItem = await News.findOneAndDelete(buildIdQuery(id));
      if (!newsItem)
        return res.status(404).json({ error: "News item not found" });
      return res
        .status(200)
        .json({ message: "News item deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete news item" });
    }
  }

  res.status(405).json({ message: "Method not allowed" });
}
