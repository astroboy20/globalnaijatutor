import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://backend-service-q0oj.onrender.com"
    }),
    endpoints: (build) => ({
        login: build.mutation({
            query(body) {
                return {
                    url: "/auth/login",
                    method: "POST",
                    body
                }
            }
        })
    })
})

export const { useLoginMutation } = authApi