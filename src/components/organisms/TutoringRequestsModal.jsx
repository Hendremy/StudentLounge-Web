import CenteredModal from "../atoms/CenteredModal";
import Title from "../atoms/Title";
import { palette } from '../../AppTheme';
import { Box, List } from "@mui/material";
import { useState, useEffect } from "react";
import TutoringRequestRow from '../molecules/TutoringRequestRow';

export default function TutoringRequestsModal ({open, onClose, repository, data}){
    const lesson = data.lesson;
    const requests = data.requests;
    const boxStyle = {
        backgroundColor: palette.secondary,
        minHeight:'30vh',
        borderRadius: '5px'
    };

    return (
        <CenteredModal key={lesson.id} open={open} onClose={onClose}>
            <Title text={'Demandes de tutorats'}/>
            <Box sx={boxStyle}>
                <List>
                {
                    requests.map(
                        req => <TutoringRequestRow request={req} repository={repository} />)
                }
                </List>
            </Box>
        </CenteredModal>
    );
}