import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: [
    'Оплачено',
    'Выполнено',
    'Направлено заказчику',
    'Просрочено',
    'Текущие'
  ],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250), getRandomInt(20, 230), getRandomInt(100, 150)],
    backgroundColor: [
    '#a6cf50',
    '#715198',
    '#ffff05',
    '#ce413e',
    '#3972b6'
    ],
    hoverBackgroundColor: [
    '#a6cf50',
    '#715198',
    '#ffff05',
    '#ce413e',
    '#3972b6'
    ]
  }]
});

export default React.createClass({
  displayName: 'DoughnutTerms',

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
        width={750}
        height={600}
         />
      </div>
    );
  }
});
