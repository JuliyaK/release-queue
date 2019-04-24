import React from 'react';


var q =[{
    
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
  var AppGroup = [];

class Filters extends React.Component {
 

aplication1(){
    var apl1 = [q.key, q.status, q.type, q.time].join(" / ");
          if(apl1 = q.filter(q => q.name === "Application1"))
          {
              AppGroup.push(<div className="grid-container waiting">{apl1}</div>); 
              console.log(apl1)
          }
    /*var apl1 = q.filter(q => q.name === "Application1")
    console.log(apl1)
    AppGroup.push(<div class="grid">{apl1}</div>);*/
}

aplication2(){
    var apl2 = q.filter(q => q.name === "Application2")
    console.log(apl2)
}

aplication3(){
    var apl3 = q.filter(q => q.name === "Application3")
    console.log(apl3)
}
release1(){
    var rel1 = q.filter(q => q.key === "RELEASE-0001")
    console.log(rel1)
}

release2(){
    var rel2 = q.filter(q => q.key === "RELEASE-0002")
    console.log(rel2)
}
release3(){
    var rel3 = q.filter(q => q.key === "RELEASE-0003")
    console.log(rel3)
}

release4(){
    var rel4 = q.filter(q => q.key === "RELEASE-0004")
    console.log(rel4)
}
release5(){
    var rel5 = q.filter(q => q.key === "RELEASE-0005")
    console.log(rel5)
}

release6(){
    var rel6 = q.filter(q => q.key === "RELEASE-0006")
    console.log(rel6)
}

    
    render() {
      return (
 
        <form>
            <label>
            История по:
          <select>
            <optgroup label="Имя">
                <option onClick={this.aplication1.bind(this)}>Aplication1</option>
                <option onClick={this.aplication2.bind(this)}>Aplication2</option>
                <option onClick={this.aplication3.bind(this)}>Aplication3</option>
            </optgroup>
            
            <optgroup label="Тип">
                <option onClick={this.release1.bind(this)}>RELEASE-0001</option>
                <option onClick={this.release2.bind(this)}>RELEASE-0002</option>
                <option onClick={this.release3.bind(this)}>RELEASE-0003</option>
                <option onClick={this.release4.bind(this)}>RELEASE-0004</option>
                <option onClick={this.release5.bind(this)}>RELEASE-0005</option>
                <option onClick={this.release6.bind(this)}>RELEASE-0006</option>
            </optgroup>
            </select>
            </label>
        </form>
    
            
        
      );
    }
  }
  

export default Filters