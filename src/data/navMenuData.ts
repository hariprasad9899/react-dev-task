import MonitorIcon from "../assets/svg/MonitorIcon.svg"
import GoalsIcon from "../assets/svg/GoalsIcon.svg"
import BioMarkers from "../assets/svg/BiomarkersIcon.svg"
import RecomendationsIcon from "../assets/svg/RecomendationsIcon.svg"
import RecordsIcon from "../assets/svg/RecordsIcon.svg"
import NutritionIcon from "../assets/svg/NutritionIcon.svg"
import GeneticsIcon from "../assets/svg/NutritionIcon.svg"
import OrgansIcon from "../assets/svg/OrgansIcon.svg"
import FilesIcon from "../assets/svg/FilesIcon.svg"
import InfographicsIcon from "../assets/svg/InfograhicsIcon.svg"
import FaqIcons from "../assets/svg/FaqIcon.svg"

interface NavMenuDataType {
    navMenuTitle: string;
    navMenuImg:string;
    navRoute:string;
}

// Object to render the list of sidenav menu with its respective navRoute and icon
export const navMenuData:NavMenuDataType[] = [
    {
        navMenuTitle: "Monitoring",
        navMenuImg: MonitorIcon,
        navRoute: "monitor",
    },
    {
        navMenuTitle: "Goals and quests",
        navMenuImg: GoalsIcon,
        navRoute: "goals"
    },
    {
        navMenuTitle: "Biomarkers",
        navMenuImg: BioMarkers,
        navRoute:"biomakers",
    },
    {
        navMenuTitle: "Recomendations",
        navMenuImg: RecomendationsIcon,
        navRoute:"recomendations"
    },
    {
        navMenuTitle: "Medical Records",
        navMenuImg: RecordsIcon,
        navRoute: "medical-records",
    },
    {
        navMenuTitle: "Nutrition",
        navMenuImg: NutritionIcon,
        navRoute:"nutrition"
    },
    {
        navMenuTitle: "Genetics",
        navMenuImg: GeneticsIcon,
        navRoute:"genetics",
    },
    {
        navMenuTitle: "Organs and system",
        navMenuImg: OrgansIcon,
        navRoute:"organs"
    },
    {
        navMenuTitle: "Files",
        navMenuImg: FilesIcon,
        navRoute:"files",
    },
    {
        navMenuTitle: "Infographics",
        navMenuImg: InfographicsIcon,
        navRoute:"infographics"
    },
    {
        navMenuTitle: "FAQ",
        navMenuImg: FaqIcons,
        navRoute:"faq"
    }
]