"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { ChevronRight, Menu, Search, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { RefObject } from "react";

export const links = [
  { id: 1, key: "home", label: "Home" },
  { id: 2, key: "subjects", label: "Subjects" },
  { id: 3, key: "how-it-works", label: "How It Works" },
  { id: 4, key: "free-consultation", label: "Free Consultation" },
  { id: 5, key: "reviews", label: "Reviews" },
  { id: 6, key: "tutors", label: "Tutors" },
  { id: 7, key: "blog", label: "Blog" },
];

interface HeaderProps {
  sectionRefs?: Record<string, React.RefObject<HTMLDivElement | null>>;
  activeSection?: string;
}

const Header = ({ sectionRefs, activeSection }: HeaderProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (key: string) => {
    if (key === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (sectionRefs && sectionRefs[key]?.current) {
      sectionRefs[key].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#FFFFFF] flex items-center justify-between px-4 md:px-6 py-4 shadow-[0_0_1px_rgba(23,26,31,0.07),0_0_2px_rgba(23,26,31,0.12)]">
      <Link href={"/"} className="flex items-center">
        <Image
          src="/images/logo.jpg"
          width={40}
          height={40}
          alt="brand-logo"
          className="rounded-full md:w-[50px] md:h-[50px]"
        />
      </Link>

      <div className="hidden lg:flex items-center gap-3 xl:gap-5">
        {links.map((link) => {
          const isActive = activeSection === link.key;
          return pathname === "/" ? (
            <button
              key={link.id}
              onClick={() => handleScroll(link.key)}
              className={`text-sm transition-all duration-300 hover:scale-105 cursor-pointer ${
                isActive
                  ? "text-brandGreen font-semibold"
                  : "text-brandBlack hover:text-brandGreen"
              }`}
            >
              {link.label}
            </button>
          ) : null;
        })}
        <div className="relative hidden xl:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brandBlack w-3 h-3" />
          <Input
            className="w-[200px] xl:w-[255px] h-[35px] rounded-[16px] border border-[#DEE1E6] pl-9 transition-all duration-300 focus:w-[280px]"
            placeholder="Search for subjects or tutors"
          />
        </div>
        <div className="relative flex items-center gap-3">
          {/* Login Dropdown */}
          <div className="group relative">
            <Button
              variant="outline"
              onClick={() => router.push("/login")}
              className="h-10 rounded-[16px] px-3 text-brandBlack text-sm hover:border-brandGreen cursor-pointer"
            >
              Login
            </Button>
          </div>

          <div className="relative group">
            <Button className="h-10 rounded-[16px] px-3 bg-brandGreen text-[#384B15] text-sm hover:shadow-md flex items-center gap-1">
              Sign Up
              <span className="bg-white w-5 h-5 rounded-full flex justify-center items-center">
                <ChevronRight className="w-3 h-3" />
              </span>
            </Button>

            {/* Dropdown */}
            <div className="absolute right-0 mt-1 bg-white shadow-md rounded-lg border border-[#DEE1E6] w-40 py-2 z-50 hidden group-hover:block pointer-events-auto">
              <Link
                href="/signup?type=student"
                className="block px-4 py-2 text-sm text-brandBlack hover:bg-[#F6FAEF]"
              >
                As a Student
              </Link>
              <Link
                href="/signup?type=tutor"
                className="block px-4 py-2 text-sm text-brandBlack hover:bg-[#F6FAEF]"
              >
                As a Tutor
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Drawer direction="right">
        <DrawerTrigger asChild className="lg:hidden">
          <button
            className="p-2 rounded-md hover:bg-[#F6FAEF] transition-transform duration-200 active:scale-95"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-brandBlack" />
          </button>
        </DrawerTrigger>

        <DrawerContent className="h-full w-[85%] max-w-xs ml-auto bg-white border-l border-[#DEE1E6]">
          <DrawerHeader className="flex items-center justify-between p-4 border-b border-[#F0F0F0]">
            <DrawerTitle className="text-lg font-semibold text-[#19191F]">
              {/* Menu */}
            </DrawerTitle>
            <DrawerClose asChild className="w-full flex justify-end">
              <button className="p-2 rounded-md hover:bg-[#F6FAEF] transition-colors ">
                <X className="w-5 h-5 text-brandBlack" />
              </button>
            </DrawerClose>
          </DrawerHeader>

          <div className="flex flex-col p-4 space-y-4 overflow-y-auto">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brandBlack w-3 h-3" />
              <Input
                className="w-full h-[38px] rounded-[16px] border border-[#DEE1E6] pl-9"
                placeholder="Search..."
              />
            </div>

            {links.map((link) => {
              const isActive = activeSection === link.key;
              return (
                <DrawerClose asChild key={link.id}>
                  {pathname === "/" && (
                    <button
                      // href={link.href}
                      className={`text-sm text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-brandGreen font-semibold bg-[#F6FAEF]"
                          : "text-brandBlack hover:text-brandGreen hover:bg-[#F6FAEF]"
                      }`}
                    >
                      {link.label}
                    </button>
                  )}
                </DrawerClose>
              );
            })}

            <div className="flex flex-col gap-2 pt-3 border-t border-[#E5E7EB]">
              <div className="flex flex-col gap-1">
                <Link
                  href="/login"
                  className="w-full h-10 rounded-[16px] border border-[#DEE1E6] text-brandBlack text-sm flex items-center justify-center hover:border-brandGreen"
                >
                  Login
                </Link>
              </div>

              <div className="flex flex-col gap-1 pt-4">
                <Link
                  href="/signup?type=student"
                  className="w-full h-10 rounded-[16px] bg-brandGreen text-[#384B15] text-sm flex items-center justify-center hover:shadow-md"
                >
                  SignUp As a Student
                </Link>
                <Link
                  href="/signup?type=tutor"
                  className="w-full h-10 rounded-[16px] bg-brandGreen text-[#384B15] text-sm flex items-center justify-center hover:shadow-md"
                >
                  SignUp As a Tutor
                </Link>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Header;
