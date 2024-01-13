import { createSlice } from "@reduxjs/toolkit";
import { getUserRecomendation } from "../../services/getUserRecomendation";

interface userRecommendationType {
    targetYear: number,
    isLoading: boolean,
    isError: boolean,
    isEmpty: boolean,
    recommendations: any[]
}

const initialState:userRecommendationType = {
    targetYear: 2023,
    isLoading: false,
    isError: false,
    isEmpty: false,
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
            const { userRecommendations } = action.payload;
            if(userRecommendations.length === 0) {
                state.recommendations = [];
                state.isEmpty = true;
            } else {
                state.recommendations = userRecommendations;
                state.isEmpty = false;
            }
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