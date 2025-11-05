"use client";
import { cn } from "@/lib/utils";
import { ChevronRight, Lightbulb } from "lucide-react";
import React, { useState } from "react";
const promises = [
  {
    id: 1,
    title: "Expert Nigerian Tutors",
    description:
      "Learn from highly qualified and experienced tutors who bring passion, skill, and excellence to every lesson.",
  },
  {
    id: 2,
    title: "Flexible Scheduling",
    description:
      "Study at your own pace with lesson times that fit around your school, work, or family routine.",
  },
  {
    id: 3,
    title: "Interactive Learning Environment",
    description:
      "Enjoy engaging sessions with real-time interaction. Each lesson is recorded and available for 7 days so students can revisit and reinforce their learning.",
  },
  {
    id: 4,
    title: "Affordable and Transparent Pricing",
    description:
      "Access premium tutoring at fair rates with no hidden fees, just clear value for your investment.",
  },
  {
    id: 5,
    title: "Dedicated Student Support",
    description:
      "We monitor each learner’s progress through routine reviews and provide ongoing support to help them achieve their goals.",
  },
];

const PromiseSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleIsOpen = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFF9EB] py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-16 xl:px-[100px] flex flex-col gap-6 md:gap-9">
      <h1 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-[#19191F] text-center animate-in fade-in slide-in-from-top-4 duration-700">
        Why Families Trust Global Naija Tutors
      </h1>
      <div className="space-y-3 md:space-y-4 w-full max-w-[750px] mx-auto">
        {promises.map((promise, index) => (
          <div
            key={promise.id}
            className="bg-white rounded-[24px] px-4 md:px-6 py-3 md:py-4 space-y-3 md:space-y-4 transition-all  hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div
              className="flex justify-between items-center cursor-pointer group"
              onClick={() => handleIsOpen(promise.id)}
            >
              <Lightbulb className="text-brandGreen w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-base md:text-lg lg:text-[18px] text-brandBlack font-semibold">
                {promise.title}
              </h3>
              <ChevronRight
                className={cn(
                  "text-brandBlack w-4 h-4 md:w-5 md:h-5 transition-transform duration-300",
                  openIndex === promise.id && "rotate-90"
                )}
              />
            </div>

            {openIndex === promise.id && (
              <p className="text-sm md:text-base animate-in fade-in slide-in-from-top-2 duration-300">
                {promise.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromiseSection;

