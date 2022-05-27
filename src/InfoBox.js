import React from 'react';
import './InfoBox.css'
import { Card, CardContent, Typography } from '@mui/material';

function InfoBox({ title, cases, isRed, active, total, ...props }) {
    return (
        <Card onClick={props.onClick} className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`}>
            <CardContent>
                <Typography className='infoBox_title' color="textSecondary">{title} today</Typography>
                <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}>{cases}</h2>
                <Typography className='infoBox_total' color="textSecondary">Total: {total}</Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox