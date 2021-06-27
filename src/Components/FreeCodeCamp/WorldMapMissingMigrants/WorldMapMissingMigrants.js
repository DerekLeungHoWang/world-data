import React, { useEffect, useState } from 'react';
import './WorldMap.scss';
import { Marks } from './BubbleMap/Marks';

import * as d3 from 'd3';
import { useWorldAtlas } from './useWorldAtlas';
import { useData } from './useData';
import DateHistogram from './DateHistoGram/DateHistogram'
import Typography from '@material-ui/core/Typography';
import { BubbleMap } from './BubbleMap';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import ToolBarSpace from '../../Drawer/ToolBarSpace';


const width = 960;
const height = 500;
const dateHistoGramSize = 0.2
const xValue = d => d['Reported Date']
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
 

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
function WorldMapMissingMigrants() {
  const data = useData()
  const worldAtlas = useWorldAtlas()
  const classes = useStyles();
  const [brushExtent, setBrushExtent] = useState()




  if (!worldAtlas || !data) {
    return (<Backdrop className={classes.backdrop} open={true} >
      <CircularProgress color="inherit" />
    </Backdrop>)
  }
  const filteredData = brushExtent ? data.filter(d => {
    const date = xValue(d)
    return date > brushExtent[0] && brushExtent[1]
  }) : data



  return (
    <main className={classes.content}  >
      <ToolBarSpace />
      <svg className="missingMigrants" width={width} height={height}>
        <BubbleMap worldAtlas={worldAtlas} data={data} filteredData={filteredData} />
        <g transform={`translate(0,${height - height * dateHistoGramSize})`}>
          <DateHistogram data={data} width={width} height={height * dateHistoGramSize}
            setBrushExtent={setBrushExtent}
            xValue={xValue}
          />
        </g>
      </svg>
    </main>




  );
}

export default WorldMapMissingMigrants;
