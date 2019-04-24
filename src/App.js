import React from 'react';
import './index';
import AppHeader from './components/AppHeader';

import Header from './components/Header';

var queue =[{
    
  key:  "RELEASE-0001",
  name:   "Application1",
  status:  "waiting",
  type:   "backend",
  time: "12 декабря 2018"
},
{
  key: "RELEASE-0002",
  name: "Application2",
  status: "waiting",
  type: "frontend",
  time: "1 апреля 2019"
},
{
  key: "RELEASE-00011",
  name: "Application3",
  status: "waiting",
  type: "frontend",
  time: "17 апреля 2019"
},
{
  key: "RELEASE-0003",
  name: "Application1",
  status: "building",
  type: "backend",
  time: "17 декабря 2018"
},
{
  key: "RELEASE-0004",
  name: "Application1",
  status: "testing",
  type: "backend",
  time: "20 декабря 2018"
},
{
  key: "RELEASE-00012",
  name: "Application2",
  status: "testing",
  type: "backend",
  time: "7 апреля 2019"
},
{
  key: "RELEASE-0005",
  name: "Application2",
  status: "building",
  type: "frontend",
  time: "3 апреля 2019"
},
{
  key: "RELEASE-0006",
  name: "Application1",
  status: "deploying",
  type: "frontend",
  time: "22 декабря 2019"
},
{
  key: "RELEASE-00013",
  name: "Application2",
  status: "deploying",
  type: "frontend",
  time: "10 апреля 2019"
},
{
  key: "RELEASE-0008",
  name: "Application1",
  status: "stabilizing",
  type: "frontend",
  time: "30 декабря 2019"
}
]

function aplication2(){
  var apl2 = queue.filter(queue => queue.name === "Application2")
  return apl2;
}


aplication2()

  var waitingGroup = [];
  var buildingGroup = [];
  var testingGroup = [];
  var deployingGroup = [];
  var stabilizingGroup = [];
 

      for(var i = 0; i < queue.length; i++)
      {
          var fullname = [queue[i].key, queue[i].name, queue[i].type, queue[i].time].join(" / ");
          if(queue[i].status === "waiting")
          {
              waitingGroup.push(<div className="grid-container waiting">{fullname}</div>); 
          }
          if(queue[i].status === "building")
          {
              buildingGroup.push( <div className="grid-container building">{fullname}</div>);    
          }
          if(queue[i].status === "testing")
          {
              testingGroup.push(<div className="grid-container testing">{fullname}</div>);   
          }
          if(queue[i].status === "deploying")
          {
              deployingGroup.push(<div className="grid-container deploying">{fullname}</div>);  
          }
          if(queue[i].status === "stabilizing")
          {
              stabilizingGroup.push(<div className="grid-container stabilizing">{fullname}</div>);   
          }
      }
  
            
function Container() {
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
              <div className="task one">{waitingGroup}</div>
              <div className="task two">{buildingGroup}</div>
              <div className="task three">{testingGroup}</div>
              <div className="task four">{deployingGroup}</div>
              <div className="task five">{stabilizingGroup}</div>
          </div>
      </div>
  )

}

function App() {
  return(
    <div>
      <AppHeader />
      <Header />
     
     
    </div>
  )
}

export default App;
