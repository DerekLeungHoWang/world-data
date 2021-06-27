import React from "react";
import {
  Drawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  ListSubheader
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { withRouter } from "react-router-dom";
import Hidden from '@material-ui/core/Hidden';
import { multipleViewList, barChartList ,scatterPlotList} from "./ItemList";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawerRoot: {
    width: "300px"
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 250,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


const chartItemList = [
  {
    category: "Multiple Views",
    nameList: multipleViewList
  },
  {
    category: "BarChart",
    nameList: barChartList
  },
  {
    category: "Scatter Plot",
    nameList:  scatterPlotList
  },
 
]

const CustomDrawer = ({ history, mobileOpen, setMobileOpen }) => {

  const classes = useStyles();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };




  const drawer = (
    <>
      <div className={classes.toolbar} />
      <Divider />
      {chartItemList.map(({ category, nameList }) => (<List subheader={<ListSubheader>{category}</ListSubheader>}>
        {nameList.map(({ text, icon, redirect_url }, index) => (
          <ListItem button key={text} onClick={() => history.push(redirect_url)}>
            <ListItemText primary={text} />
          </ListItem>
        )
        )}
      </List>))}
    </>)
  return (

    <>
      <Hidden smUp implementation="css">
        <Drawer

          variant="temporary"

          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            root: classes.drawerRoot,
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open

        >
          {drawer}
        </Drawer>
      </Hidden>

    </>

  );
};

export default withRouter(CustomDrawer);

