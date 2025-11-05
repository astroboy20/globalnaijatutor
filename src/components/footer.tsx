import {
  Facebook,
  Instagram,
  Linkedin,
  Search,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";

export const links = [
  { id: 1, href: "/about-us", label: "About Us" },
  { id: 2, href: "/become-a-tutor", label: "Become a Tutor" },
  { id: 3, href: "/blog", label: "Blog" },
  { id: 4, href: "/contact", label: "Contact" },
  { id: 5, href: "/privacy-policy", label: "Privacy Policy" },
];

const Footer = () => {
  return (
    <footer className="flex flex-col  gap-10 md:flex-row justify-between items-center px-4 md:px-6 py-3">
      <div className="flex items-center">
        <Image
          src="/images/logo.jpg"
          width={40}
          height={40}
          alt="brand-logo"
          className="rounded-full md:w-[50px] md:h-[50px]"
        />
      </div>
      <div className=" flex flex-col md:flex-row items-center gap-3 xl:gap-5">
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.href}
              className={`text-sm transition-all duration-300 hover:scale-105 }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <div className="flex gap-3 items-center">
        <Facebook className="text-brandBlack" />
        <Twitter className="text-brandBlack" />
        <Instagram className="text-brandBlack" />
        <Linkedin className="text-brandBlack" />
        <Youtube className="text-brandBlack" />
      </div>
    </footer>
  );
};

export default Footer;
