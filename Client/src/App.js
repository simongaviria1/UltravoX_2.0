import React, { Component } from 'react';
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import axios from 'axios'

import './Style/App.css';

import BusNumber from './Components/BusNumber';
import BusStopNumber from './Components/BusStopNumber';
import BusTime from './Components/BusTime';

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

const options = {
  autoStart: false
}

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      bustNumber: null,
      busStopNumber: null,
      busTime: null
    }
  }

  handleButtonClick = event => {
    console.log('handle click: ', event.target.name)
    this.state({
    })
  }

  render() {
    const {
      startListening,
      transcript,
      stopListening,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div className="App">
        {/* Change the font to a little something more assesable */}
        <h1 className='center'>UltravoX</h1>
        <div id='container'>

          {/* Renders the button for the bus number */}
          <div id='bus_number' className='outer_container_styling' >
            <BusNumber handleButtonClick={this.handleButtonClick} startListening={startListening} />
          </div>

          {/* Renders the bus stop code that could be found on the stop info hub */}
          <div id='bus_stop_number' className='outer_container_styling'>
            <BusStopNumber handleButtonClick={this.handleButtonClick} />
          </div>

          {/* Renders the minutes left until the next available bus */}
          <div id='bus_time' className='outer_container_styling'>
            <BusTime handleButtonClick={this.handleButtonClick} />
          </div>
        </div>
      </div >
    );
  };
};

App.propTypes = propTypes
export default SpeechRecognition(options)(App);
