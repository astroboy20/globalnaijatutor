"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UploadField from "@/app/(auth)/componnets/upload-field";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/(auth)/componnets/dialog";
import { CircleCheck } from "lucide-react";

const TutorOnboardingContainer = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    subjects: "",
    experienceLevel: "",
    yearsOfExperience: "",
    certifications: "",
    hourlyRate: "",
    availability: "",
    preferredStudentLevel: "",
    videoUrl: "",
    resume: null,
    certificationDocs: null,
    idProof: null,
    backgroundCheck: false,
  });

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="flex min-h-screen overflow-x-hidden bg-white">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="sm:max-w-[500px]"
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          {/* <DialogHeader>
            <DialogTitle>Application Submitted 🎉</DialogTitle>
            <DialogDescription>
              Thank you for completing your tutor profile! We’ll review your
              submission and notify you via email once it’s approved.
            </DialogDescription>
          </DialogHeader> */}

          <CircleCheck className="w-16 h-16 mx-auto text-brandGreen" />
          <div className="text-center flex flex-col gap-6">
            <h1 className="text-[24px] font-bold text-brandBlack">
              {" "}
              Submission Confirmed!
            </h1>
            <p className="text-[#565D6D] text-sm">
              Your tutor profile has been successfully submitted and is
              currently under review. You’ll receive an email once your
              application is approved. Thank you for joining Global Naija
              Tutors!
            </p>
          </div>
          <div className="flex gap-5 mx-auto items-center">
            <Button
              className="w-auto rounded-[16px] h-10 border border-[#9FCC4A] text-brandGreen text-sm font-normal"
              variant={"outline"}
              onClick={() => setOpen(false)}
            >
              Return to Homepage
            </Button>
            <Button
              className="w-auto rounded-[16px] h-10 bg-brandGreen text-[#384B15] text-sm font-normal"
              onClick={() => setOpen(false)}
            >
              View Application Status
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="w-full lg:w-1/2 flex justify-center overflow-y-auto no-scrollbar">
        <div className="w-full max-w-2xl px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
          <div className="mb-8 sm:mb-12 animate-fade-in">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
              Complete Your Tutor Profile
            </h1>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">
              Tell us more about your teaching experience, qualifications, and
              what makes you a great tutor. This information helps us match you
              with the right students globally.
            </p>
          </div>

          <form className="space-y-8 sm:space-y-10">
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Teaching Details
              </h2>
              <div className="space-y-4 sm:space-y-5">
                <div className="flex flex-col gap-3">
                  <label htmlFor="subjects" className="text-sm text-brandBlack">
                    Subjects you can teach
                  </label>
                  <Select>
                    <SelectTrigger
                      id="subjects"
                      className="w-full !h-10 !rounded-[20px]"
                    >
                      <SelectValue placeholder="e.g., Mathematics, Physics, Chemistry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="class" className="text-sm text-brandBlack">
                    Class Levels You Teach
                  </label>
                  <Select>
                    <SelectTrigger
                      id="class"
                      className="w-full !h-10 !rounded-[20px]"
                    >
                      <SelectValue placeholder="Select class levels" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="familarity"
                    className="text-sm text-brandBlack"
                  >
                    Curriculum Familiarity
                  </label>
                  <Select>
                    <SelectTrigger
                      id="familiariy"
                      className="w-full !h-10 !rounded-[20px]"
                    >
                      <SelectValue placeholder="Select relevant curricula" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">
                        Beginner (0-2 years)
                      </SelectItem>
                      <SelectItem value="intermediate">
                        Intermediate (2-5 years)
                      </SelectItem>
                      <SelectItem value="experienced">
                        Experienced (5-10 years)
                      </SelectItem>
                      <SelectItem value="expert">Expert (10+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="yearsOfExperience"
                    className="text-sm text-brandBlack"
                  >
                    Years of teaching experience
                  </label>
                  <Input
                    id="yearsOfExperience"
                    type="number"
                    placeholder="e.g., 5"
                    className="w-full !h-10 !rounded-[20px]"
                  />
                </div>
              </div>
            </div>

            {/* Personal Information & Availability Section */}
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Personal Information & Availability
              </h2>
              <div className="space-y-4 sm:space-y-5">
                <div className="flex flex-col gap-3">
                  <label htmlFor="location" className="text-sm text-brandBlack">
                    Your Current Location
                  </label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="e.g., Lagos, Nigeria"
                    className="w-full !h-10 !rounded-[20px]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="level" className="text-sm text-brandBlack">
                    Class Levels You Teach
                  </label>
                  <Select>
                    <SelectTrigger
                      id="level"
                      className="w-full !h-10 !rounded-[20px]"
                    >
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">
                        Beginner (0-2 years)
                      </SelectItem>
                      <SelectItem value="intermediate">
                        Intermediate (2-5 years)
                      </SelectItem>
                      <SelectItem value="experienced">
                        Experienced (5-10 years)
                      </SelectItem>
                      <SelectItem value="expert">Expert (10+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="availability"
                    className="text-sm text-brandBlack"
                  >
                    Availability
                  </label>
                  <Textarea
                    id="availability"
                    placeholder="Share your teaching philosophy, specializations, and what makes your lessons engaging. (Minimum 150 characters)"
                    className=" min-h-[100px]"
                  />
                </div>
              </div>
            </div>

            {/* Introductory Video Section */}
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Introductory Video (Mandatory)
              </h2>
              <div className="space-y-4 sm:space-y-5">
                <UploadField
                  label=" Upload or link to your intro video"
                  id="videoUpload"
                  placeholder="Click to upload your introductory video"
                  accept="video/*"
                  icon="video"
                  onChange={(file) => console.log("Uploaded video:", file.name)}
                  required
                />
                <p className="text-sm text-[#565D6D]">
                  A short video (1-2 minutes) introducing yourself, your
                  teaching style, and subjects. This helps students connect with
                  you.
                </p>
              </div>
            </div>

            {/* Required Documents Section */}
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Required Documents
              </h2>
              <div className="space-y-4 sm:space-y-5">
                <UploadField
                  id="resume"
                  label="Curriculum Vitae (CV) "
                  placeholder=" Click to upload curriculum vitae (cv)"
                  accept=".pdf,.jpg,.jpeg,.png"
                  icon="file"
                  required
                />

                <UploadField
                  id="professionalQualification"
                  placeholder="  Click to upload professional qualification certificate"
                  label=" Professional Qualification Certificate "
                  accept=".pdf,.jpg,.jpeg,.png"
                  icon="academic"
                  required
                />

                <UploadField
                  id="references"
                  label="Two References (e.g., from previous employers or academic institutions)"
                  placeholder="Click to upload two references (e.g., from previous employers or academic institutions)"
                  accept=".pdf,.jpg,.jpeg,.png"
                  icon="file"
                  required
                />

                <UploadField
                  id="identityDocument"
                  label="National Identity Number (NIN) Document"
                  placeholder="Click to upload national identity number (nin) document"
                  accept=".pdf,.jpg,.jpeg,.png"
                  icon="file"
                  required
                />
                <UploadField
                  id="trainingsCertifications"
                  label="Relevant Trainings & Certifications (Optional)"
                  placeholder="Click to upload relevant trainings & certifications (optional)"
                  accept="file"
                  icon="academic"
                />

                <div className="flex flex-col  items-center bg-[#F3F4F6] rounded-[16px] text-[#565D6D] text-sm space-x-3 p-3 text-center">
                  <p> Important Note:</p>
                  <p>
                    {" "}
                    Your tutor profile and submitted documents are subject to
                    administrative review. We will notify you via email once
                    your application is approved or if further information is
                    required.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="pt-4 sm:pt-6 animate-slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                type="button"
                onClick={handleOpen}
                className="w-full bg-brandGreen hover:bg-[#689F38] text-[#384B15] py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden lg:block fixed right-0 top-0 w-1/2 h-screen">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=1600&fit=crop&q=80"
          alt="Tutor teaching students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </div>
  );
};

export default TutorOnboardingContainer;
