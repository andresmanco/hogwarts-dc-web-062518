import React, {Component} from 'react'

export default class PigDetail extends Component{
  constructor(props){
    super(props)
  }

  getImage = ()=>{
    let imgName = this.props.pig.name.toLowerCase().split(' ').join('_')
    return require(`../hog-imgs/${imgName}.jpg`)
  }


  render(){
    return(
      <div className='pigTile'>
      <h3>{this.props.pig.name}</h3>
      <p>Specialty: {this.props.pig.specialty}</p>
      <img src={this.getImage()} alt="pig pic" />
      <h3>{this.props.pig.weight}</h3>
      </div>
    )
  }
}
