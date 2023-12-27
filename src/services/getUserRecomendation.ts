import { apiUrl } from "./axiosInstance"

export const getUserRecomendation = async (dateFrom:number, dateTo:number) => {
    try {
        const res = await apiUrl.get(`/user-recommendation/get-list?dateFrom=${dateFrom}&dateTo=${dateTo}&postProcessing=false`)
        return res.data
    } catch(err) {
        return null
    }
}