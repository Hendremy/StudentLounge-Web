import { Box, Paper, TableContainer, TableCell, TableHead, Table, TableRow, TableBody} from "@mui/material";
import {palette} from "../AppTheme";
import { ApiServicesContext } from "../App";
import { useContext, useState, useEffect } from "react";
import roles from "../models/roles";
import GridCentered from "../components/atoms/GridCentered";
import UserRow from "../components/molecules/UserRow";


export default function AdminPage(){
    const adminApiServices = useContext(ApiServicesContext)[roles.admin];
    const usersRepository = adminApiServices.usersRepository;
    const [users, setUsers] = useState([]);

    const paperStyle = {
        padding: 20,
        height:'auto',
        backgroundColor:palette.primary,
        color:'white',
        borderRadius:25
    };

    const boxStyle = {
        height: '100%',
        backgroundColor: palette.primary,
        minHeight:'75vh',
        padding: '1%',
    };

    const loadUsers = () => { usersRepository.getUsers().then(userList => {
            setUsers(userList);
        })
        .catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        loadUsers();
    },[]);

    let userRows = [];
    if(users){
        userRows = users.map(user => {
            return <UserRow key={user.id} user={user} repository={usersRepository}/>
        });
    }
    
    return (
        <GridCentered>
            <Paper elevation ={10} style={paperStyle}>
                <Box sx={boxStyle}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow key={'userhead'}>
                                    <TableCell style={{width:5}}>Id</TableCell>
                                    <TableCell style={{width:5}}>Prenom</TableCell>
                                    <TableCell style={{width:5}}>Nom</TableCell>
                                    <TableCell style={{width:5}}>E-mail</TableCell>
                                    <TableCell style={{width:5}}>Mot de passe</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {userRows}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Paper>
        </GridCentered>
    );
}