"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, EyeOff } from "lucide-react";
import { useState, useMemo } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import * as ct from "countries-and-timezones";
import { countries } from "@/lib/data";
import { useTutorSignupMutation } from "@/app/provider/api/authApi";
import { toast } from "sonner";

// ✅ Validation Schema
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
});

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  timezone: "",
  password: "",
  confirmPassword: "",
};

const TutorForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [tutorSignupMutation] = useTutorSignupMutation();
  const handleSubmit = async (values): Promise<void> => {
    console.log(values);
    try {
      const res = await tutorSignupMutation(values).unwrap();
      console.log("Login successful:", res);
    } catch (error: any) {
      console.log("Login failed:", error);
      toast.error(error?.data?.message || "Login failed. Please try again.");
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
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        setFieldValue,
        handleSubmit
      }) => {
        // 🧭 Get filtered time zones using countries-and-timezones
        const filteredTimeZones = useMemo(() => {
          if (!values.location) return [];

          const countryObj = countries.find((c) => c.name === values.location);
          if (!countryObj) return [];

          const countryData = ct.getCountry(countryObj.code); // ISO2 code
          return countryData?.timezones ?? [];
        }, [values.location]);

        const handleLocationChange = (country: string) => {
          setFieldValue("location", country);
          setFieldValue("timezone", "");
        };

        return (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 2xl:max-w-2xl mx-auto w-full"
          >
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="text-[12px] text-brandBlack">
                Full Name
              </label>
              <Input
                id="fullName"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="John Doe"
                className="border border-[#DEE1E6] rounded-[20px] h-10"
              />
              {touched.fullName && errors.fullName && (
                <p className="text-red-500 text-xs">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[12px] text-brandBlack">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="john.doe@example.com"
                className="border border-[#DEE1E6] rounded-[20px] h-10"
              />
              {touched.email && errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-[12px] text-brandBlack">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="+234 901 234 5678"
                className="border border-[#DEE1E6] rounded-[20px] h-10"
              />
              {touched.phone && errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone}</p>
              )}
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="text-[12px] text-brandBlack">
                Location
              </label>
              <Select
                onValueChange={handleLocationChange}
                value={values.location}
              >
                <SelectTrigger className="w-full h-10 rounded-[20px] border border-[#DEE1E6]">
                  <SelectValue placeholder="Select your location" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.name}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {touched.location && errors.location && (
                <p className="text-red-500 text-xs">{errors.location}</p>
              )}
            </div>

            {/* Time Zone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="timezone" className="text-[12px] text-brandBlack">
                Time Zone
              </label>
              <Select
                disabled={!values.location}
                value={values.timezone}
                onValueChange={(value) => setFieldValue("timezone", value)}
              >
                <SelectTrigger className="w-full h-10 rounded-[20px] border border-[#DEE1E6]">
                  <SelectValue placeholder="Select your time zone" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {filteredTimeZones.map((zone) => (
                    <SelectItem key={zone} value={zone}>
                      {zone}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {touched.timezone && errors.timezone && (
                <p className="text-red-500 text-xs">{errors.timezone}</p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-[12px] text-brandBlack">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="••••••••"
                  className="pr-10 h-10 rounded-[20px] border-[#DEE1E6]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {touched.password && errors.password && (
                <p className="text-red-500 text-xs">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="confirmPassword"
                className="text-[12px] text-brandBlack"
              >
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="••••••••"
                  className="pr-10 h-10 rounded-[20px] border-[#DEE1E6]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((p) => !p)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit */}
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

export default TutorForm;
