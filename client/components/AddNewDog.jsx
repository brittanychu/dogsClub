import React from 'react';

export default class AddNewDog extends React.Component {

  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    console.log(e.target.value)
    this.setState({})
  }
  
  render(){
    const {createDog} = this.props
    return (
      <form>
        <label> Name: </label>
        <input name="name" onChange={this.handleChange}/>
        <label> Image Url: </label>
        <input name="image"/>
        <button onSubmit={createDog}> Submit </button>
      </form>
      )
  }
}

