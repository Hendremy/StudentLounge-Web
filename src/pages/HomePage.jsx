import CustomCard from "../components/molecules/CustomCard";
import {Box} from "@mui/system";
import GridCentered from "../components/atoms/GridCentered";
import {getNbFiles} from "../repositories/studentLoungeAPI";
import {useEffect, useState} from "react";

export default function HomePage() {
    const [nbFiles, setNbFiles] = useState(null);

    useEffect(() => {
        getNbFiles().then(
            result => {
                setNbFiles(result);
            }
        ).catch(error => {
            console.log(error)
        });
    })

    const cards = <Box display={"flex"} flexDirection={"row"}>
        <CustomCard
            IconCard={"users"}
            Number={404}
            TitleCard={"utilisateurs inscrits"}
            TextCard={"Apprend et échange avec une communauté qui grandit de jour en jour."}
        />
        <CustomCard
            IconCard={"files"}
            Number={nbFiles}
            TitleCard={" fichiers en ligne"}
            TextCard={"Accède à des tas de synthèses, prises de notes et astuces !"}
        />
    </Box>
    return (
        <GridCentered>
            {cards}
        </GridCentered>
    );
}