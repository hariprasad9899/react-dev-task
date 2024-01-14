import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiUrl } from "./axiosInstance"

// Async thunk requst to get all the recommendation for a particular year, and store it in the redux store 
export const getUserRecomendation = createAsyncThunk('getUserRecommendation/useRecommendationData', async (timeStampInfo:{start:number | null, end: number | null}) => {

    const { start, end } = timeStampInfo
    try {
        const res = await apiUrl.get(`/user-recommendation/get-list?dateFrom=${start}&dateTo=${end}&postProcessing=false`)
        return res.data
    } catch(err) {
        throw new Error("Some error occured")
    }
})