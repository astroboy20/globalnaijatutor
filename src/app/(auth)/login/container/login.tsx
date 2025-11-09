"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "../../componnets/tabs";
import Image from "next/image";
import * as Yup from "yup";
import { Formik } from "formik";
import { useLoginMutation } from "@/app/provider/api/authApi";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
interface LoginProps {
  account_type: string | null;
}
interface LoginFormValues {
  email: string;
  password: string;
}

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address"
    )
    .required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters, contain one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),
});

const Login = ({ account_type }: LoginProps) => {
  const router = useRouter();
  const currentType = account_type || "student";
  const [loginMutation, { isLoading }] = useLoginMutation();

  const handleTabChange = (value: string) => {
    router.push(`/login?type=${value}`);
  };

  const handleSubmit = async (values: LoginFormValues): Promise<void> => {
    console.log(values);
    try {
      const res = await loginMutation(values).unwrap();
      console.log("Login successful:", res);
    } catch (error:any) {
      console.log("Login failed:", error);
      toast.error(error?.data?.message || "Login failed. Please try again.");
    }
  };

  const imageUrl =
    currentType === "tutor"
      ? "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop"
      : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-start min-h-screen overflow-x-hidden bg-white">
      <div className="w-full lg:col-span-6 flex justify-center overflow-y-auto no-scrollbar">
        <div className="flex flex-col gap-6 border border-white w-full  p-10 rounded-[32px] ">
          {/* <Tabs
            value={currentType}
            onValueChange={handleTabChange}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="tutor">Tutor</TabsTrigger>
            </TabsList>
          </Tabs> */}
          <Link href={"/"} className="flex items-center mb-10">
            <Image
              src="/images/logo.jpg"
              width={40}
              height={40}
              alt="brand-logo"
              className="rounded-full md:w-[50px] md:h-[50px]"
            />
          </Link>

          <div className="space-y-2 text-center">
            <h1 className="text-[28px] lg:text-[36px] font-bold">
              Welcome Back, User
            </h1>
            <p className="text-sm text-[#565D6D] font-normal">
              {" "}
              {currentType === "tutor"
                ? "Sign in to manage your classes and students."
                : "All information provided is confidential and secure."}
            </p>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 2xl:max-w-2xl mx-auto w-full"
              >
                <div className="flex flex-col gap-3">
                  <label htmlFor="email" className="text-sm text-brandBlack">
                    Email{" "}
                  </label>
                  <div className="space-y-1">
                    <Input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className=" border border-[#DEE1E6] rounded-[20px] h-10"
                    />

                    {errors.email && touched.email && (
                      <span className="text-xs text-red-500 font-normal">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="password" className="text-sm text-brandBlack">
                    Password
                  </label>
                  <div className="space-y-1">
                    <Input
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className=" border border-[#DEE1E6] rounded-[20px] h-10"
                    />
                    {errors.password && touched.password && (
                      <span className="text-xs text-red-500 font-normal">
                        {errors.password}
                      </span>
                    )}
                  </div>
                </div>
                <Button
                  type="submit"
                  className="h-10 rounded-[20px] w-full bg-brandGreen text-sm text-[#384B15]"
                >
                  {isLoading ? <Spinner /> : "Login"}
                </Button>
              </form>
            )}
          </Formik>

          <div className="flex flex-col gap-6 text-center">
            <Link
              href="/forgot-password"
              className="text-sm font-normal text-brandGreen hover:underline"
            >
              Forgot Password?
            </Link>
            <div className="text-sm font-normal text-[#565D6D]">
              {" "}
              Don't have an account?{" "}
              <Link
                href={`/signup?type=${currentType}`}
                className="text-brandGreen hover:underline"
              >
                {currentType === "tutor" ? "Apply as a Tutor." : "Signup."}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block fixed right-0 top-0 w-1/2 h-screen">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={currentType === "tutor" ? "Tutor teaching" : "Students learning"}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
