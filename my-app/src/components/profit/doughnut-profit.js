import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: [
    'Невыполненные работы',
    'Выполненные работы'
  ],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(150, 200)],
    backgroundColor: [
    '#ce413e',
    '#3972b6'
    ],
    hoverBackgroundColor: [
    '#ce413e',
    '#3972b6'
    ]
  }]
});

export default React.createClass({
  displayName: 'DoughnutProfit',

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
        width={650}
        height={450} />
      </div>
    );
  }
});
