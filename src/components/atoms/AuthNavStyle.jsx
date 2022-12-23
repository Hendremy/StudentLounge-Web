import {Box} from "@mui/system";

export default function AuthNavStyle({children}){
    const style = {
        display:'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }

    return(
        <Box style={style}>
            {children}
        </Box>
    );
}
