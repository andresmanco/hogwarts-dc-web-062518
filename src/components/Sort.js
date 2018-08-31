import React, {Component} from 'react'

export default class Sort extends Component{
  constructor(props){
    super(props)

  }

  render(){
    return(
      <select value={this.props.sortedBy} onChange={this.props.handleSort}>
        <option defaultValue value="none">None</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    )
  }
}
