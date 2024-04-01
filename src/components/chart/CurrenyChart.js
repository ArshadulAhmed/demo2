import React, { useEffect } from 'react';
import _ from 'lodash'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { currencyData } from "../../redux/reducers/currencySlice";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    cutout: '60%',
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false,
        },
    },
};

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export function CurrenyChart() {
    const dispatch = useDispatch()
    const currency = useSelector((state) => state.currency);
    let dataToDisplay = _.get(currency, 'data', []);
    console.log("dataToDisplaydataToDisplaydataToDisplay", dataToDisplay)

    useEffect(() => {
        dispatch(currencyData())
    }, [])
    const labels = Object.keys(dataToDisplay);

    const data = labels.map(label => dataToDisplay[label]?.rate_float)
    console.log("labelslabelslabelslabels", labels, data)


    const colorBycurrency = {
        "USD": "#FF6384",
        "GBP": "#36A2EB",
        "EUR": "#FFCE56"
    }

    const backgroundColor = labels.map(label => colorBycurrency[label])

    const chartData = {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: backgroundColor
        }]
    }

    const chartBlock = <div className='doughnutChartListInner'>
        <div className='left'>
        {
            labels.map(item => (
                
                    <div className='leftOuter'>
                        <div style={{ backgroundColor: colorBycurrency[item], width:'10px', height:"10px"}} className='colourBlock'></div><p>{item}</p>
                    </div>
               
            ))
        }
        </div>
        <div className='right'>
        {
            data.map(item => (
                
                    <p>{item}</p>
                
            ))
        }
        </div>
       

    </div>

    return (
        <div className="populationChartWrapper doughnutChart">
            <div className="topBlock">
                <p>Wallet Balance</p>
            </div>
            <div className='doughnutDiv'>
                <Doughnut
                    options={options}
                    data={chartData}
                    width={150}
                    height={150}
                />
                
            </div>
            <div className='doughnutChartList'>
            {chartBlock}
            </div>
            <div className="bottomBlock">
                <p className="buttonPrimary">Manage Wallet</p>
            </div>
        </div>
    )

}