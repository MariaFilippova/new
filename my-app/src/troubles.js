import React, { Component } from 'react';
import './App.css';
import './components/troubles/troubles.css';
import STroubleDoughnut from './components/troubles/s-trouble-doughnut';
import LineDamages from './components/troubles/line-troubles';
import TableTroubles from './components/troubles/table';


class Troubles extends Component {
  render() {
    return (
      <div className="App">

        <div>
            <div className="App-divs STroubleDoughnut">
              Проблемы (шт)
              <STroubleDoughnut />
             </div>
            <div className="App-divs LineDamages">
             Убытки от проблем за 2016 год (млн. руб.)
             <LineDamages />
            </div>
        </div>
        <TableTroubles/>
      </div>
    );
  }
}

export default Troubles;
