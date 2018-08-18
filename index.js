import React from 'react';
import ReactDOM from 'react-dom';
import {Responsive, WidthProvider} from 'react-grid-layout';
import './index.css';

function Header() {
    return <h3>Таблица очереди релизов</h3>
}

var queue =[
    {
        "key": "RELEASE-0001",
        "name": "Application1",
        "status": "waiting",
        "type": "backend"
    },
    {
        "key": "RELEASE-0012",
        "name": "Application1",
        "status": "waiting",
        "type": "backend"
    },
    {
        "key": "RELEASE-0002",
        "name": "Application1",
        "status": "testing",
        "type": "backend"
    },
    {
        "key": "RELEASE-0011",
        "name": "Application1",
        "status": "testing",
        "type": "backend"
    },
    {
        "key": "RELEASE-0003",
        "name": "Application2",
        "status": "waiting",
        "type": "frontend"
    },
    {
        "key": "RELEASE-0010",
        "name": "Application1",
        "status": "building",
        "type": "backend"
    },
    {
        "key": "RELEASE-0004",
        "name": "Application1",
        "status": "testing",
        "type": "backend"
    },
    {
        "key": "RELEASE-0005",
        "name": "Application2",
        "status": "deploying",
        "type": "frontend"
    },
    {
        "key": "RELEASE-0013",
        "name": "Application2",
        "status": "deploying",
        "type": "frontend"
    },
    {
        "key": "RELEASE-0015",
        "name": "Application2",
        "status": "deploying",
        "type": "frontend"
    },
    {
        "key": "RELEASE-0006",
        "name": "Application1",
        "status": "stabilizing",
        "type": "backend"
    },
    {
        "key": "RELEASE-0014",
        "name": "Application1",
        "status": "stabilizing",
        "type": "backend"
    },
    {
        "key": "RELEASE-0016",
        "name": "Application1",
        "status": "stabilizing",
        "type": "backend"
    },
    {
        "key": "RELEASE-0007",
        "name": "Application1",
        "status": "building",
        "type": "backend"
    },
    {
        "key": "RELEASE-0008",
        "name": "Application1",
        "status": "building",
        "type": "backend"
    },
    {
        "key": "RELEASE-0009",
        "name": "Application1",
        "status": "testing",
        "type": "backend"
    },
] ;

function ReleaseQueue(item) {
    switch(item.status) {
       
        case "testing":
            var fullname = [item.key,item.name,item.type].join(" ");
            console.log(fullname)
            return (    
                <div class="grid-item testing" key={item.key}>{fullname}</div>
            );
            break;
    
        case "waiting":
            var fullname = [item.key,item.name,item.type].join(" ");
            console.log(fullname)
            return (
                <div class="grid-item waiting"  key={item.key}>{fullname}</div>    
            );
            break;

        case "building":
            var fullname = [item.key,item.name,item.type].join(" ");
            console.log(fullname)
            return (
                <div class="grid-item building" key={item.key}>{fullname}</div>
            );
            break;

        case "deploying":
            var fullname = [item.key,item.name,item.type].join(" ");
            console.log(fullname)
            return (
                <div class="grid-item deploying" key={item.key}>{fullname}</div>
            );
            break;

        case "stabilizing":
            var fullname = [item.key,item.name,item.type].join(" ");
            console.log(fullname)
            return ( 
                <div class="grid-item stabilizing" key={item.key}>{fullname}</div>              
            );
            break;
    }
}

function DataOutput()
{
    const items = queue.map(ReleaseQueue);
    console.log(items);
    return (
    <div class ="grid-container">
        <div class="grid-items">Ожидание</div>
        <div class="grid-items">Сборка</div>
        <div class="grid-items">Тестирование</div>
        <div class="grid-items">Развертывание</div>
        <div class="grid-items">Стабилизация</div>
        {items}
    </div> 
    );
}


function App() {
    return (
        <div>
            <Header/>
            <DataOutput/>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

