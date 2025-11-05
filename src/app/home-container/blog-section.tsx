import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const posts = [
  {
    id: 1,
    title: "5 Tips for Effective Online Learning",
    description:
      "Unlock your potential with these proven strategies for staying focused and maximizing your online study sessions.",
    image: "/images/blog1.png",
  },
  {
    id: 2,
    title: "The Benefits of One-on-One Tutoring",
    description:
      "Discover how personalized attention from a dedicated tutor can accelerate your academic progress and boost confidence.",
    image: "/images/blog2.png",
  },
  {
    id: 3,
    title: "Mastering Exam Prep: A Comprehensive Guide",
    description:
      "Prepare for success with our expert guide to tackling exams, including study techniques and stress management tips.",
    image: "/images/blog3.png",
  },
];

const BlogSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16 xl:px-[100px] flex flex-col gap-12">
      <div className="text-center space-y-4">
        <h1 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-[#19191F]">
          From Our Blog
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl p-5 shadow-[0_0_1px_rgba(23,26,31,0.07),0_0_3px_rgba(23,26,31,0.1)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 flex flex-col justify-between"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-xl mb-5"
            />
            <div className="flex flex-col gap-1 mb-5">
              <h3 className="text-lg  font-semibold text-brandBlack ">
                {post.title}
              </h3>
              <p className="text-[#565D6D] text-sm  ">{post.description}</p>
            </div>

            <Link
              href={`/blog/${post.id}`}
              className="text-brandGreen text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
            >
              Read More <ChevronRight size={16} />
            </Link>
          </div>
        ))}
      </div>

      <Link
        href="/blog"
        className="mx-auto border border-brandGreen text-brandGreen px-6 py-3 rounded-full font-medium hover:bg-brandGreen hover:text-white transition-colors flex justify-center items-center gap-2"
      >
        Visit our Blog <ChevronRight />
      </Link>
    </section>
  );
};

export default BlogSection;
