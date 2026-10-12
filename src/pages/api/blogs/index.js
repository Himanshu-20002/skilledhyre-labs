import { connectToDatabase } from "../../../utils/db";
import Blog from "../../../models/Blog";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "GET") {
    try {
      // Exclude heavy content and sections from list view; return lean plain objects
      const blogs = await Blog.find(
        {},
        {
          title: 1,
          name: 1,
          heading: 1,
          shortDescription: 1,
          cardImage: 1,
          createdAt: 1,
          updatedAt: 1,
        }
      )
        .sort({ createdAt: -1 })
        .lean();

      return res.status(200).json(blogs);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch blogs" });
    }
  }

  if (req.method === "POST") {
    try {
      const blog = await Blog.create(req.body);
      return res.status(201).json(blog);
    } catch (error) {
      return res.status(500).json({ error: "Failed to create blog" });
    }
  }

  res.status(405).json({ message: "Method not allowed" });
}
