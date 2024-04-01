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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

export function PopulationChat() {
    const dispatch = useDispatch()
    const population = useSelector((state)=> state.population);
    let dataToDisplay = _.get(population, 'data', []);

   
 
    
 
    useEffect(()=>{
        dispatch(popoulationData())
    },[])

    dataToDisplay = _.size(dataToDisplay) > 0 && dataToDisplay.slice().reverse().map(obj=> ({...obj}))

    console.log("1111111111111111111111", dataToDisplay)



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




  return <Line options={options} data={data} />;

}
