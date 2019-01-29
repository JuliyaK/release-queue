import React from 'react'


class Container extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.getDate}>
            <button>Получить данные</button>
            
                <div className="grid-container">
                    <div className="grid-container faza1">ОЖИДАНИЕ 
                    
                    
                    </div>
                    <div className="grid-container faza2">СБОРКА</div>
                    <div className="grid-container faza3">ТЕСТИРОВАНИЕ</div>
                    <div className="grid-container faza4">РАЗВЕРТЫВАНИЕ</div>
                    <div className="grid-container faza5">СТАБИЛИЗАЦИЯ</div>
                    
                </div>
                <div className="task">
                    <div className="task one"></div>
                    <div className="task two"> </div>
                    <div className="task three"></div> 
                    <div className="task four"></div>
                    <div className="task five"></div>

                   
                </div>
                
            </form>               
        );
    }
}

export default Container;