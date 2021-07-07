import React from 'react';

import { makeStyles, Box, Typography} from '@material-ui/core';

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

const useStyles = makeStyles({})

export default function Content(){
const classes = useStyles();

return(
<Box className={classes.scheduleContainer}>
    <Box className={classes.schedule}>
        <Typography variant="h6">
            {"Schedule: "}
        </Typography>
        <Typography variant="h6">
            {"Week"}
        </Typography>
        <ExpandMoreIcon />
    </Box>

    <Box className={classes}></Box>
</Box>
);
}