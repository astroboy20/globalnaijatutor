import Link from "next/link";
import { Award, Users } from "lucide-react";
import React from "react";

const tutors = [
  {
    id: 1,
    name: "Mr. Emeka Ndubuisi",
    subject: "Mathematics & Physics",
    rating: 5.0,
    image: "/images/tutor1.png",
  },
  {
    id: 2,
    name: "Dr. Amina Yusuf",
    subject: "Biology & Chemistry",
    rating: 4.0,
    image: "/images/tutor2.png",
  },
  {
    id: 3,
    name: "Mr. Tayo Olaniyan",
    subject: "English Language",
    rating: 5.0,
    image: "/images/tutor3.png",
  },
  {
    id: 4,
    name: "Mrs. Chioma Okoro",
    subject: "French Language",
    rating: 5.0,
    image: "/images/tutor4.png",
  },
];

const TutorSection = () => {
  return (
    <section className="bg-[#FAFAFB] py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16 xl:px-[100px] flex flex-col gap-12">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-[#19191F]">
          Meet the Educators Behind the Excellence
        </h1>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-6 md:gap-8 w-max">
          {tutors.map((tutor, index) => (
            <div
              key={tutor.id}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_0_1px_rgba(23,26,31,0.07),0_0_2px_rgba(23,26,31,0.12)] transition-all hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-700 flex-shrink-0"
              style={{
                animationDelay: `${index * 150}ms`,
                width: "330px",
              }}
            >
              <div className="p-4 space-y-5">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-full h-52 object-cover rounded-[16px]"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-lg text-[#19191F]">
                    {tutor.name}
                  </h3>
                  <p className="text-brandGreen text-sm font-medium">
                    {tutor.subject}
                  </p>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Award
                        key={i}
                        className={`w-4 h-4 ${
                          i < tutor.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-[#565D6D] ml-1">
                      ({tutor.rating.toFixed(1)})
                    </span>
                  </div>

                  <Link
                    href="/"
                    className="mt-3 text-center bg-brandGreen text-black h-10 py-2 px-4 rounded-full font-medium text-sm transition-colors hover:bg-[#4da82a] flex justify-center items-center"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link
        href="/tutors"
        className="mx-auto border border-brandGreen text-brandGreen px-6 py-3 rounded-full font-medium hover:bg-brandGreen hover:text-white transition-colors flex justify-center items-center gap-2"
      >
        View All Tutors <Users />
      </Link>
    </section>
  );
};

export default TutorSection;
