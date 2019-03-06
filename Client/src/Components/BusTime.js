import React, { Component } from 'react'

import '.././Style/App.css'

/**
 *
 *
 * @class BusTime
 * @extends {Component}
 */
class BusTime extends Component {
    render() {
        const { handleButtonClick } = this.props
        return (
            <button className='btn_styling' onClick={handleButtonClick} name='busTime'>
            "Bus time information will display here"
            </button> 
        );
    };
};

export default BusTime;