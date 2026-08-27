"use client";
import BlogCard from "@/components/home/BlogCard";

export default function InsightsSection({ blogs = [] }) {
  return (
    <section className="relative bg-transparent py-20">
      {/* Ambient background rendered by shared parent in page.js */}

      <div className="relative z-10 max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[0.68rem] font-semibold tracking-wider text-[#818cf8] bg-[#6366f1]/10 border border-[#6366f1]/25 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping" />
            LATEST INSIGHTS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            Trends & <em className="italic text-[#6366f1]">Engineering Insights</em>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm">
            Explore technology trends, AI architectures, and strategies for digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.slice(0, 3).map((blog) => (
            <div key={blog._id} className="h-full">
              <BlogCard
                title={blog.title}
                date={new Date(blog.createdAt).toLocaleDateString()}
                excerpt={blog.shortDescription}
                image={blog.cardImage || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"}
                slug={`/blogs/${blog._id}`}
              />
            </div>
          ))}
          {blogs.length === 0 && (
            <div className="col-span-full py-8 text-center text-xs text-gray-500 bg-[#0d101d]/60 backdrop-blur-md rounded-xl border border-white/10">
              No recent blogs available
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
