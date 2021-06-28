import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';
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
function BarChart() {
    const classes = useStyles();
    const data = useData();


    if (!data) {
        return <Backdrop className={classes.backdrop} open={true} >
            <CircularProgress color="inherit" />
        </Backdrop>
    }





    return (
        <div className="svg-container">
            <ToolBarSpace />
    
                <DrawBarChart data={data} />
          
        </div>
    )

}

export default BarChart;