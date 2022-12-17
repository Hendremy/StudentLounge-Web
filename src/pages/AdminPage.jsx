import { Box, Paper, Grid, IconButton, Button} from "@mui/material";
import {palette} from "../AppTheme";
import { ApiServicesContext } from "../App";
import { useContext, useState, useEffect } from "react";
import roles from "../models/roles";
import HubHeader from "../components/molecules/HubHeader";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LabelIconButton from "../components/atoms/LabelIconButton";
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import { display } from "@mui/system";
import { Link } from "react-router-dom";

export default function AdminPage(){
    const adminApiServices = useContext(ApiServicesContext)[roles.admin];
    const usersRepository = adminApiServices.usersRepository;
    const [users, setUsers] = useState([]);

    function onUpdate({user, id, firstname, lastname, password, username}){
        var newUser = new Map();
        newUser.set('id',id);

        if(firstname !== user.firstname){
            newUser.set('firstname',firstname);
        }

        if(lastname !== user.lastname){
            newUser.set('lastname',lastname);
        }

        if(password !== '●●●●●●●●●●●●'){
            newUser.set('password',password);
        }

        if(username !== user.username){
            newUser.set('username',username);
        }

        usersRepository.updateUser(newUser);
    }

    function onDelete({id}){
        usersRepository.deleteUser(id);
        setUsers((current) => current.filter((current) => current.id !== id));
    }

    const paperStyle = {
        padding: 20,
        height:'auto',
        backgroundColor:palette.primary,
        color:'white',
        borderRadius:25,
    };

    const boxStyle = {
        height: '100%',
        backgroundColor: palette.primary,
        minHeight:'75vh',
        padding: '1%',
    };

    const gridStyle = {
        margin:"10vh auto",
        width: "60vw"

    }

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
            return {
                fromGoogle: user.fromGoogle,
                id: user.id, 
                firstname: user.firstname, 
                lastname: user.lastname, 
                username: user.username, 
                password: "●●●●●●●●●●●●", 
                modify:
                    <IconButton color="primary" onClick={onUpdate}>
                        <EditIcon/>
                    </IconButton>,
                delete: (params) => {            
                    return <IconButton color="primary" onClick={onDelete}>
                        <DeleteIcon/>
                    </IconButton>}
            }
        });
    }

    const handleCellClick = (param, event) => {
        event.stopPropagation();
    };

    const handleRowClick = (param, event) => {
        event.stopPropagation();
    };

    const style = {
        width: 100,
        maxWidth: 100,
        overflow: "hidden",
        textOverflow: "ellipsis",
        borderStyle: "border-box"
    };

      const columns = [
        {field: 'fromGoogle', hide:true},
        { field: 'id', headerName: 'Id', width:150, editable:false},
        { field: 'firstname', headerName: 'Prenom', editable: true, width:100},
        { field: 'lastname', headerName: 'Nom', editable: true, with: 100},
        { field: 'username', headerName: 'E-mail', editable: true, width:150},
        { field: 'password', headerName: 'Mot de passe', editable: true, width:150},
        { field: 'modify', 
            headerName: "Modifier",
            editable: false, 
            renderCell: (params) => {
                console.log(params.fromGoogle);
                return (<IconButton color="primary" onClick={(event) => {onUpdate(params.row)}} disabled={params.row.fromGoogle}>
                            <EditIcon/>
                        </IconButton>)
            }
        },
        { field: 'delete', 
            headerName: "Supprimer",
            editable: false, 
            renderCell: (params) => {
                return (<IconButton color="primary" onClick={(event) => {onDelete(params.row)}}>
                            <DeleteIcon/>
                        </IconButton>)
            }
        }
      ];
    
    return (
        <Grid style={gridStyle}>
            <Paper elevation ={10} style={paperStyle}>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                    <HubHeader title={"Utilisateurs"}/>
                    <Link to="/addUser">
                        <LabelIconButton icon={PersonAddRoundedIcon} text={"Ajouter"}/>
                    </Link>
                </div>
                <Box sx={boxStyle}>
                    <div style={{ height: '75vh', width: '56vw', backgroundColor:"white", borderRadius:10}}>
                        <DataGrid 
                            style={{borderRadius:10}}
                            rows={userRows}
                            columns={columns}
                            experimentalFeatures={{ newEditingApi: true }}
                            onCellClick={handleCellClick}
                            onRowClick={handleRowClick}/>
                    </div>
                </Box>
            </Paper>
        </Grid>
    );
}