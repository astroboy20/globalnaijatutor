"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "../../componnets/tabs";
import StudentForm from "./student";
import TutorForm from "./tutor";
import Image from "next/image";

interface SignUpProps {
  account_type: string | null;
}

const SignUpContainer = ({ account_type }: SignUpProps) => {
  const router = useRouter();
  const currentType = account_type || "student";

  const handleTabChange = (value: string) => {
    router.push(`/signup?type=${value}`);
  };

  const imageUrl =
    currentType === "tutor"
      ? "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop"
      : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-start min-h-screen overflow-x-hidden bg-white">
      <div className="w-full lg:w-full lg:col-span-6 2xl:w-full flex flex-col justify-center overflow-y-auto no-scrollbar ">
        <div className="flex flex-col gap-6 w-full lg:px-20 p-10">
          <Link href={"/"} className="flex items-center mb-10">
            <Image
              src="/images/logo.jpg"
              width={40}
              height={40}
              alt="brand-logo"
              className="rounded-full md:w-[50px] md:h-[50px]"
            />
          </Link>
          <div className="text-center space-y-2">
            <h1 className="text-[28px] lg:text-[30px] font-bold text-brandBlack">
              Welcome to Global Naija Tutors
            </h1>
            <p className="text-sm text-[#565D6D] font-normal">
              {currentType === "tutor"
                ? " Join Global Naija Tutors and connect with eager learners worldwide!"
                : ` Join our community of global learners and educators. Parent /
              Student`}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p>I am a:</p>
            <Tabs
              value={currentType}
              onValueChange={handleTabChange}
              className="w-full mx-auto"
            >
              <TabsList className="grid w-full grid-cols-2 gap-4 items-center 2xl:max-w-2xl mx-auto ">
                <TabsTrigger value="student">Parent / Student</TabsTrigger>
                <TabsTrigger value="tutor">Tutor</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="text-sm text-center my-10 font-normal text-[#565D6D]">
            Already have an account?{" "}
            <Link href={`/login`} className="text-brandGreen hover:underline">
              Login
            </Link>
          </div>

          {currentType === "student" ? <StudentForm /> : <TutorForm />}
        </div>
      </div>

      <div className="hidden lg:block fixed right-0 top-0 w-1/2 h-screen">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt="Signup Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignUpContainer;
