import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['План', 'Факт', 'Недополучено'],
  datasets: [
    { label: '',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80]
    }
  ]
};

export default React.createClass({
  displayName: 'BarExample',

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