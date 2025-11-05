"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/header";
import HeroSection from "./hero-section";
import ExploreSection from "./explore-section";
import HowitWorkSection from "./howitwork-section";
import ConsultationSection from "./consultation-section";
import PromiseSection from "./promise-section";
import AboutTutor from "./about-tutor-section";
import Testimonials from "./testimonials";
import TutorSection from "./tutors-section";
import BlogSection from "./blog-section";
import Footer from "@/components/footer";
import FinalCtaSection from "./final-cta";
import LearningAdvisorSection from "./learning";

const HomeContainer = () => {
  // Refs for each section
  const subjectsRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const consultationRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const tutorsRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    subjects: subjectsRef,
    "how-it-works": howItWorksRef,
    "free-consultation": consultationRef,
    reviews: reviewsRef,
    tutors: tutorsRef,
    blog: blogRef,
  };

  // Track which section is active
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find which section is currently visible
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, 
      }
    );

    (Object.keys(sectionRefs) as Array<keyof typeof sectionRefs>).forEach((key) => {
      const ref = sectionRefs[key];
      if (ref.current) {
        ref.current.id = key; 
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header sectionRefs={sectionRefs} activeSection={activeSection} />
      <HeroSection />
      <div ref={subjectsRef}>
        <ExploreSection />
      </div>
      <div ref={howItWorksRef}>
        <HowitWorkSection />
      </div>
      <div ref={consultationRef}>
        <ConsultationSection />
      </div>
      <div ref={reviewsRef}>
        <Testimonials />
      </div>
      <div ref={tutorsRef}>
        <TutorSection />
      </div>
      <div ref={blogRef}>
        <BlogSection />
      </div>
      <PromiseSection />
      <AboutTutor />
      <LearningAdvisorSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
};

export default HomeContainer;
