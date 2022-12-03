import { Stack } from '@mui/system';
import Title from '../atoms/Title';

export default function ListHeader(props){

    return(
        <Stack direction="row" justifyContent="space-between" spacing={2}>
            <Title text={props.title}/>
            {props.children}
        </Stack>
    )
}