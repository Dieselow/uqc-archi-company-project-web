import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './header.style';
import { CustomButton } from '../customButton/customButton';
import { Link } from "react-router-dom";

type Props = {
}


export const Header = (props: Props) => {
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (
        <Box className={classes.box}>
            <Link className={classes.link} to="/login">Register/Login</Link>
        </Box>
    );
}