import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader'
import Container from './components/contsiners'

class App extends React.Component {



gettingDate =  () => {
 fetch("http://localhost:3001/tasks.json").then(response => response.json())
  .then(data => {
    console.log(data);
  })
  
}

  render() {
    return (
      <div>
        <AppHeader />
        <Container containerMethod={this.gettingDate} />
      </div>
    );
  }
}
export default App;
