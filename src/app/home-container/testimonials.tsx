import { Award } from "lucide-react";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Aisha K.",
    image: "/images/testimonials.png",
    text: "Global Naija Tutors changed my son’s Maths grades! His tutor was patient, knowledgeable, and made complex topics simple. Highly recommend.",
    icon: <Award className="w-4 h-4 text-yellow-400" />,
  },
  {
    id: 2,
    name: "Mr. Obi",
    image: "/images/b.png",
    text: "Finding a tutor for my daughter in Igbo was seamless. The platform is user-friendly, and her grades have significantly improved. Fantastic service!",
    icon: <Award className="w-4 h-4 text-yellow-400" />,
  },
  {
    id: 3,
    name: "Grace E.",
    image: "/images/c.png",
    text: "The SAT prep I received was thorough. My tutor provided excellent strategies and boosted my confidence. I felt well prepared for the exam.",
    icon: <Award className="w-4 h-4 text-yellow-400" />,
  },
  {
    id: 4,
    name: "Chinedu P.",
    image: "/images/d.png",
    text: "Learning French online through this platform was a joy. My tutor was engaging and made every lesson fun and productive. Merci beaucoup!",
    icon: <Award className="w-4 h-4 text-yellow-400" />,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16 xl:px-[100px] flex flex-col gap-12">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-[#19191F]">
          Loved by Learners. Trusted by Parents.
        </h1>
        <p className="text-[#565D6D] text-[16px] md:text-[18px]">
          Hear directly from our community about how Global Naija Tutors is
          making a <br className="hidden md:block" />
          difference in education worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {testimonials.map((t, index) => (
          <div
            key={t.id}
            className="bg-white shadow-[0_0_1px_rgba(23,26,31,0.07),0_0_2px_rgba(23,26,31,0.12)] rounded-2xl p-6 flex flex-col gap-4 transition-all hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center gap-4">
              {" "}
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12  rounded-full object-cover "
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-brandBlack text-lg">
                  {t.name}
                </h3>

                <div className="flex justify-center gap-1 ">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{t.icon}</span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[#565D6D] text-sm md:text-base  text-center">
              {t.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
