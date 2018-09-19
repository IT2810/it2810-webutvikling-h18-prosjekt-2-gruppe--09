import React, { Component } from 'react';
import { withStore } from '../Store';

class DropDown extends Component {

    render() { 
        const {handleDropDown, types, selected, categories} = this.props
        return (
            <div>
                {types.map(({id, name}) => <select key={id} value={categories[name].find(category => category.name === selected[name])} name={name} onChange={handleDropDown}>
                    {categories[name].map(({id, name}) => <option key={id} value={id}>
                        {name}
                    </option> ) }
                </select>)}
            </div>
        );
    }
}
export default withStore(DropDown);