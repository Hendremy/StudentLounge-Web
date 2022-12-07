import LabelIconButton from '../atoms/LabelIconButton';
import { useState } from 'react';

export default function OpenModalButton(props){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        props.onClose();
    };

    const Icon = props.icon;
    const Modal = props.modal;

    return(
        <>
            <LabelIconButton onClick={handleOpen} text={props.text} icon={Icon}/>
            <Modal open={open} onClose={handleClose} repository={props.repository} callback={props.callback}/>
        </>
    );
}