"use client";
import {
  useClassLevelsQuery,
  useCuriculumsQuery,
} from "@/app/provider/api/dataApi";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const subjects = [
  { id: 1, label: "Maths", value: "maths", selected: true },
  { id: 2, label: "French", value: "french", selected: false },
  { id: 3, label: "English", value: "english", selected: false },
  { id: 4, label: "History", value: "history", selected: false },
  { id: 5, label: "Science", value: "science", selected: false },
  { id: 6, label: "Art", value: "art", selected: false },
];

const StudentForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { data: classLevels, isLoading: isClassLoading } =
    useClassLevelsQuery();
  const { data: curiculums, isLoading: isCuriculumLoading } =
    useCuriculumsQuery();

  console.log("classLevels", classLevels);
  console.log("curiculums", curiculums);
  return (
    <form className="space-y-5 2xl:max-w-2xl mx-auto w-full">
      <div className="flex flex-col gap-3">
        <label htmlFor="fullName" className="text-[12px] text-brandBlack">
          Full Name
        </label>
        <Input
          type="text"
          id="fullName"
          className=" border border-[#DEE1E6] rounded-[20px] h-10"
          placeholder="John Doe"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="email" className="text-[12px] text-brandBlack">
          Email{" "}
        </label>
        <Input
          id="email"
          type="email"
          className=" border border-[#DEE1E6] rounded-[20px] h-10"
          placeholder="john.doe@example.com"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="phone" className="text-[12px] text-brandBlack">
          Phone Number{" "}
        </label>
        <Input
          id="phone"
          type="tel"
          className=" border border-[#DEE1E6] rounded-[20px] h-10"
          placeholder="+234 901 234 5678"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="password" className="text-[12px] text-brandBlack">
          Password
        </label>
        <div className="relative w-full">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            className="pr-12 h-10 rounded-[20px] border-[#DEE1E6]"
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label
          htmlFor="confirmPassword"
          className="text-[12px] text-brandBlack"
        >
          Confirm Password
        </label>
        <div className="relative w-full">
          <Input
            id="confirmPassword"
            type={showConfirm ? "text" : "password"}
            className="border border-[#DEE1E6] rounded-[20px] h-10"
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowConfirm((prev) => !prev)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <hr />

      <div className="flex flex-col gap-3">
        <label htmlFor="curriculum" className="text-[12px] text-brandBlack">
          Curriculum
        </label>
        <Select>
          <SelectTrigger
            id="curriculum"
            className="w-full !h-10 !rounded-[20px]"
          >
            <SelectValue placeholder="Select a curriculum" />
          </SelectTrigger>

          <SelectContent>
            {curiculums &&
              curiculums?.map((curiculum: any) => (
                <SelectItem id={curiculum?.id} value={curiculum.name}>
                  {curiculum?.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="classLevel" className="text-[12px] text-brandBlack">
          Class Level
        </label>
        <Select>
          <SelectTrigger
            id="calssLevel"
            className="w-full !h-10 !rounded-[20px]"
          >
            <SelectValue placeholder="Select a curriculum" />
          </SelectTrigger>
          <SelectContent>
            {classLevels &&
              classLevels?.map((classlevel: any) => (
                <SelectItem id={classlevel?.id} value={classlevel.name}>
                  {classlevel?.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="classLevel" className="text-[12px] text-brandBlack">
          Subject of intrests
        </label>

        <div className="grid grid-cols-3 gap-4">
          {subjects.map((subject) => (
            <div className="flex items-center gap-2" key={subject.id}>
              <Checkbox
                value={subject.value}
                id="subjects"
                className="!text-brandGreen"
              />
              <label
                htmlFor="subjects"
                className="text-sm font-normal text-brandBlack"
              >
                {" "}
                {subject.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="lessonNeeds" className="text-[12px] text-brandBlack">
          Describe your learning needs
        </label>
        <Textarea
          id="lessonNeeds"
          className=" border border-[#DEE1E6] rounded-[20px] h-10"
          placeholder="e.g., Struggling with fractions"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="lesson" className="text-[12px] text-brandBlack">
          What's your goal for this lesson?
        </label>
        <Input
          id="lesson"
          type="text"
          className=" border border-[#DEE1E6] rounded-[20px] h-10"
          placeholder="e.g., Improve grades in Maths"
        />
      </div>

      <Button className="h-10 rounded-[20px] w-full bg-brandGreen text-sm text-[#384B15]">
        Register
      </Button>
    </form>
  );
};

export default StudentForm;
