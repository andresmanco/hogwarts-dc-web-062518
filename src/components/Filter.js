import React, {Component} from 'react'

export default class Filter extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className='filterWrapper' onChange={(e)=> {
        e.stopPropagation()
        this.props.handleChange(e.target.value)}}>
        <input type="radio" name='radio' value='none' defaultChecked={true} />
        None
        <br/>
        <input type="radio" name='radio' value='true' />
        Grease
        <br/>
        <input type="radio" name='radio' value='false' />
        Ungrease
      </div>
    )
  }
}
