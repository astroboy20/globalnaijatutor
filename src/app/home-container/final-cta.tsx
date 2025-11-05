import { ChevronRight } from "lucide-react"
import Link from "next/link"

const FinalCtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#F6FAEF] to-[#E8F5D8] py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 xl:px-[100px]">
      <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-[#19191F] leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          Ready to Learn Smarter, Not Harder?
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[20px] text-[#19191F] font-normal animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          Find your perfect tutor today and start learning with confidence.
        </p>
        <Link
          href={"/"}
          className="bg-brandGreen rounded-[24px] h-12 md:h-14 lg:h-12 w-full sm:w-auto inline-flex gap-3 md:gap-4 items-center justify-center px-6 md:px-10 lg:px-[40px] text-[#384B15] text-base md:text-lg lg:text-[18px] font-semibold transition-all  hover:scale-105 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300"
        >
          <span>Find My Tutor Now</span>
          <ChevronRight className="h-5 w-5 text-[#384B15] flex-shrink-0" />
        </Link>
      </div>
    </section>
  )
}

export default FinalCtaSection
