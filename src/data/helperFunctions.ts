import { DEFAULT_YEAR } from "./constants"

export const getTargetYear = () => {
    if(sessionStorage.getItem("targetYear")) {
        const savedTargetYear = sessionStorage.getItem("targetYear") || DEFAULT_YEAR
        return +savedTargetYear
    } else {
        return DEFAULT_YEAR
    }
}
