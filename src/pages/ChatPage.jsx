import { Grid } from "@mui/material";
import ChatList from "../components/organisms/ChatList";
import ChatHub from "../components/organisms/ChatHub";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { chatAtom } from "../stores/userStore";
import { useContext } from "react";
import { ApiServicesContext } from "../App";
import EmptyChatHub from "../components/organisms/EmptyChatHub";
import roles from "../models/roles";

export default function ChatPage(){
    const { id } = useParams();
    const [chats,] = useAtom(chatAtom);
    const studentApiServices = useContext(ApiServicesContext)[roles.student];
    const chatRepository = studentApiServices.chatRepository;
    const tutoringRepository = studentApiServices.tutoringRepository;
    const appointmentRepository = studentApiServices.appointmentRepository;

    const gridStyle = {
        height: 'auto',
        margin:"5vh auto",
        minHeight:'80vh'
    }


    let selectedchat = chats.find(chat => chat.id+'' === id);
    
    if(selectedchat){
        return (
            <Grid container spacing={2} sx={gridStyle}>
                <Grid item xs={2}>
                    <ChatList 
                        chat={chats} 
                        chatRepository={chatRepository}
                        ></ChatList>
                </Grid>
                <Grid item xs={10}>
                    <ChatHub 
                        key={selectedchat.id} 
                        chat={selectedchat} 
                        chatRepository={chatRepository}
                        appointmentRepository={appointmentRepository}
                        tutoringRepository={tutoringRepository}
                        />
                </Grid>
            </Grid>
        );
    }else{
        return (
            <Grid container spacing={2} sx={gridStyle}>
                <Grid item xs={2}>
                    <ChatList chat={chats} chatRepository={chatRepository}></ChatList>
                </Grid>
                <Grid item xs={10}>
                    <EmptyChatHub />
                </Grid>
            </Grid>
        );
    }
    
}