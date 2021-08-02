import * as React from "react";
import { render } from "react-dom";
import { icp_ecosystem } from "../../declarations/icp_ecosystem";

//Material UI Components
import Dashboard from './Dashboard';

const MyApp = () => {

  return (
      <div>
        <Dashboard />
      </div>
    );
};

render(<MyApp />, document.getElementById("app"));