import { Bar } from 'react-chartjs-2';
import React, { useState } from 'react';

import './chartJS.css';



const ChartJS: React.FC = (props) => {

    //Set Data for Bar Chart. In Realtime you may bing this using the data coming from API or service. 
    const barChartData = {
    labels: ['S', 'M', 'T', 'W', 'R', 'F', 'S'],
    datasets: [
      {
        label: 'Score',
        backgroundColor: 'rgba(0,141,201,0.2)',
        borderColor: 'rgba(0,141,201,0.0)',
        borderWidth: 0,
        borderRadius: 4,
        hoverBackgroundColor: 'rgba(0,141,201,1)',
        hoverBorderColor: 'rgba(255,99,132,0.0)',
        hoverBorderWidth: 0,
        data: [14, 15, 20, 26, 29, 30, 26]
      }
    ]
    };
    
    
    
    return (


              <div className="history-bar-chart">
                <Bar data={barChartData}
                    options={{ maintainAspectRatio: true, responsive: true, legend: {display: false}, scales: {
                        xAxes: [{ gridLines: { display:false } }] }}}   />
              </div>
        
           
    );
    };
    
    export default ChartJS;