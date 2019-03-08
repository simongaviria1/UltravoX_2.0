import React, { Component } from 'react';

import '.././Style/App.css'

/**
 *
 *
 * @class BusNumber
 * @extends {Component}
 */

class BusNumber extends Component {

    render() {
        const { handleButtonClick, startListening } = this.props
        return (
            <button onClick={startListening} className='btn_styling' name='busNumber'>
                <i className="fas fa-microphone-alt mic_img" name='busNumber'></i>
            </button>
        );
    }

}

export default BusNumber;   