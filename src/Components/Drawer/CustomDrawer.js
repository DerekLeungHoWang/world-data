import React from "react";
import {
  Drawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  ListSubheader,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { withRouter } from "react-router-dom";
import Hidden from '@material-ui/core/Hidden';
import { multipleViewList, barChartList, scatterPlotList, bubbleChartList } from "./ItemList";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({

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

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    height: "100vh"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listItemText: {
    fontWeight: 900
  }
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
    nameList: scatterPlotList
  },
  {
    category: "Bubble Chart",
    nameList: bubbleChartList
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
      {chartItemList.map(({ category, nameList }) => (<List key={category} subheader={<ListSubheader style={{ fontWeight: "600", }} >{category}</ListSubheader>}>
        {nameList.map(({ text, icon, redirect_url }, index) => (
          <ListItem key={index} button key={text} onClick={() => history.push(redirect_url)}>
            <ListItemText
              disableTypography
              primary={<Typography variant="body2"
                style={{
                  fontFamily: 'Segoe UI',

                  color: '#646e73',

                }}>{text}</Typography>} />
          </ListItem>
        )
        )}
      </List>))
      }
    </>)
  return (

    <>
      <Hidden smUp implementation="css">
        <Drawer

          variant="temporary"

          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            root: classes.drawer,
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
            root: classes.drawer,
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

