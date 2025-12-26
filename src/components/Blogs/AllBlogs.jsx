import { useState } from 'react';
import { blogs } from '../../data/blogData';
import StarBorder from '../Reusable/StarBorder';

const PLACEHOLDER_IMAGE = '/BLOG_PLACEHOLDER.png';

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 3;

const AllBlogs = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleBlogs = blogs.slice(0, visibleCount);
  const hasMore = visibleCount < blogs.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-telegraf mb-10">
          All blog posts
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleBlogs.map((blog) => (
            <a
              key={blog.id}
              href={`/resource/blogs/${blog.slug}`}
              className="group space-y-4"
            >
              {/* Image */}
              <div className="relative w-full h-[220px] overflow-hidden rounded-lg">
                <img
                  src={PLACEHOLDER_IMAGE}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Date */}
              <p className="text-xs text-red-500">
                {blog.date}
              </p>

              {/* Title */}
              <h3 className="text-lg font-semibold flex items-center gap-2 leading-snug">
                {blog.title}
                <span className="text-base">↗</span>
              </h3>

              {/* Excerpt */}
              {blog.excerpt && (
                <p className="text-sm text-gray-400 line-clamp-3">
                  {blog.excerpt}
                </p>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/90 text-red-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center mt-14">
            <button onClick={handleLoadMore}>
              <StarBorder color="red" thickness={1.5} speed="4s">
                Read More
              </StarBorder>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllBlogs;
