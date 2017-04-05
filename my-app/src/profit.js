import React, { Component } from 'react';
import './App.css';
import BarProfit from './components/profit/bar-profit';
import LineProfit from './components/profit/line-profit';
import DoughnutProfit from './components/profit/doughnut-profit';


class Profit extends Component {
  render() {
    return (
      <div className="App profit">

        <div className="App-divs">
          Прибыль (млн. руб.)
          <BarProfit />
        </div>
        <div className="App-divs">
          Выполнение плана реализации за 2016 год (млн. руб)
          <LineProfit />
        </div>
        <div className="App-divs">
          Недополучено денежных средств (млн. руб)
          <DoughnutProfit />
        </div>
      </div>
    );
  }
}

export default Profit;
