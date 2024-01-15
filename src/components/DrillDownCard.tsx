interface InterventionCardType {
    recommendationName: string;
    fromDate:string;
    toDate:string
}

export function DrillDownCard({ recommendationName ,fromDate,toDate}: InterventionCardType) {
   return (<div className="intervention-card"
        style={{

        }}>
        <div>{recommendationName}</div>

    </div>)
}