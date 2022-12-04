import { Box } from "@mui/system";
import AdminNavs from '../molecules/AdminNavs';
import StudentNavs from '../molecules/StudentNavs';
import AnonymNavs from '../molecules/AnonymNavs';

export default function MenuNav(props){
    const user = props.user;
    const style = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems:'center',
        width:1/5
    }

    const navs = [];

    if(user){
        if(user.isAdmin){
            navs.push(<AdminNavs/>);
        }
        if(user.isStudent){
            navs.push(<StudentNavs/>);
        }
    }else{
        navs = <AnonymNavs/>
    }

    return (
        <Box sx={style}>
            {navs}
        </Box>
    );
};