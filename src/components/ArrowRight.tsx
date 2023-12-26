interface ArrowRightType {
    bgColor?: string
    handleIncrement?:() => void
}
export function ArrowRight({bgColor = "#2559D6", handleIncrement }: ArrowRightType) {

    return (
        <div className="year-selector-arrow" onClick={handleIncrement}>
            <svg className="arrow-right" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.999994L4 4.99999L1 9" stroke={`${bgColor}`} strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </div>
        
    )

}