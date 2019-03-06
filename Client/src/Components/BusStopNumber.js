import React, { Component } from 'react'

import '.././Style/App.css'

/**
 * @class BusStopNumber
 * @extends {Component}
 */
class BusStopNumber extends Component {
    render() {
        const { handleButtonClick } = this.props
        return (
            <button onClick={handleButtonClick} className='btn_styling' name='busStopNumber'>
                <i className="fas fa-microphone-alt mic_img" name='busStopNumber'></i>
            </button>
        );
    }
};

export default BusStopNumber