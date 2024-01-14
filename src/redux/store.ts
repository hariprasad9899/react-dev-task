import { configureStore } from "@reduxjs/toolkit";
import userRecommendationSlice from "./slice/userRecommendationSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: {
        userRecommendations: userRecommendationSlice
    }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>;
export default store;