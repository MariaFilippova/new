import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  datasets: [
    {
      label: 'Решенные проблемы',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#a6cf50',
      borderColor: '#a6cf50',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#a6cf50',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#a6cf50',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40, 25, 46, 21, 0, 5]
    },
    {
      label: 'Проблемы в обработке',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#3972b6',
      borderColor: '#3972b6',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#3972b6',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#3972b6',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data:[1, 2, 3, 54, 0, 4, 10, 40, 6, 28, 37, 29]
    },
{
  label: 'Нерешенные проблемы',
  fill: false,
  lineTension: 0.1,
  backgroundColor: '#ce413e',
  borderColor: '#ce413e',
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: '#ce413e',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: '#ce413e',
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
  data:[4,12,27,34,27,45,22,88,28,40,54,1]
}
]
};

export default React.createClass({
  displayName: 'LineDamages',

  render() {
    return (
      <div>
        <Line
        data={data}
        width={750}
        height={300} />
      </div>
    );
  }
});
