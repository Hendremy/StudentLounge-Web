import CustomCard from "../components/molecules/CustomCard";
import {Box} from "@mui/system";
import GridCentered from "../components/atoms/GridCentered";
import {useContext, useEffect, useState} from "react";
import { ApiServicesContext } from "../App";

export default function HomePage() {
    const anonymServices = useContext(ApiServicesContext)['Anonym'];
    const countRepository = anonymServices.countRepository;
    const [counts, setCounts] = useState({users: 0, files: 0});

    useEffect(() => {
        let newCounts = {users: 0, files: 0};
        let countFetchs = [
            countRepository.getFileCount()
                .then(count => newCounts.files = count),
            countRepository.getUserCount()
                .then(count => newCounts.users = count)
        ];
        Promise.all(countFetchs)
            .then(() => setCounts(newCounts))
            .catch(error => console.log(error));
    },[])

    const cards = <Box display={"flex"} flexDirection={"row"}>
        <CustomCard
            IconCard={"users"}
            Number={counts.users}
            TitleCard={"utilisateurs inscrits"}
            TextCard={"Apprend et échange avec une communauté qui grandit de jour en jour."}
        />
        <CustomCard
            IconCard={"files"}
            Number={counts.files}
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