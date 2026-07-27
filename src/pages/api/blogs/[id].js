import { connectToDatabase } from "../../../utils/db";
import { buildIdQuery } from "../../../utils/idQuery";
import Blog from "../../../models/Blog";

export default async function handler(req, res) {
  await connectToDatabase();
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const blog = await Blog.findOne(buildIdQuery(id));
      if (!blog) return res.status(404).json({ error: "Blog not found" });
      return res.status(200).json(blog);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch blog" });
    }
  }

  if (req.method === "PUT") {
    try {
      const blog = await Blog.findOneAndUpdate(buildIdQuery(id), req.body, {
        new: true,
        runValidators: true,
      });
      if (!blog) return res.status(404).json({ error: "Blog not found" });
      return res.status(200).json(blog);
    } catch (error) {
      return res.status(500).json({ error: "Failed to update blog" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const blog = await Blog.findOneAndDelete(buildIdQuery(id));
      if (!blog) return res.status(404).json({ error: "Blog not found" });
      return res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete blog" });
    }
  }

  res.status(405).json({ message: "Method not allowed" });
}
