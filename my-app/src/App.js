import React, { Component } from 'react';
import './App.css';
import TroubleDoughnut from './components/first-page/trouble-doughnut';
import StageDoughnut from './components/first-page/stage-doughnut';
import BarExample from './components/first-page/bar';
import Troubles from './troubles.js';
import Profit from './profit.js';
import Terms from './terms.js';


class App extends Component {

onClick(a){
this.setState({active: a});
console.log('Hey1!');
}
  render() {
    return (
      <div className="App">

      <div className="App-header">
        <h4 className="App-header-text">СППР</h4>
        <h5 className="App-header-text right"> Президент  |</h5>
        <h5 className="App-header-text">Солнцев Владимир Львович</h5>
      </div>
      <p className="App-intro">
        Личный кабинет президента корпорации
      </p>

        <div className="App-body">
          <div className="App-first-page">
            <div id="problems_page" className="App-divs" onClick={this.onClick.bind(this,1)}>
              Проблемы
              <TroubleDoughnut />
             </div>
            <div className="App-divs"  onClick={this.onClick.bind(this,2)} >
              Прибыль (млн. руб.)
              <BarExample />
            </div>
            <div className="App-divs" onClick={this.onClick.bind(this,3)} >
              Этапы
              <StageDoughnut />
            </div>
          </div>
          <div className={this.active !== 1? 'noDisplay' : ''}>
              <Troubles />
          </div>
          <div className={this.active !== 2? 'noDisplay' : ''}>
              <Profit />
          </div>
          <div className={this.active !== 3? 'noDisplay' : ''}>
              <Terms />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
