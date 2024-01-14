export interface UserRecommendationType<T> {
    targetYear: number,
    isLoading: boolean,
    isError: boolean,
    isEmpty: boolean,
    recommendations: {} | T,
    targetIdSet: number[] | [],
    targetIdForDetailedView: number | null
}

export interface GroupedRecommendationByTargetIdType {
    [key:string | number] : RecommendationApiDataType[]
}

export interface RecommendationApiDataType {
    uuid: string
    interventionId: number
    interventionName: string
    targetId: number
    targetName: string 
    dateFrom: number | null
    dateTo: number | null
    timeLine: string[] | []
    schedule: string | null
    receptionMode: string | null
    unitId: number | null
    unitName: string | null
    value: number | null
    valueOld: number | null | string
    category: string | null
    comment: string | null
    dates: number[] | [] | null
    link: string | null
}