import React, { Component } from 'react';
import './App.css';
import BarTerms from './components/terms/bar-terms';
import DoughnutTerms from './components/terms/doughnut-terms';


class Terms extends Component {
  render() {
    return (
      <div className="App terms">
            <div className="App-divs">
              Состояние работ по этапам (шт)
              <DoughnutTerms />
             </div>
            <div className="App-divs">
             Распределение денежных средств по этапам (млн. руб.)
             <BarTerms />
            </div>
      </div>
    );
  }
}

export default Terms;
