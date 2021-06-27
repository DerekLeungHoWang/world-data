import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    toolbar: theme.mixins.toolbar,
  
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));
export default function ToolBarSpace() {
    const classes = useStyles();
    return (
        <div className={classes.toolbar} />
    )
}
