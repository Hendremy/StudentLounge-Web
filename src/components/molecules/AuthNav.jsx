import AuthNavPrivate from "./AuthNavPrivate";
import AuthNavPublic from "./AuthNavPublic";

export default function AuthNav({user, logout}){
    if(user){
        return <AuthNavPrivate user={user} logout={logout} />;
    }else{
        return <AuthNavPublic/>
    }
}