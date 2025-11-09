import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { dataApi } from "./api/dataApi";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [dataApi.reducerPath]: dataApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            authApi.middleware,
            dataApi.middleware)

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch