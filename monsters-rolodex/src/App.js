import React, { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component"
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      monsters: [],
      searchField: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {

    const { monsters, searchField} = this.state

    return (
      <div className="App">
      <input name="searchField" type="text" onChange={this.handleChange}/>
        <CardList monsters={monsters} searchMonster={searchField} />
      </div>
    )
  }
}

export default App;
