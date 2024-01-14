import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import "../styles/yearSelector.css"

interface YearSelectorType {
    currentYearValue: number
    decrementYear: () => void
    incrementYear: () => void
}
/**
 * @param {YearSelectorType} - object that contains the  the current year, and function to increment/decrement year
 * @returns 
 */
export function YearSelector({currentYearValue,decrementYear, incrementYear}:YearSelectorType) {

    return (
        <div className="year-selector">
            <span onClick={decrementYear}><MdKeyboardArrowLeft color="#2559D6" size={18} /></span>
            <span className="year-value">{currentYearValue}</span>
            <span onClick={incrementYear}><MdKeyboardArrowRight color="#2559D6" size={18} /></span>
        </div>
    )

}