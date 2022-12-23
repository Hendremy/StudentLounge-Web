import { Box, Paper, Grid, IconButton, Alert} from "@mui/material";
import {palette} from "../../AppTheme";
import { useState, useEffect } from "react";
import HubHeader from "../molecules/HubHeader";
import { DataGrid, frFR } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LabelIconButton from "../atoms/LabelIconButton";
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import BlockIcon from '@mui/icons-material/BlockRounded';
import { Link } from "react-router-dom";

export default function UserList({usersRepository}) {
    const [users, setUsers] = useState([]);
    const [result, setResult] = useState();
    const [error, setError] = useState()

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

        const answer = usersRepository.updateUser(newUser);
        if(answer){
            setResult("l'utilisateur à été modifié !");
        }else{
            setError("La modification à échoué !")
        }

    }

    function onDelete({id}){
        const answer = usersRepository.deleteUser(id);

        if(answer){
            setResult("l'utilisateur à été supprimé !");
            setUsers((current) => current.filter((current) => current.id !== id));
        }else{
            setError("La suppression à échoué !")
        }
    }

    function onLockout({id}){
        const answer = usersRepository.lockoutUser(id);
        if(answer){
            setResult("l'utilisateur à été bloqué");
            setUsers((current)=> current.map(user => {
                if (user.id === id){
                    user.isLockout = true; 
                }
                return user;
            }));
        }else{
            setError("La bloquage à échoué !")
        }
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
        width: "65vw"

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
                user:user,
                isLockout: user.isLockout,
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
                    </IconButton>},
                block: (params) => {
                    return <IconButton color="primary" onClick={onLockout}>
                        <DeleteIcon/>
                    </IconButton>
                }
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
        {field: 'isLockout', hide:true},
        { field: 'id', headerName: 'Id', width:150, editable:false},
        { field: 'firstname', headerName: 'Prenom', editable: true, width:100},
        { field: 'lastname', headerName: 'Nom', editable: true, with: 100},
        { field: 'username', headerName: 'E-mail', editable: true, width:150},
        { field: 'password', headerName: 'Mot de passe', editable: true, width:150},
        { field: 'modify', 
            headerName: "Modifier",
            editable: false, 
            renderCell: (params) => {
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
        },
        { field: 'block', 
            headerName: "Bloquer",
            editable: false, 
            renderCell: (params) => {
                return (<IconButton color="primary" onClick={(event) => {onLockout(params.row)}} disabled={params.row.isLockout }>
                            <BlockIcon/>
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
                    <div style={{ height: '75vh', width: '61vw', backgroundColor:"white", borderRadius:10}}>
                        {error && (<Alert style={{marginTop:15}} severity="error">{error}</Alert>)}
                        {result && (<Alert style={{marginTop:15}} severity="success">{result}</Alert>)}
                        <DataGrid
                            localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
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