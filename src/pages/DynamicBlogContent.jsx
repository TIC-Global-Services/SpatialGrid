import { useParams } from "react-router-dom";
import { blogs } from "../data/blogData";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const PLACEHOLDER_IMAGE = "/BLOG_PLACEHOLDER.png";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Blog not found
      </div>
    );
  }

  return (
    <section className="bg-black text-white">
      {/* Banner */}
      <div className="relative h-[360px] md:h-[420px]">
        <img
          src={PLACEHOLDER_IMAGE}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute bottom-10 w-full">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-telegraf font-semibold">
              {blog.title}
            </h1>
            <p className="mt-2 text-red-400 text-sm">{blog.date}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-white/10 text-red-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ✅ REAL MARKDOWN RENDERING */}
        <article className="blog-markdown">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blog.content}
          </ReactMarkdown>
        </article>
      </div>
    </section>
  );
};

export default BlogDetail;
