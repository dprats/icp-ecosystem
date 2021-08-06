import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import { icp_ecosystem } from "../../declarations/icp_ecosystem";
import Button from '@material-ui/core/Button';
import moment from 'moment';


// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];


export default function Chart(props) {
  const theme = useTheme();
  const [chartData, setChartData] = useState(['',0]);


  //Helper methods to fetch the data from the Canister
  async function getCanisterData () {
    console.log("calling canister data from chart component");
    const data = await icp_ecosystem.get_all_canister_stats ();
    const dataFormattedForChart = formatDataForChart(data);
    setChartData(dataFormattedForChart);
  }

  async function getMotokoReposData () {
    console.log("calling canister data from motoko Repos component");
    const data = await icp_ecosystem.get_all_motoko_repos_stats();
    const dataFormattedForChart = formatDataForChart(data);
    setChartData(dataFormattedForChart);
  }

  async function getCanisterData () {
    console.log("calling canister data from chart component");
    const data = await icp_ecosystem.get_all_canister_stats ();
    const dataFormattedForChart = formatDataForChart(data);
    setChartData(dataFormattedForChart);
  }

  async function getGrantsSubmitted() {
    console.log("calling canister data from grants submitted");
    const data = await icp_ecosystem.get_all_dfinity_grants_submmitted_stats ();
    const dataFormattedForChart = formatDataForChart(data);
    setChartData(dataFormattedForChart);
  }

  async function getGrantsApproved() {
    console.log("calling canister data from grants approved");
    const data = await icp_ecosystem.get_all_dfinity_grants_approved_stats ();
    const dataFormattedForChart = formatDataForChart(data);
    console.log(dataFormattedForChart);
    setChartData(dataFormattedForChart);
  }



  //UseEffect is used to kickstart a request to fetch the data which is the passed
  //via setChartData() to ChartData methos in the <LineChart /> component 
  useEffect(() => {
    switch (props.chartType) {
      case 'canisters': {
        getCanisterData();
        break;
      }
      case 'motokoRepos': {
        getMotokoReposData();
        break;
      }
      case 'grantsSubmitted': {
        getGrantsSubmitted();
        break;
      }
      case 'grantsApproved': {
        getGrantsApproved();
        break;
      }
      default: {
        break;
      }
    }
  },[]);


  return (
    <React.Fragment>
      {/* <Button variant="contained" onClick={getCanisterData}>Get Chart Data!</Button> */}

      <Title>Today</Title>

      <ResponsiveContainer>


        <LineChart
          data={chartData}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis 
            dataKey="time" 
            stroke={theme.palette.text.secondary} 
            tickFormatter = {(unixTime) => moment(unixTime).format("MMM Do YYYY")}s
            />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Canisters
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}


//HELPER FUNCTIONS


//Example input: [
//   ["1626134401", 1173n],
//   ["1625529601", 1036n]
// ]
const formatDataForChart = (arrayOfArrays) =>{
  const formattedArray = arrayOfArrays.map((arr) => {
    //format the value from BigInt (how its received from Candid file) to Int
    //rechart takes an "time" and "value" data so these variable names are deliberately chosen
    const timeInSeconds = Number(arr[0]); 
    const time = timeInSeconds * 1000; // new Date() takes milliseconds
    // console.log(` Evaluating time: ${time}`);
    const amount = Number(arr[1]);
    return { time, amount };
  })
  return formattedArray;
};