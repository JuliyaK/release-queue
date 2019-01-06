import React, {Suspense, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {unstable_createResource} from 'react-cache';
import {Responsive, WidthProvider} from 'react-grid-layout';
import './index.css';
import { ReadStream } from 'fs';


function AppHeader() {
    return <h3>Таблица очереди релизов</h3>
}



/*
var queue =[{
    
        key:  "RELEASE-0001",
        name:   "Application1",
        status:  "waiting",
        type:   "backend"
    },
    {
        key: "RELEASE-0002",
        name: "Application2",
        status: "waiting",
        type: "frontend"
    },
    {
        key: "RELEASE-0003",
        name: "Application1",
        status: "building",
        type: "backend"
    },
    {
        key: "RELEASE-0004",
        name: "Application1",
        status: "testing",
        type: "backend"
    },
    {
        key: "RELEASE-0005",
        name: "Application2",
        status: "building",
        type: "frontend"
    },
    {
        key: "RELEASE-0006",
        name: "Application2",
        status: "deploying",
        type: "frontend"
    },
    {
        key: "RELEASE-0008",
        name: "Application1",
        status: "stabilizing",
        type: "frontend"
    },
    {
        key: "RELEASE-0009",
        name: "Application2",
        status: "stabilizing",
        type: "backend"
    },
    {
        key: "RELEASE-0010",
        name: "Application2",
        status: "stabilizing",
        type: "frontend"
    }
]*/

const Fetcher = unstable_createResource (() =>
fetch("http://localhost:3001/tasks").then(response => response.json())
);
const getData = () => Fetcher.read();
const Release_queue = () => {
    const queue = getData();
  
        var waitingGroup = [];
        var buildingGroup = [];
        var testingGroup = [];
        var deployingGroup = [];
        var stabilizingGroup = [];

            for(var i = 0; i < queue.length; i++)
            {
                var fullname = [queue[i].key, queue[i].name, queue[i].type].join(" ");
                if(queue[i].status === "waiting")
                {
                    waitingGroup.push(<div class="grid-container waiting">{fullname}</div>); 
                }
                if(queue[i].status === "building")
                {
                    buildingGroup.push( <div class="grid-container building">{fullname}</div>);    
                }
                if(queue[i].status === "testing")
                {
                    testingGroup.push(<div class="grid-container testing">{fullname}</div>);   
                }
                if(queue[i].status === "deploying")
                {
                    deployingGroup.push(<div class="grid-container deploying">{fullname}</div>);  
                }
                if(queue[i].status === "stabilizing")
                {
                    stabilizingGroup.push(<div class="grid-container stabilizing">{fullname}</div>);   
                }
            }
        }
                    


function Container() {
    return(
        <div class="container">
                <div class="grid-container">
                    <div class="grid-container faza1">ОЖИДАНИЕ</div>
                    <div class="grid-container faza2">СБОРКА</div>
                    <div class="grid-container faza3">ТЕСТИРОВАНИЕ</div>
                    <div class="grid-container faza4">РАЗВЕРТЫВАНИЕ</div>
                    <div class="grid-container faza5">СТАБИЛИЗАЦИЯ</div>
                </div>
                <div class="task">
                    <div class="task one"> 
                      {waitingGroup}
                    </div>
                    <div class="task two">
                        {buildingGroup}
                    </div>
                    <div class="task three">
                        {testingGroup}
                    </div>
                    <div class="task four">
                        {deployingGroup}
                    </div>
                    <div class="task five">
                        {stabilizingGroup}
                    </div>
                </div>
        </div>               
    )
}

function App() {
    return (
        <div>   
         <AppHeader/>
         <Container/>
         
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
