import * as React from "react";
import { render } from "react-dom";
import { icp_ecosystem } from "../../declarations/icp_ecosystem";


import CssBaseline from '@material-ui/core/CssBaseline';


import {
  Drawer, List, ListItem,
  ListItemIcon, ListItemText,
  Container, Typography,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'; //for the drawer
import clsx from 'clsx'; //for the drawer
import { makeStyles } from '@material-ui/core/styles'; //for the drawer
import Drawer from '@material-ui/core/Drawer'; //for the drawer
import List from '@material-ui/core/List'; //for the drawer
import Divider from '@material-ui/core/Divider'; //for the drawer
import IconButton from '@material-ui/core/IconButton'; //for the drawer
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'; //for the drawer
import { mainListItems, secondaryListItems } from './listItems'; //for the drawer
import HomeIcon from "@material-ui/icons/Home"; //for the drawer
import InfoIcon from '@material-ui/icons/Info'; //for the drawer
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AppBar from '@material-ui/core/AppBar';


//Custom-made components
import Chart from './Chart';
import Updates from './Updates';
import Box from '@material-ui/core/Box';
import Documentation from './Documentation';

//Icons used in the drawer
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import AppsIcon from '@material-ui/icons/Apps';
import PeopleIcon from '@material-ui/icons/People';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';




// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";


//Material UI Components
import CanisterDashboard from './CanisterDashboard';
import MotokoReposDashboard from './MotokoReposDashboard';
import GrantsSubmittedDashboard from './GrantsSubmittedDashboard';
import GrantsApprovedDashboard from './GrantsApprovedDashboard';

import AppBarComponent from './AppBarComponent';
// import DrawerComponent from './DrawerComponent';

//Styles for drawer 
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));


const MyApp = () => {

  const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
      <Router>

        <div className={classes.root}>
              <CssBaseline />

              {/* Appbar  */}
              <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    Internet Computer Ecosystem Metrics
                  </Typography>
                 
                </Toolbar>
              </AppBar>

              {/* Drawer that opens and closes for navigation */}
              <Drawer
                variant="permanent"
                classes={{
                  paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
              >
                <div className={classes.toolbarIcon}>
                  <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                  </IconButton>
                </div>

                
                <List>

                <Link to="/">
                    <ListItem button>
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItem>
                </Link>

                <Link to="/canisters">
                    <ListItem button>
                      <ListItemIcon>
                        <AppsIcon />
                      </ListItemIcon>
                      <ListItemText primary="Canisters" />
                    </ListItem>
                </Link>

                <Link to="/motoko-repos">
                  <ListItem button>
                    <ListItemIcon>
                      <DeveloperModeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Motoko repos" />
                  </ListItem>
                </Link>

                <Link to="/developers-forum">
                  <ListItem button>
                    <ListItemIcon>
                      <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Developers on Forum" />
                  </ListItem>
                </Link>

                <Link to="/grants-submitted">
                  <ListItem button>
                    <ListItemIcon>
                      <AllInclusiveIcon />
                    </ListItemIcon>
                    <ListItemText primary="Grants Submitted" />
                  </ListItem>
                </Link>

                <Link to="/grants-approved">
                  <ListItem button>
                    <ListItemIcon>
                      <AllInclusiveIcon />
                    </ListItemIcon>
                    <ListItemText primary="Grants Approved" />
                  </ListItem>
                </Link>

                <Link to="/documentation">
                  <ListItem button>
                    <ListItemIcon>
                      <LocalLibraryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Documentation" />
                  </ListItem>
                </Link>
                </List>
              </Drawer>

              <Switch>
                
                  <Route exact path="/">
                    <Container>
                      <img src="logo.png" alt="DFINITY logo" />
                      <Typography variant="h3" gutterBottom>
                        Introduction
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        This page is a community-managed dashboard of some simple metrics around community adoption of the Internet Computer. 
                        Some of these metrics are on-chain (e.g. <Link to="/canisters">canisters created</Link> created) and others are off-chain (e.g. <Link to="/motoko-repos">motoko repos</Link> on Github). 
                        
                        <h2>The Intent</h2>
                        The intent of this page is to give human-level visibility, a dashboard, for the community.

                        <br />
            
                        <h2>Transparency</h2>
                        One of the cool things about writing smart contract canisters, is that you get an outward-facing public API for free so 
                        for the sake of transparency and composability, you can use the same data that powers this web app. You will fins the following:
                        <br />
                        <br />
                        1. Frontend and backend code is availale 
                        <br />
                        2. Data that fuels this website is available through a public API so anybody in the community can query it.
                        <br />
                        <br />
                        <br />
                        You can read more in the <Link to="/documentation">documentation</Link> section. 

                        <h2>Related Projects</h2>
                        <ul>
                          <li><a href="https://dashboard.internetcomputer.org/">Internet Computer Dashboard</a></li>
                          <li><a href="https://ic.rocks/">ic.rocks</a></li>
                          <li><a href="https://www.dfinityexplorer.org/#/">Dfinity Explorer</a></li>
                          <li><a href="https://dfinity.org/showcase"> IC showcase apps</a></li>
                          <li><a href="https://github.com/dfinity/awesome-dfinity">Awesome Dfinity</a></li>
                        </ul>
      
                        
                      </Typography>
                    </Container>
                  </Route>

                  <Route exact path="/canisters">
                    <Container>
                      Canisters
                      <CanisterDashboard />

                    </Container>
                  </Route>

                  <Route exact path="/motoko-repos">
                    Motoko repos
                    <MotokoReposDashboard />
                  </Route>

                  <Route exact path="/developers-forum">
                    Developers Forum
                    <MotokoReposDashboard />
                  </Route>

                  <Route exact path="/grants-submitted">
                    Grants submitted
                    <GrantsSubmittedDashboard />
                  </Route>

                  <Route exact path="/grants-approved">
                    Grants Approved
                    <GrantsApprovedDashboard />
                  </Route>

                  <Route exact path="/documentation">
                    <Container>
                    <Documentation />
                    </Container>    
                  </Route>


                </Switch>
            </div>
     </Router>
    );
};

render(<MyApp />, document.getElementById("app"));





////DUMMY FUNCTIONS

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}