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
            <button onClick={handleButtonClick} class='btn_styling'>
                <i class="fas fa-microphone-alt mic_img"></i>
            </button>
        );
    }
};

export default BusStopNumber