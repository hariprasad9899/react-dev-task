import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiUrl } from "./axiosInstance"

export const getUserRecomendation = createAsyncThunk('getUserRecommendation/useRecommendationData', async (timeStampInfo:any) => {

    const { start, end } = timeStampInfo
    try {
        const res = await apiUrl.get(`/user-recommendation/get-list?dateFrom=${start}&dateTo=${end}&postProcessing=false`)
        return res.data
    } catch(err) {
        throw new Error("Some error occured")
    }
})