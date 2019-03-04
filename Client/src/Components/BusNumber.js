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
        console.log('this.props: ', this.props)
        return (
            <button onClick={handleButtonClick} className='btn_styling'>
                'Hello from Bus number '
            </button>
        );
    }

}

export default BusNumber;   