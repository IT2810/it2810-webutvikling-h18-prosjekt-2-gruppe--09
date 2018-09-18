import React, { Component } from 'react';
import { withStore } from '../Store';

class Selector extends Component {

    render() { 
        const {handleDropDown, picture, categories} = this.props
        return (
            <div>
                <select
                onChange={handleDropDown}
                value={picture}
                name="picture"
                >
                {categories.map(({id, name}) => <option key={id} value={id}>
                        {name}
                    </option> ) }
                </select>
            </div>
        );
    }
}
export default withStore(Selector);