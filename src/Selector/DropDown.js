import React, {Component} from 'react'
import "./Selector.css"
import {withStore} from '../Store'

class DropDown extends Component {

  render() {
    const {
      handleDropDown, types, selected, categories, labels
    } = this.props
    return (
      <div className="dropdowns">
        {types.map(({
          id, name
        }) =>
          <div key={id}>
            <label htmlFor={name}>{labels[name]}</label>
            <select
              id={name}
              key={id}
              name={name}
              onChange={handleDropDown}
              value={categories[name].find(category => category.name === selected[name])}
            >
              {categories[name].map(({
                id, name
              }) =>
                <option
                  key={id}
                  value={id}
                >
                  {name}
                </option>
              )}
            </select>
          </div>
        )}
      </div>
    )
  }
}
export default withStore(DropDown)