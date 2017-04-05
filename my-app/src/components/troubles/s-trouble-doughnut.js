import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: [
    'Не решены',
    'Решены',
    'В обработке'
  ],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor: [
    '#ce413e',
    '#a6cf50',
    '#3972b6'
    ],
    hoverBackgroundColor: [
    '#ce413e',
    '#a6cf50',
    '#3972b6'
    ]
  }]
});

export default React.createClass({
  displayName: 'STroubleDoughnut',

	getInitialState() {
		return getState();
	},

	componentWillMount() {
		setInterval(() => {
			this.setState(getState());
		}, 5000);
	},

  render() {
    return (
      <div>
        <Doughnut
        data={this.state}
        width={380}
        height={320} />
      </div>
    );
  }
});
