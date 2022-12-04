import AuthNavPrivate from "./AuthNavPrivate";
import AuthNavPublic from "./AuthNavPublic";

export default function AuthNav(props){
    const user = props.user;
    if(user){
        return <AuthNavPrivate user={user} />;
    }else{
        return <AuthNavPublic/>
    }
}