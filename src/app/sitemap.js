import { connectToDatabase } from "@/utils/db";
import Blog from "@/models/Blog";
import News from "@/models/News";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skilledhyrelabs.com";

export default async function sitemap() {
  // 1. Static Core Landing Pages
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tech-talent`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/taas`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/product-innovation-lab`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/end-to-end`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },

    // 2. Services Pages
    {
      url: `${baseUrl}/services/custom-software`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/cloud-devops`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/mobile-app-development`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/product-engineering`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/sap-consulting`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/website-development`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/erp`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // 3. AI Engineering Pages
    {
      url: `${baseUrl}/ai-engineering/generative-ai`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-engineering/machine-learning`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-engineering/intelligent-automation`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-engineering/predictive-analytics`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // 4. Innovation Lab Pages
    {
      url: `${baseUrl}/innovation/ai-product-design`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/innovation/cloud-architecture`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/innovation/digital-transformation`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/innovation/automation-intelligent-systems`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/innovation/emerging-technologies`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },

    // 5. Industry Vertical Pages
    {
      url: `${baseUrl}/industries/healthcare`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/industries/fintech-banking`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/industries/retail-ecommerce`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/industries/manufacturing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/industries/logistics-supply-chain`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/industries/education-edtech`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/industries/insurance`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/industries/real-estate`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/industries/travel-tourism`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/industries/marketing-media`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/industries/hr-recruitment`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/industries/food-restaurant`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  // 6. Dynamic Blog Articles from Database
  let blogRoutes = [];
  try {
    await connectToDatabase();
    const blogs = await Blog.find({}, "_id updatedAt createdAt").lean();
    blogRoutes = blogs.map((blog) => ({
      url: `${baseUrl}/blogs/${blog._id}`,
      lastModified: blog.updatedAt || blog.createdAt || new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    }));
  } catch (error) {
    console.error("[Sitemap] Error fetching blog posts:", error);
  }

  // 7. Dynamic News Articles from Database
  let newsRoutes = [];
  try {
    await connectToDatabase();
    const newsItems = await News.find({}, "_id updatedAt createdAt").lean();
    newsRoutes = newsItems.map((item) => ({
      url: `${baseUrl}/news/${item._id}`,
      lastModified: item.updatedAt || item.createdAt || new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    }));
  } catch (error) {
    console.error("[Sitemap] Error fetching news items:", error);
  }

  return [...staticRoutes, ...blogRoutes, ...newsRoutes];
}
