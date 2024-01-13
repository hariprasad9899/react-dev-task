import { DEFAULT_YEAR } from "./constants"

export const getTargetYear = () => {
    if(sessionStorage.getItem("targetYear")) {
        const savedTargetYear = sessionStorage.getItem("targetYear") || DEFAULT_YEAR
        return +savedTargetYear
    } else {
        return DEFAULT_YEAR
    }
}


export const groupByTargetId = (recommendationData:any) => {
    const filteredTargetObj:any = {};
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


