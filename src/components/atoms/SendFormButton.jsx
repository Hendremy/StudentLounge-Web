import { palette } from "../../AppTheme";
import { Button, Typography } from "@mui/material";

export default function SendFormButton({text}){
    const buttonStyle = {
        backgroundColor:'white',
        marginTop: 20,
        color:palette.secondary,
        borderRadius:10
    };

    return (
        <Button type='submit' color='primary' style={buttonStyle} fullWidth>
            <Typography fontSize={15} margin={"auto"}>{text}</Typography>
        </Button>
    );
}