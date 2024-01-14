import { createSlice } from "@reduxjs/toolkit";
import { getUserRecomendation } from "../../services/getUserRecomendation";
import { getTargetYear, groupByTargetId } from "../../data/helperFunctions";
import { GroupedRecommendationByTargetIdType, UserRecommendationType } from "../sliceType";

const initialState:UserRecommendationType<GroupedRecommendationByTargetIdType> = {
    targetYear: getTargetYear(),
    isLoading: false,
    isError: false,
    isEmpty: false,
    recommendations: {},
    targetIdSet: [],
    targetIdForDetailedView: null
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
        },
        storeTargetedId: (state,action) => {
            const { id } = action.payload;
            state.targetIdForDetailedView = id
        },
        resetTargetedId: (state) => {
            state.targetIdForDetailedView = null;
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
                const { filteredTargetObj, targetIds} = groupByTargetId(userRecommendations)
                state.recommendations = filteredTargetObj;
                state.targetIdSet = targetIds;
                state.isEmpty = false;
            }
         })
        .addCase(getUserRecomendation.rejected, (state) => {
            state.isLoading = false;
            state.isError = true
        })
    }
})

export const { incrementTargetYear, decrementTargetYear, storeTargetedId, resetTargetedId } = userRecommendationData.actions

export default userRecommendationData.reducer