import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigContainer from './PigContainer'
import Filter from './Filter'
import Sort from './Sort'
import PigDetail from './PigDetail'

class App extends Component {
  constructor(){
    super()
    this.state= {
      allPigs: hogs,
      selectedRatio: 'none',
      sortedBy: 'none',
      currentPig: null
    }
  }

  handleClick = (e)=>{
    this.setState({
      currentPig: hogs.find(hog=> e.currentTarget.id === hog.name)
    })
  }

  handleSort = (e)=>{
    this.setState({
      sortedBy: e.target.value
    },
    this.sort()
  )}

  compareNames =(a,b)=>{
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}


  sort = ()=>{
    if(this.state.sortedBy === 'name'){
      this.state.allPigs.sort(this.compareNames)
    }
    else if(this.state.sortedBy === 'weight'){
      this.state.allPigs.sort((a, b)=> parseInt(a.weight) - parseInt(b.weight))
    }
  }

  handleChange = (filter)=>{
    this.setState({
      selectedRatio: filter
    },
    this.pigs())
  }

  pigs = ()=>{

    if (this.state.selectedRatio === 'none'){
      this.setState({allPigs: hogs})
    }
    else if(this.state.selectedRatio === 'true'){
      this.setState({allPigs: hogs.filter(hog=>hog.greased === true)})
    }
    else if(this.state.selectedRatio === 'false'){
      this.setState({allPigs: hogs.filter(hog=>hog.greased === false)})
    }
  }


  render() {
    return (
      <div className="App">
          <Nav />
          {(this.state.currentPig !== null) ? <PigDetail pig={this.state.currentPig}/> : null}
          <Sort handleSort ={this.handleSort} sortedBy={this.state.sortedBy} />
          <Filter handleChange ={this.handleChange} />
          <PigContainer handleClick={this.handleClick} hogs={this.state.allPigs} />
      </div>
    )
  }
}

export default App;
