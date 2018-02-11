import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import Dogs from './Dogs.jsx';
import AddNewDog from './AddNewDog.jsx';

export default class Main extends Component {
  constructor(){
    super()
    this.state = {
      dogs: [],
      clicked: false,
      newDog: {},
    }
    this.handleClickAllDogs = this.handleClickAllDogs.bind(this);
    this.createDog = this.createDog.bind(this);
  }

  componentDidMount(){
    axios.get('/api/dogs')
      .then(res => res.data)
      .then(dogs => this.setState({dogs}))
  }

  handleClickAllDogs(){
    console.log('clicked!')
    this.setState({clicked: true})
  }

  createDog(event){
    event.preventDefault();
    const form = event.target.parentNode;
    const newDog = {
      name: form.name.value,
      image: form.image.value
    }

    axios.post('/api/dogs', newDog)
      .then(res => res.data)
      .then(newDog => {
        this.setState({
          dog: [newDog, ...this.state.dogs]
        })
        console.log(this.state.dogs)
      })
  }

  render(){
    const {dogs, clicked} = this.state
    return (
      <div>
        <h1>DogsClub</h1>
        <Navbar handleClick={this.handleClickAllDogs}/>
        <AddNewDog createDog={this.createDog}/>
        {
          clicked ? <Dogs dogs={dogs} /> : null
        }
      </div>
    )
  }
}