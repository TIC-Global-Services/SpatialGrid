import React from "react";
import { blogs } from "../../data/blogData";

const PLACEHOLDER_IMAGE = "/BLOG_PLACEHOLDER.png";

const RecentBlogs = () => {
  const recentBlogs = [...blogs].reverse().slice(0, 5);
  const featured = recentBlogs[0];
  const others = recentBlogs.slice(1);

  return (
    <section className="bg-black text-white py-14">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-telegraf mb-8">
          Recent blog posts
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FEATURED BLOG */}
          <a
            href={`/resource/blogs/${featured.slug}`}
            className="group lg:col-span-2 space-y-4"
          >
            <div className="relative w-full h-[320px] overflow-hidden rounded-lg">
              <img
                src={PLACEHOLDER_IMAGE}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <p className="text-xs text-red-500">{featured.date}</p>

            <h3 className="text-xl font-semibold flex items-center gap-2">
              {featured.title}
              <span>↗</span>
            </h3>

            {featured.excerpt && (
              <p className="text-sm text-gray-400">
                {featured.excerpt}
              </p>
            )}

            <div className="flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-white/90 text-red-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>

          {/* OTHER BLOGS */}
          <div className="space-y-8">
            {others.map((blog) => (
              <a
                key={blog.id}
                href={`/resource/blogs/${blog.slug}`}
                className="group flex gap-4"
              >
                <div className="w-28 h-20 shrink-0 overflow-hidden rounded-md">
                  <img
                    src={PLACEHOLDER_IMAGE}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-1">
                  <p className="text-xs text-red-500">{blog.date}</p>

                  <h4 className="text-sm font-medium leading-snug">
                    {blog.title}
                  </h4>

                  <div className="flex flex-wrap gap-1">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-white/90 text-red-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
