import {useAtom} from "jotai";
import {userAtom} from "../../stores/studentStore";
import AuthNavPrivate from "./AuthNavPrivate";
import AuthNavPublic from "./AuthNavPublic";

export default function AuthNav(){
    const [user, setUser] = useAtom(userAtom);

    if(user !== null){
        return <AuthNavPrivate/>
    }else{
        return <AuthNavPublic/>
    }
}