import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: [''],
  datasets: [
    { label: 'Оплачено',
      backgroundColor: '#a6cf50',
      borderColor: '#a6cf50',
      borderWidth: 1,
      hoverBackgroundColor: '#a6cf50',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [20]
    },
    { label: 'Выполнено',
      backgroundColor: '#715198',
      borderColor: '#715198',
      borderWidth: 1,
      hoverBackgroundColor: '#715198',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [40]
    },
    { label: 'Направлено заказчику',
      backgroundColor: '#ffff05',
      borderColor: '#ffff05',
      borderWidth: 1,
      hoverBackgroundColor: '#ffff05',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65]
    },
    { label: 'Просрочено',
      backgroundColor: '#ce413e',
      borderColor: '#ce413e',
      borderWidth: 1,
      hoverBackgroundColor: '#ce413e',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [5]
    },
    { label: 'Текущие',
      backgroundColor: '#3972b6',
      borderColor: '#3972b6',
      borderWidth: 1,
      hoverBackgroundColor: '#3972b6',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [35]
    }
  ]
};

export default React.createClass({
  displayName: 'BarTerms',

  render() {
    return (
      <div>
        <Bar
          data={data}
          width={750}
          height={600}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
});
