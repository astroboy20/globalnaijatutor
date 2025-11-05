import { BadgeDollarSign, ChevronRight } from "lucide-react"
import Link from "next/link"

const ConsultationSection = () => {
  return (
    <section className="bg-[#F6FAEF] py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-16 xl:px-[100px] flex flex-col gap-6 md:gap-9 text-center">
      <BadgeDollarSign className="h-12 w-12 md:h-16 md:w-16 mx-auto animate-in fade-in zoom-in-50 duration-700" />
      <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-bold text-[#19191F] px-2">
          Start Your Learning Journey with a Free 30-Minute Consultation!
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-[18px] font-normal text-[#19191F] leading-relaxed px-2">
          Discover the perfect tutor for your needs. We offer every student and parent a complimentary 30-minute
          introductory session with each tutor. This is a unique opportunity to discuss your learning goals, experience
          their teaching style, and ensure a perfect match. Please note: Each client is entitled to only one free
          consultation per tutor.
          <br className="hidden md:block" />
          Book your session through the tutor's calendar on their profile page.
        </p>
      </div>
      <Link
        href={"/"}
        className="bg-brandGreen rounded-[24px] h-12 md:h-14 lg:h-10 w-full sm:w-auto flex gap-3 md:gap-6 items-center justify-center px-6 md:px-8 lg:px-[32px] text-[#384B15] text-base md:text-lg lg:text-[18px] mx-auto transition-all  hover:scale-105 hover:shadow-xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300"
      >
        <span className="text-center">Find Your Tutor for a Free Consultation</span>
        <ChevronRight className="h-5 w-5 text-[#384B15] flex-shrink-0" />
      </Link>
    </section>
  )
}

export default ConsultationSection
