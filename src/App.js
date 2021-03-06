import React, { Component } from 'react';


import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

class App extends Component {

  constructor() {
    super();

    this.state = {
      members: [],
      searchField: ''
    };

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({members: users}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  };

  render() {
    const { members, searchField } = this.state;
    const filteredMembers = members.filter(member => member.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={this.handleChange}/>
      <CardList members={filteredMembers}></CardList>
    </div>
  );
}
}

export default App;
