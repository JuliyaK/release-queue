import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader'
import Container from './components/contsiners'


class App extends React.Component {

state = {
  waiting: null,
  testing: null
 
}


gettingDate = async (e) => {
e.preventDefault();
  const api_url = await fetch(`http://localhost:3001/tasks`);
  const data = await api_url.json();
  console.log(data);


        var waitingGroup = [];
        var buildingGroup = [];
        var testingGroup = [];
        var deployingGroup = [];
        var stabilizingGroup = [];

            for(var i = 0; i < data.length; i++)
            {
                var fullname = [data[i].key, data[i].name, data[i].type].join(" ");
                if(data[i].status === "waiting")
                {
                    waitingGroup.push({fullname}); 
                }
                if(data[i].status === "building")
                {
                    buildingGroup.push({fullname});    
                }
                if(data[i].status === "testing")
                {
                    testingGroup.push({fullname});   
                }
                if(data[i].status === "deploying")
                {
                    deployingGroup.push({fullname});  
                }
                if(data[i].status === "stabilizing")
                {
                    stabilizingGroup.push({fullname});   
                }
            }
      console.log(waitingGroup, buildingGroup, testingGroup, deployingGroup, stabilizingGroup)

this.setState({
 waiting:  waitingGroup,
 testing: testingGroup
 
});
console.log(this.state)

}
  render() {
    return (
      <div>
        <AppHeader />
        <Container getDate={this.gettingDate} 
       
       
        />
      </div>
      
    );
    
  }

}
export default App;
