import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="bg-[url(/images/hero-bg.png)] bg-cover bg-center min-h-[400px] md:min-h-[500px] lg:h-[592px] relative flex justify-center items-center px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-0">
      <div className="absolute inset-0 bg-[#F6FAEF99] z-10"></div>
      <div className="relative z-20 flex flex-col gap-6 md:gap-8 w-full max-w-6xl animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex flex-col gap-4 md:gap-5">
          <h1 className="text-[#19191F] text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-center leading-tight lg:leading-[100%] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Connecting Global Learners <br className="hidden sm:block" /> to Nigeria's Best Tutors
          </h1>
          <p className="text-base sm:text-lg md:text-[20px] text-[#19191F] font-normal text-center px-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Enrol now to enjoy high-quality, personalized, and affordable interactive learning
            <br className="hidden md:block" /> experiences with Nigeria's expert tutors.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-[90%] md:w-[70%] lg:w-[50%] mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
          <Input
            className="bg-white h-10 md:h-12 rounded-[24px] focus:ring-transparent border border-[#DEE1E6] w-full transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
            placeholder="Find a tutor by subject, name, or skill..."
          />
          <Button className="bg-brandGreen h-10 md:h-12 rounded-[24px] text-[#384B15] flex gap-2 md:gap-4 items-center w-full sm:w-auto px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Search className="w-4 h-4" /> Search
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
