import React from 'react';


 const GoalDemo = (props) => {
        return (
            <div className = 
                {`goal-demo 
                    ${props.difficulty == 'easy'&&'goal-demo--easy'}
                    ${props.difficulty == 'medium'&&'goal-demo--medium'} 
                    ${props.difficulty == 'hard'&&'goal-demo--hard'}
                    ${props.onDashboard && 'goal-demo--on-dashboard'}
                `}
            >
                
                <div className={`goal-demo__header ${ props.areas && props.areas.length > 5 && 'goal-demo__header--more-than-five'} ${ props.areas && props.areas.length > 3 && 'goal-demo__header--more-than-three'}`} >
                    <div className="goal-demo__areas">
                        {props.areas && props.areas.map((item, index) => {
                            switch (item) {
                                case 'health' : return <span className="goal-demo__areas-item goal-demo__areas-item--health" key={index}>Здоровье</span>
                                case 'family' : return <span className="goal-demo__areas-item goal-demo__areas-item--family" key={index}>Семья</span>
                                case 'relax' : return <span className="goal-demo__areas-item goal-demo__areas-item--relax" key={index}>Отдых</span>
                                case 'career' : return <span className="goal-demo__areas-item goal-demo__areas-item--career" key={index}>Карьера</span>
                                case 'friends' : return <span className="goal-demo__areas-item goal-demo__areas-item--friends" key={index}>Друзья</span>
                                case 'selfDevelopment' : return <span className="goal-demo__areas-item goal-demo__areas-item--self-development" key={index}>Саморазвитие</span>
                                case 'hobby' : return <span className="goal-demo__areas-item goal-demo__areas-item--hobby" key={index}>Хобби</span>
                                case 'money' : return <span className="goal-demo__areas-item goal-demo__areas-item--money" key={index}>Деньги</span>
                            }
                        })}
                    </div>
                    {props.priority && <span className='goal-demo__priority'><img src={props.priority == 'main' ? './images/icons/lenin.svg' : './images/icons/lincoln.svg'} alt="priority"/></span>}
                    <h2 className="goal-demo__title">{props.title ? props.title : 'Title going to be here'}</h2>
                    <span className="goal-demo__days-left-wrapper"><span className='goal-demo__days-left-number'>{props.duration}</span></span>
                </div>
                {/* <div className="goal-demo__content">
                    <div className="goal-demo__content-item">
                    </div>
                </div> */}
            </div>
        )
}

export default GoalDemo;