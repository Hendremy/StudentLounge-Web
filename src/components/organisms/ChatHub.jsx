import { Box, IconButton, Grid, Icon, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { userAtom } from "../../stores/userStore";
import { useAtom } from "jotai";
import {initializeApp} from 'firebase/app';
import {getFirestore, collection, addDoc, orderBy, limit, getDocs, query, serverTimestamp} from 'firebase/firestore';
import {palette} from "../../AppTheme";
import ChatBubble from 'react-chat-bubble';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import GridCentered from "../atoms/GridCentered";

export default function ChatHub({chat, chatRepository}){
    const app = initializeApp({
        apiKey: "AIzaSyCoHRpA9fPbBXPP17q_Ud1oiG3mBk0qGtY",
        authDomain: "studentlounge-android.firebaseapp.com",
        databaseURL: "https://studentlounge-android-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "studentlounge-android",
        storageBucket: "studentlounge-android.appspot.com",
        messagingSenderId: "617490373514",
        appId: "1:617490373514:web:ad590acdfcce16c7e50673"
    });

    const paperStyle = {
        padding: 20,
        height:'auto',
        backgroundColor:palette.primary,
        color:'white',
        borderRadius:25
    };

    const messageStyle = {
        height:'60vh',
    };

    const boxStyle = {
        height: '100%',
        backgroundColor: palette.primary,
        minHeight:'75vh',
        padding: '1%'
    };

    const firestore = getFirestore(app);
    const messagesRef = collection(firestore, `messages${chat.id}`);
    const q = query(messagesRef, orderBy("time"), limit(25));
    const [messages, setMessages] = useState();
    const [user,] = useAtom(userAtom);
    const [formValue, setFormValue] = useState('');
    const fieldStyle = {
        backgroundColor: palette.secondary,
        borderRadius:25,
        marginTop: 20,
    };
    const whiteColor = {
        style:{color:'white'}
    };
    const focusColor = {
        "& .MuiOutlinedInput-root": {
            "& > fieldset": { border: 0 },
            "&.Mui-focused fieldset": {
                borderRadius:6,
                borderColor:"#8aeaff"
            }
        }
    }
    const bottom = {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
      }
    const sendMessage = async(e) => {
        e.preventDefault();

        await addDoc(messagesRef, {
            message: formValue,
            time: serverTimestamp(),
            name: user.fullname
        })

        setFormValue('');
    }

    const getMessages = async () => {
       
        await getDocs(q)
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setMessages(newData);                
            })
       
    }

    useEffect(() => {
        getMessages();
    },[])

    return (
        <Paper elevation ={10} style={paperStyle}>
            <Box sx={boxStyle}>
                <div style={messageStyle}>
                    {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
                </div>
                <form onSubmit={sendMessage} style={bottom}>
                    <Grid container>
                        <Grid item xs={11}>
                            <GridCentered>
                                <TextField
                                    value={formValue}
                                    name={"input"}
                                    onChange={(event) => setFormValue(event.target.value)}
                                    placeholder={'Entrez votre messages ici...'}
                                    style={fieldStyle}
                                    InputLabelProps={whiteColor}
                                    InputProps={whiteColor}
                                    sx={focusColor}
                                    autoComplete='off'
                                    fullWidth/>
                            </GridCentered>
                        </Grid>
                        <Grid item>
                            <GridCentered>
                                <IconButton onClick={sendMessage}>
                                    <SendRoundedIcon sx= {{color:"white"}}/>
                                </IconButton>
                            </GridCentered>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Paper>
    )

    function ChatMessage(props) {
        const {message, id, name, time} = props.message;

        const type = name === user.fullname ? 0 : 1;

        return (
                <ChatBubble messages = {{
                    "type" : type,
                    "text": message}} />
        )
    }
}