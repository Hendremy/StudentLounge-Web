import { Modal } from "@mui/material";
import { Stack } from "@mui/system";
import { palette } from "../../appTheme";

export default function CenteredModal({children, open, onClose}){
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30vw',
        bgcolor: palette.primary,
        borderRadius: '25px',
        boxShadow: 24,
        p: 4,
      };

    return(
        <Modal open={open} onClose={onClose}> 
            <Stack direction={'column'} sx={style}>
                {children}
            </Stack>
        </Modal>
    );
}