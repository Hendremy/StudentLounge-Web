import CenteredModal from "../atoms/CenteredModal";
import Title from "../atoms/Title";
import { palette } from '../../appTheme';
import { Box, List } from "@mui/material";

export default function TutoringRequestsModal ({open, onClose, repository}){
    const boxStyle = {
        backgroundColor: palette.secondary,
        minHeight:'10vh',
        borderRadius: '5px'
    };

    return (
        <CenteredModal open={open} onClose={onClose}>
            <Title text={'Demandes de tutorats'}/>
            <Box sx={boxStyle}>
                <List>
                </List>
            </Box>
        </CenteredModal>
    );
}