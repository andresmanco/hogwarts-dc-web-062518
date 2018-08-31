import React, {Component} from 'react'
export default class Pig extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  getImage = ()=>{
    let imgName = this.props.hog.name.toLowerCase().split(' ').join('_')
    return require(`../hog-imgs/${imgName}.jpg`)
  }

  render(){

    return(
      <div id={this.props.hog.name} className='pigTile' onClick={this.props.handleClick}>
        <h2>{this.props.hog.name}</h2>
        <img src={this.getImage()} alt="pig pic" />
        <h3>{this.props.hog.weight}</h3>
      </div>
    )
  }
}
