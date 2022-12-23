import { ApiServicesContext } from "../App";
import { useContext, useState, useEffect } from "react";
import roles from "../models/roles";
import UserList from "../components/organisms/UserList";

export default function AdminPage(){
    const adminApiServices = useContext(ApiServicesContext)[roles.admin];
    const usersRepository = adminApiServices.usersRepository;
    
    return (<UserList usersRepository={usersRepository}/>);
}