import React, { Component } from 'react';

import './Style/App.css';

import BusNumber from './Components/BusNumber';
import BusStopNumber from './Components/BusStopNumber';
import BusTime from './Components/BusTime';

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {

  handleButtonClick = () => {
    console.log('clicked')
  }

  render() {
    return (
      <div className="App">
        <div id='container'>
          <div id='bus_number' className='outer_container_styling'>
            <BusNumber handleButtonClick={this.handleButtonClick} />
          </div>

          <div id='bus_stop_number' className='outer_container_styling'>
            <BusStopNumber handleButtonClick={this.handleButtonClick} />
          </div>

          <div id='bus_time' className='btn_styling mic_img' className='outer_container_styling'>
            <BusTime />
          </div>
        </div>
      </div >
    );
  };
};

export default App;
