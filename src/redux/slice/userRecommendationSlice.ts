import { createSlice } from "@reduxjs/toolkit";
import { getUserRecomendation } from "../../services/getUserRecomendation";


const initialState = {
    targetYear: 2023,
    isLoading: false,
    isError: false,
    recommendations: []
}

const userRecommendationData = createSlice({
    name: "userRecommendation",
    initialState,
    reducers: {

        incrementTargetYear: (state) => {
            state.targetYear += 1
        },

        decrementTargetYear: (state) => {
            state.targetYear -= 1
        }

    },
    extraReducers: (builder) => {
        builder
        .addCase(getUserRecomendation.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getUserRecomendation.fulfilled, (state,action) => {
            state.isLoading = false;
            state.recommendations = action.payload?.userRecommendations;
        })
        .addCase(getUserRecomendation.rejected, (state) => {
            state.isLoading = false;
            state.isError = true
        })
    }
})

export const { incrementTargetYear, decrementTargetYear } = userRecommendationData.actions

export default userRecommendationData.reducer