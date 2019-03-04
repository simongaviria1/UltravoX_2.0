import React, { Component } from 'react'

import '.././Style/App.css'

/**
 * @class BusStopNumber
 * @extends {Component}
 */
class BusStopNumber extends Component {
    render() {
        const { handleButtonClick } = this.props
        console.log('this.props: ', this.props)
        return (
            <button onClick={handleButtonClick} class='btn_styling'>
                'Hello from Bus number '
            </button>
        );
    }
};

export default BusStopNumber