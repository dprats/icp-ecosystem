import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PeopleIcon from '@material-ui/icons/People';

//Icons used in the drawer
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import AppsIcon from '@material-ui/icons/Apps';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AppsIcon />
      </ListItemIcon>
      <ListItemText primary="Canisters" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeveloperModeIcon />
      </ListItemIcon>
      <ListItemText primary="Motoko repos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Developers on Forum" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AllInclusiveIcon />
      </ListItemIcon>
      <ListItemText primary="Grants Submitted" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AllInclusiveIcon />
      </ListItemIcon>
      <ListItemText primary="Grants Approved" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Documentation</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="FAQs" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Candid inteface" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Canister code" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Tutorials" />
    </ListItem>
  </div>
);