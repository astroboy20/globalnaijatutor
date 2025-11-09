import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LucideLogOut } from "lucide-react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://backend-service-q0oj.onrender.com"
    }),
    endpoints: (build) => ({
        LucideLogOut: build.mutation({
            query(body) {
                return {
                    url: "/auth/logout",
                    method: "GET",
                }
            }
        }),
        login: build.mutation({
            query(body) {
                return {
                    url: "/auth/login",
                    method: "POST",
                    body
                }
            }
        }),
        studentSignup: build.mutation({
            query(body) {
                return {
                    url: "/students/sign-up",
                    method: "POST",
                    body
                }
            }
        }),
        tutorSignup: build.mutation({
            query(body) {
                return {
                    url: "/tutors/sign-up",
                    method: "POST",
                    body
                }
            }
        }),
    })
})

export const { useLoginMutation, useStudentSignupMutation, useTutorSignupMutation } = authApi