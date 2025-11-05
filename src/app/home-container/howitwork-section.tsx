import { Book, ClipboardList, MessageSquareText, Search } from "lucide-react";

const texts = [
  {
    id: 1,
    title: "Find Your Tutor",
    text: "Explore a diverse range of qualified Nigerian tutors by subject, availability, and reviews.",
    icon: <Search className="w-8 h-8 md:w-10 md:h-10 text-brandGreen" />,
  },
  {
    id: 4,
    title: " Book a 30mins free consultation",
    text: "Schedule your free 30-minute session to discuss your goals, learning needs, and how we can help you succeed.",
    icon: <Book className="w-8 h-8 md:w-10 md:h-10 text-brandGreen" />,
  },
  {
    id: 2,
    title: "Book a Lesson",
    text: "Schedule your free 30-minute session to discuss your goals, learning needs, and how we can help you succeed.",
    icon: <ClipboardList className="w-8 h-8 md:w-10 md:h-10 text-brandGreen" />,
  },
  {
    id: 3,
    title: "Start Learning",
    text: "Connect with your tutor in our interactive virtual classroom and achieve your learning goals.",
    icon: (
      <MessageSquareText className="w-8 h-8 md:w-10 md:h-10 text-brandGreen" />
    ),
  },
];

const HowitWorkSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-16 xl:px-[100px] flex flex-col gap-8 md:gap-12">
      <h1 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-brandBlack text-center animate-in fade-in slide-in-from-top-4 duration-700">
      Learn in Four Simple Steps
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
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

export default HowitWorkSection;
