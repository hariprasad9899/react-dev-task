import "../styles/yearSelector.css"
import { ArrowLeft } from "./ArrowLeft"
import { ArrowRight } from "./ArrowRight"

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
            <ArrowLeft handleDecrement ={decrementYear} />
            <div className="year-value">{currentYearValue}</div>
            <ArrowRight handleIncrement = {incrementYear}/>
        </div>
    )

}