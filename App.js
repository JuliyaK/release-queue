import React from 'react';
import './index';
import AppHeader from './components/AppHeader';
// import Filters from './components/Filters.js';

// var queue =[{
    
//   key:  "RELEASE-0001",
//   name:   "Application1",
//   status:  "waiting",
//   type:   "backend",
//   time: "12 декабря 2018"
// },
// {
//   key: "RELEASE-0002",
//   name: "Application2",
//   status: "waiting",
//   type: "frontend",
//   time: "1 апреля 2019"
// },
// {
//   key: "RELEASE-00011",
//   name: "Application3",
//   status: "waiting",
//   type: "frontend",
//   time: "17 апреля 2019"
// },
// {
//   key: "RELEASE-0003",
//   name: "Application1",
//   status: "building",
//   type: "backend",
//   time: "17 декабря 2018"
// },
// {
//   key: "RELEASE-0004",
//   name: "Application1",
//   status: "testing",
//   type: "backend",
//   time: "20 декабря 2018"
// },
// {
//   key: "RELEASE-00012",
//   name: "Application2",
//   status: "testing",
//   type: "backend",
//   time: "7 апреля 2019"
// },
// {
//   key: "RELEASE-0005",
//   name: "Application2",
//   status: "building",
//   type: "frontend",
//   time: "3 апреля 2019"
// },
// {
//   key: "RELEASE-0006",
//   name: "Application1",
//   status: "deploying",
//   type: "frontend",
//   time: "22 декабря 2019"
// },
// {
//   key: "RELEASE-00013",
//   name: "Application2",
//   status: "deploying",
//   type: "frontend",
//   time: "10 апреля 2019"
// },
// {
//   key: "RELEASE-0008",
//   name: "Application1",
//   status: "stabilizing",
//   type: "frontend",
//   time: "30 декабря 2019"
// }
// ]



// const getFilterOptions = (releaseQueue) => {
//   return releaseQueue.reduce((result, item) => {
//     if (result.indexOf(item.type) === -1) {
//       result.push(item.type);
//     }
//     return result;
//   }, []);
// }

function groupByStatus(state) {

  var waitingGroup = [];
  var buildingGroup = [];
  var testingGroup = [];
  var deployingGroup = [];
  var stabilizingGroup = [];

 if(state !== [])
 {
   for(var i = 0; i < state.length; i++)
  {
      var fullname = [state[i].key, state[i].name, state[i].type, state[i].time].join(" / ");
      if(state[i].status === "waiting")
      {
          waitingGroup.push(<div className="grid-container waiting">{fullname}</div>); 
      }
      if(state[i].status === "building")
      {
          buildingGroup.push( <div className="grid-container building">{fullname}</div>);    
      }
      if(state[i].status === "testing")
      {
          testingGroup.push(<div className="grid-container testing">{fullname}</div>);   
      }
      if(state[i].status === "deploying")
      {
          deployingGroup.push(<div className="grid-container deploying">{fullname}</div>);  
      }
      if(state[i].status === "stabilizing")
      {
          stabilizingGroup.push(<div className="grid-container stabilizing">{fullname}</div>);   
      }
  }
}
  

  return {
    waitingGroup,
    buildingGroup,
    testingGroup,
    deployingGroup,
    stabilizingGroup
  }
}

function Container(props) {
  return(
      <div>
          <div className="grid-container">
              <div className="grid-container faza1">Ожидание</div>
              <div className="grid-container faza2">Сборка</div>
              <div className="grid-container faza3">Тестирование</div>
              <div className="grid-container faza4">Развертывание</div>
              <div className="grid-container faza5">Стабилизация</div>
          </div>
          <div className="task">
          
              <div className="task one">{props.waitingGroup}</div>
              <div className="task two">{props.buildingGroup}</div>
              <div className="task three">{props.testingGroup}</div>
              <div className="task four">{props.deployingGroup}</div>
              <div className="task five">{props.stabilizingGroup}</div>
          </div>
      </div>
        )
}



function GetData(){
  fetch('http://localhost:3001/tasks')
  .then((res) => res.json())
  .then((data) => this.setState(data))
  console.log(this.state)
 
}
 setInterval(GetData, 10000);




class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = [];
    this.GetData = this.GetData.bind(this)
  }


  // filterByType(type) {
  //   console.log(type);
  //   if (type === 'Все') {
  //     this.setState(state => ({
  //       queue
  //     }));
  //     return;
  //   }
  //   const filterResult = queue.filter((item) => {
  //     return item.type === type;
  //   });
  //   this.setState(state => ({
  //     queue: filterResult
  //   }));
  // }
  
  render() {
    return(
      <div>
       
        <AppHeader />
        {/* <Filters 
           options={getFilterOptions(queue)}
           onChange={this.filterByType.bind(this)}/> */}
        <Container {...groupByStatus(this.state)} />
      </div>
    )
  }
}

export default App;


