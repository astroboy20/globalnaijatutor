import { Award, BookOpenCheck, FileText, MicVocal, ShieldCheck } from "lucide-react";
import React from "react";

const texts = [
    {
      id: 1,
      title: "Comprehensive Screening",
      text: "Each tutor undergoes a thorough review of their qualifications, experience, and teaching philosophy to ensure alignment with our standards.",
      icon: <FileText className="w-8 h-8 md:w-10 md:h-10 text-brandGreen" />,
    },
    {
      id: 2,
      title: "Subject Knowledge Tests",
      text: "We administer specialized subject matter tests to confirm deep expertise and mastery in every area they teach.",
      icon: <BookOpenCheck className="w-8 h-8 md:w-10 md:h-10 text-brandGreen" />,
    },
    {
      id: 3,
      title: "Teaching Demo & Interview",
      text: "Prospective tutors deliver live teaching demonstrations and participate in behavioral interviews to assess their pedagogical skills and communication style.",
      icon: (
        <MicVocal className="w-8 h-8 md:w-10 md:h-10 text-brandGreen" />
      ),
    },
    {
      id: 4,
      title: "Background Verification",
      text: "Comprehensive background checks are conducted to guarantee the safety and trustworthiness of our educators.",
      icon: (
        <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-brandGreen" />
      ),
    },
    {
      id: 5,
      title: "Ongoing Training & Support",
      text: "Our tutors benefit from continuous professional development, workshops, and a supportive community to enhance their teaching effectiveness.",
      icon: (
        <Award className="w-8 h-8 md:w-10 md:h-10 text-brandGreen" />
      ),
    },
  ];
const AboutTutor = () => {
  return (
    <section className="bg-[#FAFAFB] py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-16 xl:px-[100px] flex flex-col gap-12 md:gap-9">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-[#19191F] text-center animate-in fade-in slide-in-from-top-4 duration-700">
          Our Tutors: Carefully Selected, Exceptionally Skilled
        </h1>
        <p className="text-center text-[#565D6D] text-[18px]">
          At Global Naija Tutors, we take pride in connecting learners with only
          the best educators. <br /> Every tutor goes through a rigorous,
          multi-step selection process to ensure quality, passion, <br /> and
          professionalism.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
        {texts.map((text, index) => (
          <div
            key={text.id}
            className="border border-white shadow-[0_0_1px_rgba(23,26,31,0.07),0_0_2px_rgba(23,26,31,0.12)] p-6 rounded-[24px] flex flex-col gap-5 transition-all  hover:shadow-xl hover:scale-105 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700"
            style={{
              animationDelay: `${index * 150}ms`,
            }}
          >
            <div className="mx-auto transition-transform duration-300 hover:scale-110 hover:rotate-6">
              {text.icon}
            </div>
            <div className="flex flex-col gap-[6px] text-center">
              <h3 className="text-brandBlack text-xl md:text-2xl lg:text-[24px] font-semibold">
                {text.title}
              </h3>
              <p className="text-[#565D6D] text-sm md:text-base font-normal">
                {text.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTutor;
