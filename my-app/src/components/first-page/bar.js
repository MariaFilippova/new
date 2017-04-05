import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: [''],
  datasets: [
    { label: 'План',
      backgroundColor: '#3972b6',
      borderColor: '#3972b6',
      borderWidth: 1,
      hoverBackgroundColor: '#3972b6',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65]
    },
    { label: 'Факт',
      backgroundColor: '#a6cf50',
      borderColor: '#a6cf50',
      borderWidth: 1,
      hoverBackgroundColor: '#a6cf50',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [80]
    },
    { label: 'Недополучено',
      backgroundColor: '#ce413e',
      borderColor: '#ce413e',
      borderWidth: 1,
      hoverBackgroundColor: '#ce413e',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [15]
    }
  ]
};

export default React.createClass({
  displayName: 'BarExample',

  onElementsClick: (elems) => {
    console.log("I'm here!");
  },

  render() {
    return (
      <div>
        <Bar
          data={data}
          width={550}
          height={400}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
});
