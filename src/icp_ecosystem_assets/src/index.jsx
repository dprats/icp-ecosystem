import * as React from "react";
import { render } from "react-dom";
import { icp_ecosystem } from "../../declarations/icp_ecosystem";

const MyHello = () => {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  async function doGreet() {
    const greeting = await custom_greeting.greet(name);
    setMessage(greeting);
  }

  return (
    <div style={{ "fontSize": "30px" }}>
    <img src="logo.png" alt="DFINITY logo" />

    <h2>Internet Computer: Ecosystem Stats</h2>
    <ul>
        <li>
            <a class="link-overflow" href="https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.ic0.app/?id=kku2c-eqaaa-aaaah-qaitq-cai">Query data directly via canister's candid file</a> 
            <p>Pro tip: call `get_all_canister_stats` method to get the canister data set</p>
        </li>
        <li>
            <a class="link-overflow" href="https://github.com/dprats/ecosystem_stats">Review the code</a>
        </li>
    </ul>


    <p><a href="https://ic.rocks/charts/canisters">Canisters</a> deployed</p>
    <canvas id="line-chart-canisters" width="800" height="450"></canvas>
    
    <canvas id="line-chart-motoko-repos" width="800" height="450"></canvas>
    
    <p>Members on developers forum: <a href="https://forum.dfinity.org/">https://forum.dfinity.org/</a></p>
    <canvas id="line-chart-members-on-forum" width="800" height="450"></canvas>
    
    <p><a href="https://dfinity.org/grants/">Grant applications submitted…</a> to DFINITY Foundation</p>
    <canvas id="line-chart-dfinity-grants-submmitted" width="800" height="450"></canvas>

    <p><a href="https://dfinity.org/grants/">Grant applications approved</a> by DFINITY Foundation</p>
    <canvas id="line-chart-dfinity-grants-approved" width="800" height="450"></canvas>
    </div>
  );
};

render(<MyHello />, document.getElementById("app"));