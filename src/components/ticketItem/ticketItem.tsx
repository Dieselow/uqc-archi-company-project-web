import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './ticketItem.style';
import { CustomButton } from '../customButton/customButton';
import { button } from '../../utils/customButton/customButtonHelper';
import {} from '../ticketItem/ticketItem.style';
export type Ticket = {
    name: string;
    data: string;
}

type Props = {
    ticket: Ticket
}

const onClickAccess = () => {

}
const onClickValidate = () => {

}
const onClickDelete = () => {

}
export const TicketItem = (props: Props) => {
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (<Box className={classes.box}>

        <Typography className={classes.typography}>
            {props.ticket.name}
        </Typography>
        <Typography className={classes.typography}>
            {props.ticket.data}
        </Typography>
        <CustomButton text={'Edit'} onClick={onClickAccess} style={button}/>
        <CustomButton text={'Validate'} onClick={onClickValidate} style={button}/>
        <CustomButton text={'Delete'} onClick={onClickValidate} style={button}/>

    </Box>
    );
}