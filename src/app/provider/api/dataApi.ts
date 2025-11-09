import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
    reducerPath: "dataApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://backend-service-q0oj.onrender.com"
    }),
    endpoints: (build) => ({
        classLevels: build.query<any, void>({
            query() {
                return {
                    url: "/class-levels",
                    method: "GET"
                }
            }
        }),
        curiculums: build.query<any, void>({
            query() {
                return {
                    url: "/curriculums",
                    method: "GET"
                }
            }
        })
    })
});

export const { useClassLevelsQuery, useCuriculumsQuery } = dataApi
