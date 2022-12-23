import { CircularProgress, Container } from "@mui/material";
import AskTutoringButton from "./AskTutoringButton";
import { useState, useEffect } from "react";
import OpenModalButton from "../molecules/OpenModalButton";
import { Groups } from "@mui/icons-material";
import TutoringRequestsModal from "./TutoringRequestsModal";

export default function TutoringActions({tutoringRepository, lesson}){
    const [tutoringRequest, setTutoringRequest] = useState(false);
    const [tutorRequests, setTutorRequests] = useState([]);
    const [error, setError] = useState(null);


    const loadTutoringStatus = () => {
        tutoringRepository.getTutoringRequestStatus({lessonId: lesson.id})
            .then(tutoring => setTutoringRequest(tutoring));
    }

    const loadTutorRequests = () => {
        tutoringRepository.getAllRequestsOfLesson({lessonId: lesson.id})
            .then(requestArray => setTutorRequests(requestArray))
            .catch(error => setError(error))
    }

    useEffect(() => {
        loadTutorRequests();
    },[]);


    useEffect(() => {
        loadTutoringStatus();
    },[])

    if(tutoringRequest === false) return <CircularProgress sx={{color: "white"}}/>
    return(
        <Container>
            <AskTutoringButton
                lesson={lesson}
                tutoringRequest={tutoringRequest}
                callback={() => loadTutoringStatus()}
                repository={tutoringRepository}
            />
            {
                tutoringRequest === null && 
                <OpenModalButton
                    icon={Groups}
                    text={'Voir les demandes de tutorat'}
                    modal={TutoringRequestsModal}
                    onClose={loadTutorRequests}
                    repository={tutoringRepository}
                    data={{lesson: lesson, requests: tutorRequests}}
                />
            }
        </Container>
    )
}