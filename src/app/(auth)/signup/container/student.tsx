"use client";

import { useClassLevelsQuery, useCuriculumsQuery } from "@/app/provider/api/dataApi";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { countries } from "@/lib/data";
import { Formik } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { useMemo, useState } from "react";
import * as Yup from "yup";
import * as ct from "countries-and-timezones";
import { useStudentSignupMutation } from "@/app/provider/api/authApi";
import { toast } from "sonner";

interface StudentFormValues {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  timezone: string;
  password: string;
  confirmPassword: string;
  curriculum: string;
  classLevel: string;
  exams: string[];
  lessonGoal: string;
  learningNeeds: string;
  subjectsOfInterest: string[];
}

const initialValues: StudentFormValues = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  timezone: "",
  password: "",
  confirmPassword: "",
  curriculum: "",
  classLevel: "",
  exams: [],
  lessonGoal: "",
  learningNeeds: "",
  subjectsOfInterest: [],
};

// Validation Schema
const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  location: Yup.string().required("Location is required"),
  timezone: Yup.string().required("Timezone is required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
  curriculum: Yup.string().required("Curriculum is required"),
  classLevel: Yup.string().required("Class level is required"),
  exams: Yup.array().of(Yup.string()).min(1, "Select at least one exam"),
  lessonGoal: Yup.string().required("Lesson goal is required"),
  learningNeeds: Yup.string().required("Learning needs are required"),
  subjectsOfInterest: Yup.array()
    .of(Yup.string())
    .min(1, "Select at least one subject"),
});

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

  const { data: classLevels } = useClassLevelsQuery();
  const { data: curriculums } = useCuriculumsQuery();

  const [studentSignupMutation] = useStudentSignupMutation();

  const handleSubmit = async (values: StudentFormValues) => {
    try {
      const res = await studentSignupMutation(values).unwrap();
      console.log("Signup successful:", res);
      toast.success("Signup successful!");
    } catch (error: any) {
      console.log("Signup failed:", error);
      toast.error(error?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange
      validateOnBlur
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, setFieldValue, handleSubmit }) => {
        // Filtered timezones
        const filteredTimeZones = useMemo(() => {
          if (!values.location) return [];

          const countryObj = countries.find(c => c.name === values.location);
          if (!countryObj) return [];

          const countryData = ct.getCountry(countryObj.code);
          const zones = countryData?.timezones ?? [];

          if (zones.length === 1) {
            setFieldValue("timezone", zones[0]);
          }

          return zones;
        }, [values.location, setFieldValue]);

        return (
          <form onSubmit={handleSubmit} className="space-y-5 2xl:max-w-2xl mx-auto w-full">
            {/* Full Name */}
            <div className="flex flex-col gap-3">
              <label htmlFor="fullName" className="text-[12px] text-brandBlack">
                Full Name
              </label>
              <Input
                type="text"
                id="fullName"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-[#DEE1E6] rounded-[20px] h-10"
                placeholder="John Doe"
              />
              {errors.fullName && touched.fullName && (
                <p className="text-red-500 text-xs">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-[12px] text-brandBlack">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-[#DEE1E6] rounded-[20px] h-10"
                placeholder="john.doe@example.com"
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-3">
              <label htmlFor="phone" className="text-[12px] text-brandBlack">
                Phone Number
              </label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-[#DEE1E6] rounded-[20px] h-10"
                placeholder="+234 901 234 5678"
              />
              {errors.phone && touched.phone && (
                <p className="text-red-500 text-xs">{errors.phone}</p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-3">
              <label htmlFor="password" className="text-[12px] text-brandBlack">
                Password
              </label>
              <div className="relative w-full">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="pr-12 h-10 rounded-[20px] border-[#DEE1E6]"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && touched.password && (
                <p className="text-red-500 text-xs">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-3">
              <label htmlFor="confirmPassword" className="text-[12px] text-brandBlack">
                Confirm Password
              </label>
              <div className="relative w-full">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border border-[#DEE1E6] rounded-[20px] h-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(prev => !prev)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
              )}
            </div>

            <hr />

            {/* Curriculum */}
            <div className="flex flex-col gap-3">
              <label htmlFor="curriculum" className="text-[12px] text-brandBlack">
                Curriculum
              </label>
              <Select
                value={values.curriculum}
                onValueChange={(value) => setFieldValue("curriculum", value)}
              >
                <SelectTrigger id="curriculum" className="w-full !h-10 !rounded-[20px]">
                  <SelectValue placeholder="Select a curriculum" />
                </SelectTrigger>
                <SelectContent>
                  {curriculums?.map((c: any) => (
                    <SelectItem key={c.id} value={c.name}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.curriculum && touched.curriculum && (
                <p className="text-red-500 text-xs">{errors.curriculum}</p>
              )}
            </div>

            {/* Class Level */}
            <div className="flex flex-col gap-3">
              <label htmlFor="classLevel" className="text-[12px] text-brandBlack">
                Class Level
              </label>
              <Select
                value={values.classLevel}
                onValueChange={(value) => setFieldValue("classLevel", value)}
              >
                <SelectTrigger id="classLevel" className="w-full !h-10 !rounded-[20px]">
                  <SelectValue placeholder="Select a class level" />
                </SelectTrigger>
                <SelectContent>
                  {classLevels?.map((cl: any) => (
                    <SelectItem key={cl.id} value={cl.name}>
                      {cl.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.classLevel && touched.classLevel && (
                <p className="text-red-500 text-xs">{errors.classLevel}</p>
              )}
            </div>

            {/* Subjects */}
            <div className="flex flex-col gap-3">
              <label className="text-[12px] text-brandBlack">Subjects of Interest</label>
              <div className="grid grid-cols-3 gap-4">
                {subjects.map((subject) => (
                  <div key={subject.id} className="flex items-center gap-2">
                    <Checkbox
                      id={`subjects-${subject.id}`}
                      checked={values.subjectsOfInterest.includes(subject.value)}
                      onCheckedChange={(checked) =>
                        setFieldValue(
                          "subjectsOfInterest",
                          checked
                            ? [...values.subjectsOfInterest, subject.value]
                            : values.subjectsOfInterest.filter((v) => v !== subject.value)
                        )
                      }
                      className="!text-brandGreen"
                    />
                    <label htmlFor={`subjects-${subject.id}`} className="text-sm font-normal text-brandBlack">
                      {subject.label}
                    </label>
                  </div>
                ))}
              </div>
              {errors.subjectsOfInterest && touched.subjectsOfInterest && (
                <p className="text-red-500 text-xs">{errors.subjectsOfInterest}</p>
              )}
            </div>

            {/* Learning Needs */}
            <div className="flex flex-col gap-3">
              <label htmlFor="learningNeeds" className="text-[12px] text-brandBlack">
                Describe your learning needs
              </label>
              <Textarea
                id="learningNeeds"
                name="learningNeeds"
                value={values.learningNeeds}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-[#DEE1E6] rounded-[20px] h-24"
                placeholder="e.g., Struggling with fractions"
              />
              {errors.learningNeeds && touched.learningNeeds && (
                <p className="text-red-500 text-xs">{errors.learningNeeds}</p>
              )}
            </div>

            {/* Lesson Goal */}
            <div className="flex flex-col gap-3">
              <label htmlFor="lessonGoal" className="text-[12px] text-brandBlack">
                What's your goal for this lesson?
              </label>
              <Input
                id="lessonGoal"
                name="lessonGoal"
                type="text"
                value={values.lessonGoal}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-[#DEE1E6] rounded-[20px] h-10"
                placeholder="e.g., Improve grades in Maths"
              />
              {errors.lessonGoal && touched.lessonGoal && (
                <p className="text-red-500 text-xs">{errors.lessonGoal}</p>
              )}
            </div>

            <Button
              type="submit"
              className="h-10 rounded-[20px] w-full bg-brandGreen text-sm text-[#384B15]"
            >
              Register
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default StudentForm;
