import React, { Component } from 'react';

import '.././Style/App.css'

/**
 *
 *
 * @class BusNumber
 * @extends {Component}
 */

class BusNumber extends Component {
    constructor() {
        super();
        this.state = {
            listening: false
        }
    }

    render() {
        const { handleButtonClick } = this.props
        return (
            <button onClick={handleButtonClick} className='btn_styling' name='busNumber'>
                <i className="fas fa-microphone-alt mic_img" name='busNumber'></i>
            </button>
        );
    }

}

export default BusNumber;   