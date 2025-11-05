import { Atom, BookA, BookCheck, GraduationCap, Languages } from "lucide-react";

const texts = [
  {
    id: 1,
    title: "Mathematics",
    icon: <BookA className="w-8 h-8 md:w-10 md:h-10 text-brandGreen" />,
  },
  {
    id: 2,
    title: "English Language",
    icon: <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-brandGreen" />,
  },
  {
    id: 3,
    title: "Sciences",
    icon: <Atom className="w-8 h-8 md:w-10 md:h-10 text-brandGreen" />,
  },
  {
    id: 4,
    title: "Languages",
    icon: <Languages className="w-8 h-8 md:w-10 md:h-10 text-brandGreen" />,
  },
  {
    id: 5,
    title: "Exam Prep",
    icon: <BookCheck className="w-8 h-8 md:w-10 md:h-10 text-brandGreen" />,
  },
];

const ExploreSection = () => {
  return (
    <section className="bg-[#FAFAFB] py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-16 xl:px-[100px] flex flex-col gap-8 md:gap-12">
      <h1 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-brandBlack text-center animate-in fade-in slide-in-from-top-4 duration-700">
        Explore Our Subjects
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-12">
        {texts.map((text, index) => (
          <div
            key={text.id}
            className="border border-white shadow-[0_0_1px_rgba(23,26,31,0.07),0_0_2px_rgba(23,26,31,0.12)] p-4 md:p-6 rounded-[24px] flex flex-col gap-4 md:gap-5 transition-all  hover:shadow-xl hover:scale-105 hover:-translate-y-2 animate-in fade-in zoom-in-50 duration-700"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="mx-auto transition-transform duration-300 hover:scale-110 hover:rotate-12">
              {text.icon}
            </div>
            <div className="flex flex-col gap-[6px] text-center">
              <h3 className="text-brandBlack text-base md:text-lg lg:text-[20px] font-semibold">
                {text.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreSection;
