import { configureStore } from "@reduxjs/toolkit";
import userRecommendationSlice from "./slice/userRecommendationSlice";

const store = configureStore({
    reducer: {
        userRecommendations: userRecommendationSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;
export default store;