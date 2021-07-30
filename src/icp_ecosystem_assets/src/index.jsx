import * as React from "react";
import { render } from "react-dom";
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { icp_ecosystem } from "../../declarations/icp_ecosystem";

const MyApp = () => {

  return (
    <div style={{ "fontSize": "30px" }}>
      <img src="logo.png" alt="DFINITY logo" />

      <h2>Internet Computer: Ecosystem Stats</h2>
      <ul>
          <li>
              <a href="https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.ic0.app/?id=kku2c-eqaaa-aaaah-qaitq-cai">Query data directly via canister's candid file</a> 
              <p>Pro tip: call `get_all_canister_stats` method to get the canister data set</p>
          </li>
          <li>
              <a href="https://github.com/dprats/ecosystem_stats">Review the code</a>
          </li>
      </ul>
    </div>
  );
};

render(<MyApp />, document.getElementById("app"));