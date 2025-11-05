"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RangeSlider from "../component/range-slider";
import Link from "next/link";
import { Star, StarsIcon } from "lucide-react";

export const tutors = [
  {
    id: 1,
    name: "Mr. Emeka Ndubuisi",
    subjects: ["Mathematics", "Physics"],
    rating: 5.0,
    reviews: 120,
    image: "/images/tutor1.png",
    description:
      "Experienced STEM tutor with over 8 years of teaching advanced Mathematics and Physics to high school and college students.",
  },
  {
    id: 2,
    name: "Dr. Amina Yusuf",
    subjects: ["Biology", "Chemistry"],
    rating: 4.0,
    reviews: 88,
    image: "/images/tutor2.png",
    description:
      "Passionate science educator helping students connect theory to real-world applications in Biology and Chemistry.",
  },
  {
    id: 3,
    name: "Mr. Tayo Olaniyan",
    subjects: ["English Language", "Literature"],
    rating: 5.0,
    reviews: 145,
    image: "/images/tutor3.png",
    description:
      "Specialist in English grammar and essay writing with a focus on improving communication and comprehension skills.",
  },
  {
    id: 4,
    name: "Mrs. Chioma Okoro",
    subjects: ["French", "Spanish"],
    rating: 5.0,
    reviews: 96,
    image: "/images/tutor4.png",
    description:
      "Multilingual language coach with a fun and interactive approach to teaching French and Spanish.",
  },
  {
    id: 5,
    name: "Mr. Samuel Adeyemi",
    subjects: ["Computer Science", "Data Analysis"],
    rating: 4.8,
    reviews: 112,
    image: "/images/tutor1.png",
    description:
      "Tech-savvy tutor guiding students through programming, algorithms, and data visualization using modern tools.",
  },
  {
    id: 6,
    name: "Ms. Fatima Bello",
    subjects: ["Economics", "Business Studies"],
    rating: 4.7,
    reviews: 104,
    image: "/images/tutor2.png",
    description:
      "Enthusiastic business mentor simplifying complex economic concepts for practical understanding and success.",
  },
  {
    id: 7,
    name: "Mr. James Okafor",
    subjects: ["Government", "Civic Education"],
    rating: 4.5,
    reviews: 73,
    image: "/images/tutor3.png",
    description:
      "Civic-minded educator passionate about helping students understand governance and global citizenship.",
  },
  {
    id: 8,
    name: "Mrs. Ruth Eze",
    subjects: ["Accounting", "Commerce"],
    rating: 4.9,
    reviews: 129,
    image: "/images/tutor4.png",
    description:
      "Detail-oriented accounting tutor with 10+ years of experience preparing students for WAEC and professional exams.",
  },
  {
    id: 9,
    name: "Mr. Ibrahim Musa",
    subjects: ["Geography", "Environmental Science"],
    rating: 4.6,
    reviews: 84,
    image: "/images/tutor1.png",
    description:
      "Geography expert who makes learning about our planet and its ecosystems both engaging and meaningful.",
  },
  {
    id: 10,
    name: "Miss Linda Okeke",
    subjects: ["Fine Arts", "Design"],
    rating: 5.0,
    reviews: 91,
    image: "/images/tutor2.png",
    description:
      "Creative art instructor inspiring students to explore visual storytelling and design techniques.",
  },
  {
    id: 11,
    name: "Mr. Chinedu Umeh",
    subjects: ["Further Mathematics", "Statistics"],
    rating: 4.9,
    reviews: 134,
    image: "/images/tutor3.png",
    description:
      "Analytical and patient tutor skilled in simplifying complex mathematical and statistical problems.",
  },
  {
    id: 12,
    name: "Ms. Grace Adebanjo",
    subjects: ["Music Theory", "Piano"],
    rating: 4.8,
    reviews: 65,
    image: "/images/tutor4.png",
    description:
      "Classically trained pianist helping students master the art of music theory and performance.",
  },
  {
    id: 13,
    name: "Mr. Hassan Sule",
    subjects: ["History", "Social Studies"],
    rating: 4.5,
    reviews: 58,
    image: "/images/tutor1.png",
    description:
      "Dynamic history educator with a storytelling approach that brings the past to life for his students.",
  },
  {
    id: 14,
    name: "Mrs. Kemi Ogunleye",
    subjects: ["Home Economics", "Food & Nutrition"],
    rating: 4.7,
    reviews: 77,
    image: "/images/tutor2.png",
    description:
      "Practical and engaging tutor teaching culinary skills and healthy living through Home Economics.",
  },
  {
    id: 15,
    name: "Dr. Anthony Okoro",
    subjects: ["Biochemistry", "Microbiology"],
    rating: 5.0,
    reviews: 101,
    image: "/images/tutor3.png",
    description:
      "University lecturer with a deep passion for molecular sciences and mentoring future medical professionals.",
  },
  {
    id: 16,
    name: "Ms. Juliet Nwosu",
    subjects: ["Creative Writing", "Communication Skills"],
    rating: 4.9,
    reviews: 89,
    image: "/images/tutor4.png",
    description:
      "Experienced writer helping students build confidence and creativity through structured writing lessons.",
  },
];

const Tutors = () => {
  const [value, setValue] = useState(50);

  return (
    <section className="py-12 md:py-16 lg:py-[96px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-[100px] flex flex-col gap-12">
    {/* Header */}
    <div className="flex flex-col gap-4 text-center">
      <h1 className="text-[#19191F] text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight">
        Find Your Perfect Tutor
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#565D6D]">
        Connect with highly qualified Nigerian tutors tailored to your
        learning needs and goals. <br className="hidden md:block" /> Explore
        our featured tutors or use our advanced filters to find your ideal
        match.
      </p>
    </div>

    {/* Filter Section */}
    <div className="flex flex-col gap-6 border rounded-3xl p-6 sm:p-8 shadow-md">
      <h3 className="text-[#19191F] text-xl sm:text-2xl font-bold">
        Refine your search
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Subject */}
        <div className="flex flex-col gap-3">
          <label htmlFor="Subject" className="text-sm text-brandBlack">
            Subject
          </label>
          <Select>
            <SelectTrigger
              id="Subject"
              className="w-full h-10 rounded-[20px]"
            >
              <SelectValue placeholder="All Subjects" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="math">Math</SelectItem>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="science">Science</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Level */}
        <div className="flex flex-col gap-3">
          <label htmlFor="Level" className="text-sm text-brandBlack">
            Level
          </label>
          <Select>
            <SelectTrigger
              id="Level"
              className="w-full h-10 rounded-[20px]"
            >
              <SelectValue placeholder="All Levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="primary">Primary</SelectItem>
              <SelectItem value="secondary">Secondary</SelectItem>
              <SelectItem value="tertiary">Tertiary</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Language */}
        <div className="flex flex-col gap-3">
          <label htmlFor="language" className="text-sm text-brandBlack">
            Tutor Language
          </label>
          <Select>
            <SelectTrigger
              id="language"
              className="w-full h-10 rounded-[20px]"
            >
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="yoruba">Yoruba</SelectItem>
              <SelectItem value="hausa">Hausa</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Range Slider */}
        <div className="flex flex-col justify-end">
          <RangeSlider />
        </div>
      </div>
    </div>

    {/* Featured Tutors */}
    <div className="flex flex-col gap-6">
      <h3 className="text-[#19191F] text-xl sm:text-2xl font-bold">
        Featured Tutors
      </h3>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-6 md:gap-8 w-max">
          {tutors.map((tutor, index) => (
            <div
              key={tutor.id}
              className="bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 flex-shrink-0 w-[270px] sm:w-[300px] md:w-[320px]"
            >
              <div className="p-4 space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div className="flex gap-2 items-center text-sm text-[#565D6D] bg-[#FAFAFB] h-9 rounded-[14px] px-3">
                    <Star className="text-[#9FCC4A] w-4 h-4" />
                    <p>
                      {tutor.rating.toFixed(1)} ({tutor.reviews})
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-[#19191F]">
                    {tutor.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {tutor.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="bg-[#FFCD50] rounded-[15px] py-1 px-3 text-sm"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                  <p className="text-[#565D6D] text-sm mt-4">
                    {tutor.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* All Tutors */}
    <div className="flex flex-col gap-6">
      <h3 className="text-[#19191F] text-xl sm:text-2xl font-bold">
        All Tutors
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tutors.map((tutor, index) => (
          <div
            key={tutor.id}
            className="bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 w-full"
          >
            <div className="p-4 space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div className="flex gap-2 items-center text-sm text-[#565D6D] bg-[#FAFAFB] h-9 rounded-[14px] px-3">
                  <Star className="text-[#9FCC4A] w-4 h-4" />
                  <p>
                    {tutor.rating.toFixed(1)} ({tutor.reviews} reviews)
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#19191F]">
                  {tutor.name}
                </h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {tutor.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="bg-[#FFCD50] rounded-[15px] py-1 px-3 text-sm"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
                <p className="text-[#565D6D] text-sm mt-4">
                  {tutor.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Tutors;
