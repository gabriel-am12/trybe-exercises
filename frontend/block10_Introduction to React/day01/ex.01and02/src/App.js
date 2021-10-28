import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tasks = ['cozinhar', 'lavar', 'podar', 'etc'];

class Appl extends React.Component {
  render() {
    return (
      <ul>{tasks.map((task) => Task(task))}</ul>
    );
  }
}

function App() {
  return (
    <Appl/>
  );
}

export default App;
