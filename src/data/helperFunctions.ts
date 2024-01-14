import { GroupedRecommendationByTargetIdType, RecommendationApiDataType } from "../redux/sliceType"
import { DEFAULT_YEAR } from "./constants"

// returns the year stored in the session storage. IF not, returns the default year 
export const getTargetYear = () => {
    if(sessionStorage.getItem("targetYear")) {
        const savedTargetYear = sessionStorage.getItem("targetYear") || DEFAULT_YEAR
        return +savedTargetYear
    } else {
        return DEFAULT_YEAR
    }
}

// function to group all the recommendations by its respective target id and also returns the list set of unique target id
export const groupByTargetId = (recommendationData:RecommendationApiDataType[]) => {
    const filteredTargetObj:GroupedRecommendationByTargetIdType = {};
    const targetIds: number[] = [];
    for(let item in recommendationData) {
        const recommendationitem = recommendationData[item]
        const { targetId } = recommendationitem;
        if (!targetIds.includes(targetId)) {
            targetIds.push(targetId);
        }
        if(filteredTargetObj[targetId]) {
            filteredTargetObj[targetId].push(recommendationitem)
        } else {
            filteredTargetObj[targetId] = [recommendationitem]
        }
    }
    return {filteredTargetObj, targetIds};
}


