import * as d3 from 'd3';
import React, { useRef, useEffect, useState } from 'react';
import DrawBarChart from './DrawBarChart';
import { useData } from './useData';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import ToolBarSpace from '../Drawer/ToolBarSpace';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));
const initialSelectedValue = 5;
function BarChart({ size }) {

    const [selectedValue, setSelectedValue] = useState(initialSelectedValue);
    const classes = useStyles();
    const data = useData(selectedValue);



    if (!data) {
        return <Backdrop className={classes.backdrop} open >
            <CircularProgress />
        </Backdrop>;
    }



const handleSelectedValue=(d)=>{

    setSelectedValue(d)
}

    return (

        <DrawBarChart
            size={size}
            data={data}
            selectedValue={selectedValue}
            setSelectedValue={handleSelectedValue}
        />

    )

}

export default BarChart;