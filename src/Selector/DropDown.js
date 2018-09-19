import React, { Component, Fragment } from 'react';
import { withStore } from '../Store';

class DropDown extends Component {

    render() { 
        const {handleDropDown, types, selected, categories, labels} = this.props
        return (
            <div>
                {types.map(({id, name}) => 
                <Fragment>
                    <label htmlFor={name}>{labels[name]}</label>
                        <select
                            key={id}
                            value={categories[name].find(category => category.name === selected[name])} 
                            name={name} 
                            id={name}
                            onChange={handleDropDown}>
                            {categories[name].map(({id, name}) => <option key={id} value={id}>
                            {name}
                        </option> ) }
                    </select>
                </Fragment>
                )}
            </div> 
        );
    }
}
export default withStore(DropDown);