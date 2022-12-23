import LabelIconButton from '../atoms/LabelIconButton';
import { useState } from 'react';

export default function OpenModalButton(props){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        if(props.onClose){
            props.onClose();
        }
    };

    const Icon = props.icon;
    const Modal = props.modal;

    return(
        <>
            <LabelIconButton onClick={handleOpen} text={props.text} icon={Icon}/>
            <Modal 
                open={open} 
                onClose={handleClose}
                data={props.data}
                repository={props.repository}  
                callback={props.callback}/>
        </>
    );
}