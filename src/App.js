import React from "react";
import "./Chart.scss";
import { Route, Switch } from "react-router-dom";
import CustomDrawer from "./Components/Drawer/CustomDrawer";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BarChart from './Components/BarChart/BarChart'
import WorldMapMissingMigrants from './Components/FreeCodeCamp/WorldMapMissingMigrants/WorldMapMissingMigrants'
import { useData } from './Components/BarChart/useData'
import { AppBar, Toolbar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import BarChartLabourForce from './Components/Charts/BarChartLabourForce/BarChartLabourForce'
import ScatterPlotCountry from "./Components/Charts/ScatterPlot/ScatterPlotCountry";
import { useDataScatter } from "./Components/Charts/ScatterPlot/use-data-scatter";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex"
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

export default function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const chart_data_4 = useDataScatter()

  if(!chart_data_4){
    return null;
  }
  return (
    <div className={classes.container}>

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <CustomDrawer setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />

      <Switch>
        <Route exact from="/" render={props => <WorldMapMissingMigrants {...props} />} />
        <Route exact path="/barChart/1" render={props => <BarChart   {...props} />} />
        <Route exact path="/barChart/2" render={props => <BarChartLabourForce  {...props} />} />
        <Route exact path="/scatterPlot/1" render={props => <ScatterPlotCountry data={chart_data_4}  {...props} />} />
      </Switch>

    </div>
  );
}
