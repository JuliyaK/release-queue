import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader'
import Container from './components/contsiners'

class App extends React.Component {

gettingDate = async (e) => {
  e.preventDefault();
  const api_url = await fetch("http://localhost:3001/tasks.json");
  const data = await api_url.json();
  console.log(data);
  
}

  render() {
    return (
      <div>
        <AppHeader />
        <Container gettingMetod={this.gettingDate} />
      </div>
    );
  }
}
export default App;
