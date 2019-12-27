import React, { Component } from 'react';
import { SearchBox } from "./components/searchBox/SearchBox.component"
import { CardList } from "./components/card-list/card-list.component"
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {

    const { monsters, searchField } = this.state

    return (
      <div className="App">
        <SearchBox
          placeholderText="Search Monsters"
          handleChange={e => this.setState({searchField: e.target.value})}
        />
        <CardList monsters={monsters} searchMonster={searchField} />
      </div>
    )
  }
}

export default App;
