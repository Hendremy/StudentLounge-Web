import {useAtom} from "jotai";
import {connectedUser} from "../../AccountStore";
import AuthNavPrivate from "./AuthNavPrivate";
import AuthNavPublic from "./AuthNavPublic";

export default function AuthNav(){
    const [user, setUser] = useAtom(connectedUser);

    if(user !== null){
        return <AuthNavPrivate/>
    }else{
        return <AuthNavPublic/>
    }
}