import React from 'react';
import addTargetCard from './hoc/addTargetCard';

class SetPriority extends React.Component {
    onPriorityChange = (e) => {
        console.log('beep');
        this.props.onPriorityChange(e);
        this.props.next(e);
    }
    render(){
        return (
            <div className='card-duration'>
                         <h3 className = 'add-target__card-title'>Выберите приоритет цели</h3>
                         {/* 
                                 Переделать card-duration__tabs в отдельный компонент для радиокнопок с пояснениями
                          */}
     
     
                         <div className="card-duration__content">
                             <div className='card-duration__tabs'>
                                 <input type='radio' id='mainPriority' className='card-duration__tabs-radio'  name='priority' onChange={this.onPriorityChange} value={'main'}/>
                                 <label htmlFor='mainPriority' className='card-duration__tabs-label card-duration__tabs-label--priority'>
                                    <div className="card-duration__tab-icon">
                                        <img src="./images/icons/lenin.svg" alt=""/>
                                    </div>
                                     <div className="card-duration__tabs-label-header"></div>
                                     <div className="card-duration__description-wrapper">
                                         <span className='card-duration__option-name'>Главная</span>
                                         <p className="card-duration__option-description">Эту цель нужно выполнить обязательно.</p>
                                     </div>
                                 </label>
                                 <input type='radio' id='secondaryPriority' calue = 'secondary' className='card-duration__tabs-radio' name='priority' onChange={this.onPriorityChange} value={'secondary'}/>
                                 <label htmlFor='secondaryPriority' className='card-duration__tabs-label card-duration__tabs-label--priority'>
                                    <div className="card-duration__tab-icon">
                                        <img src="./images/icons/lincoln.svg" alt=""/>
                                    </div>
                                     <div className="card-duration__tabs-label-header"></div>
                                     <div className="card-duration__description-wrapper">
                                         <span className='card-duration__option-name'>Второстепенная</span>
                                         <p className="card-duration__option-description">Задача, которую желательно выполнить, но необязательно.</p>
                                     </div>
                                 </label>
                             </div>
                             
                         </div>
                         
                     </div>
         )
    }
    
}


export default addTargetCard(SetPriority);