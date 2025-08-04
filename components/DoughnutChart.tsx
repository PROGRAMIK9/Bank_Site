'use client' 
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React from 'react'
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}:DoughnutChartProps) => {
  const data = {
    datasets: [
        {
            label:"Banks",
            data: [1250,1300,1000],
            backgroundColor: ["red", "blue", "green"],
        }
    ],
    labels: ['Bank A', 'Bank B', 'Bank C']
  };
   return (
    <Doughnut data ={data}
    options={
        {
            cutout:"60%",
            plugins:{
                legend:{display:false}
            }
        }
    }
    />
  )
}

export default DoughnutChart