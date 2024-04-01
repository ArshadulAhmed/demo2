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


export function CurrenyChart() {
    const dispatch = useDispatch()
    const currency = useSelector((state) => state.currency);
    let dataToDisplay = _.get(currency, 'data', []);

    useEffect(() => {
        dispatch(currencyData())
    }, [])
    const labels = Object.keys(dataToDisplay);

    const data = labels.map(label => dataToDisplay[label]?.rate_float)

    const colorBycurrency = {
        "USD": "#007534",
        "GBP": "#99c32c",
        "EUR": "#00ff72"
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