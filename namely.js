import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Search from './Search';
import './styles.css';

class App extends Component {
  state = {
    result: []
  };
  
  handleSearch = search => {
    fetch(`https://swapi.co/api/people/?search=${search}`)
      .then(response => response.json())
      .then(response => {
        this.setState({result: response.results})
        console.log(this.state.result[0].name)
      });
  };

  render() {
    const birthyears = {};
    for (let i = 0; i < this.state.result.length; i++) {
      birthyears[i] = false;
    };
    console.log(birthyears)
    return (
      <main className="container">
        <Search onSearch={this.handleSearch} />
        {this.state.result.map((e, i) => {
          return (
          <li key={e.url}> 

          <button onClick={(e) => {
           birthyears[i] = true;
          }}>{e.name}</button>
          {birthyears[i] && e.birth_year}
          </li>
          )
        })}
      </main>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
