import React from 'react'

function Container() {
    return(
        <div>
            <div className="grid-container">
                <div className="grid-container faza1">Ожидание</div>
                <div className="grid-container faza1">Сборка</div>
                <div className="grid-container faza1">Тестирование</div>
                <div className="grid-container faza1">Развертывание</div>
                <div className="grid-container faza1">Стабилизация</div>
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

export default Container