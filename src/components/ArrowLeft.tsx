interface ArrowLeftType {
    bgColor?: string
    handleDecrement?:()=> void
}
export function ArrowLeft({bgColor = "#2559D6", handleDecrement }: ArrowLeftType) {

    return (
        <div className="year-selector-arrow" onClick={handleDecrement}>
            <svg className="arrow-icon" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 9.00001L2 5.00001L5 1" stroke={`${bgColor}`} strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </div>
        

    )

}