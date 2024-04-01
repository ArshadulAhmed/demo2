import React, { useEffect } from "react";
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import  {popoulationData}  from "../../redux/reducers/populationSlice";
import "../../assets/scss/populationChartWrapper.scss"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false,
    },
  },
};


export function PopulationChat() {
    const dispatch = useDispatch()
    const population = useSelector((state)=> state.population);
    let dataToDisplay = _.get(population, 'data', []);

    useEffect(()=>{
        dispatch(popoulationData())
    },[])

    dataToDisplay = _.size(dataToDisplay) > 0 && dataToDisplay.slice().reverse().map(obj=> ({...obj}))


     const data = {
        labels:  dataToDisplay && dataToDisplay.map((item) => item.Year),
        datasets: [
          {
            data: dataToDisplay && dataToDisplay.map((item) => item.Population),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };




  return (
    <div className="populationChartWrapper">
        <div className="topBlock">
           <p>Population Details</p>
           <div className="countryName">
            <p>USA</p>
            <p>Canada</p>
            <p>India</p>
            <p>Australia</p>
           </div>
        </div>
        <Line options={options} data={data} />
        <div className="bottomBlock">
            <p>Get in depth charts in Trade</p>
            <p className="buttonPrimary">Trade</p>
        </div>
    </div>
  );

}
