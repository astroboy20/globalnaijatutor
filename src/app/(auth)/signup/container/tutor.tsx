"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const TutorForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <form className="space-y-3">
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
      <Button className="h-10 rounded-[20px] w-full bg-brandGreen text-sm text-[#384B15]">
        Register
      </Button>
    </form>
  );
};

export default TutorForm;
