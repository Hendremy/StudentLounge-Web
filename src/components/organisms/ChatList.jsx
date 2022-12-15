import { Box, List, Paper } from "@mui/material";
import {palette} from "../../AppTheme";
import { useAtom } from "jotai";
import { chatAtom } from "../../stores/userStore";
import { useEffect, useState } from "react";
import ListHeader from '../molecules/ListHeader';
import ChatRow from "../molecules/ChatRow";

export default function ChatList({chatRepository, reloadList}){
    const [chats, setChats] = useAtom(chatAtom);
    const [chatRows, setChatRows] = useState([]);

    const paperStyle = {
        padding: 20,
        height:'auto',
        backgroundColor:palette.primary,
        color:'white',
        borderRadius:25
    };

    const boxStyle = {
        height: '100%',
        backgroundColor: palette.secondary,
        minHeight:'73.5vh',
        borderRadius: '5px'
    };

    const loadChat = () => {
        chatRepository.getChat()
        .then(chatList => {
            setChats(chatList);
        })
        .catch(error => {
            console.log(error);
        });
    }

    const renderChatRows = (chats) => {
        try{
            setChatRows(chats.map(
                (chat) => <ChatRow key={chat.id} chat={chat}></ChatRow>
            ))
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        loadChat();
    },[]);

    useEffect(() => {
        renderChatRows(chats);
    },[chats])

    return(
        <Paper elevation ={10} style={paperStyle}>
            <ListHeader title='Messages'/>
            <Box sx={boxStyle}>
                <List>
                    {chatRows}
                </List>
            </Box>
        </Paper>
    );
}