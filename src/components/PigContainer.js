import React, {Component} from 'react'
import Pig from './Pig'

export default class PigContainer extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){

    return(
      <div>
      {this.props.hogs.map(hog=>{
        return <Pig hog={hog} key={hog.name} handleClick = {this.props.handleClick}/>
      })}
      </div>
    )
  }
}
