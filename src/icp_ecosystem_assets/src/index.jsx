import * as React from "react";
import { render } from "react-dom";
import { icp_ecosystem } from "../../declarations/icp_ecosystem";

//Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dashboard from './Dashboard';







//Import components locally 
import { mainListItems, secondaryListItems } from './listItems';


import Badge from '@material-ui/core/Badge';


const MyApp = () => {

  return (
      <div>
        <Dashboard />
      </div>
    );
};

render(<MyApp />, document.getElementById("app"));