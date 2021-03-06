import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './consumableItem.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { api, getDetails} from '../../../utils/api/api';
import axios from 'axios';
import { bearerToken, Details, details } from '../../login/login';
import { EditConsumablePopUp } from '../editConsumablePopUp/editConsumablePopUp';

export type Consumable = {
	quantity: string,
	threshold: string,
	consumableType: {
	id: string
	}
}

type Props = {
    consumables: Consumable[],
    setConsumables : any,
    consumable: Consumable
}

export const ConsumableItem = (props: Props) => {
    const styleProps = {
    }
    const [open, setOpen] = React.useState(false);

    const classes = useStyles(styleProps);

    const onClickOpenUpdate = () => {
        console.log('on click !');
        setOpen(true);
    }

    const handleClose = (value: string) => {
        console.log(value);
        setOpen(false);
    }

    const onClickDelete = () => {
        console.log(props.consumable)
        console.log('Delete'); 
            console.log(api.consumable.delete + details.id.toString());
            axios.delete(api.consumable.delete + details.id.toString(),
                {
                    headers: {
                        Authorization: `Bearer ${bearerToken}`
                    }
                }).
                then((response: any) => {
                    alert('consumable deleted');
                    var tmp = props.consumables;
                    tmp = tmp.filter(x => x.consumableType?.id !== props.consumable.consumableType?.id);
                    props.setConsumables(tmp);
                    console.log(response);
                }).catch((reason: any) => {
                    alert(reason);
                });
    }

    const postUpdate= (consumable: Consumable) => {
        axios.put(api.consumable.update+details.id, consumable,
            {
                headers: {
                    Authorization: `Bearer ${bearerToken}`
                }
            }).then((response: any) => {
                console.log('Updated at: '+response.data);
            }).catch((reason: any) => {
                console.log(reason);
            });
    }

    const onClickUpdate = (value: any) => {
        props.consumable.quantity=value.quantity;
        props.consumable.threshold=value.treshold;
        postUpdate(props.consumable);
        console.log('on click !');
        setOpen(true);
    }

    return (<Box className={classes.box}>
        
        <Typography className={classes.typography}>
            Quantity: {props.consumable.quantity}
        </Typography>
        <Typography className={classes.typography}>
            Treshold: {props.consumable.threshold}
        </Typography>
         <CustomButton text={'Edit'} onClick={onClickOpenUpdate} style={button}/>
            <Dialog open={open} onClose={handleClose}>
                <EditConsumablePopUp onClick={onClickUpdate} consumable={props.consumable}/>
            </Dialog> 
         <CustomButton text={'Delete'} onClick={onClickDelete} style={button}/> 
    </Box>
    );
}
