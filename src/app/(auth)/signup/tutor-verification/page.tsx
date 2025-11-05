import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function TutotVerification() {
  return (
    <main className="min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-md p-6 sm:p-8 border border-gray-300 rounded-lg shadow-md flex flex-col gap-6 sm:gap-7 text-center bg-white">
        <Image
          src="/images/verification.png"
          width={128}
          height={128}
          alt="verification image"
          className="mx-auto w-20 h-20 sm:w-28 sm:h-28"
        />

        <p className="text-lg sm:text-2xl font-bold text-brandBlack leading-snug sm:leading-tight">
          Please check your email inbox for a verification link to complete your
          registration.
        </p>

        <Button className="rounded-[20px] h-10 bg-brandGreen text-[#384B15] text-sm sm:text-base font-semibold">
          Resend Verification Email
        </Button>

        <Link
          href="/login?type=tutor"
          className="text-xs sm:text-sm text-[#565D6D] hover:underline"
        >
          Back to login
        </Link>
      </div>
    </main>
  );
}
