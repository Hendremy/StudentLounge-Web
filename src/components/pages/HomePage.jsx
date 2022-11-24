import CustomCard from "../molecules/CustomCard";
import {Box} from "@mui/system";

export default function HomePage(){
    return (
        <Box flexDirection={"row"} display={"flex"} marginTop={10}>
            <CustomCard
                IconCard ={"users"}
                TitleCard ={"123 346 utilisateurs inscrits"}
                TextCard ={"Apprend et échange avec une communauté qui grandit de jour en jour."}
            />
            <CustomCard
                IconCard ={"files"}
                TitleCard ={"143 904 345 synthèse partagés"}
                TextCard ={"Accède à des tas de synthèses, prises de notes et astuces !"}
            />
        </Box>
    );
}