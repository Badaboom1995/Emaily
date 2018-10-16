import React from 'react';
import addTargetCard from './hoc/addTargetCard'

 class SetGoalName extends React.Component {
    onNameChange = (e) => {
        e.persist();
        this.props.onNameChange(e.target.value);
        if(e.target.value.length > 1) {
            this.props.setCardReady();
        } else {
            this.props.setCardNotReady();
        }
    }
    setFocus = () => {
        setTimeout(() => this.textInput.focus(), 500)
    }
    render(){
        return (
            <div className='add-target__card-name'>
                <h3 className = 'add-target__card-title'>Сформулируйте вашу цель</h3>
                <div className="set-goal-name">
                    {this.props.activeSlide == 1 && this.setFocus()}
                    <input type='text' placeholder = 'Введите название...' ref={(input) => { this.textInput = input; }} onChange = {this.onNameChange} className='set-goal-name__input'/>
                    <div className="set-goal-name__rules">
                        <h4 className="set-goal-name__rules-title">Правильная цель:</h4>
                        <ul className="set-goal-name__rules-list">
                            <li className="set-goal-name__rules-item"><b>Конкретная</b>: <br/> Какого именно результата вы хотите достигнуть?</li>
                            <li className="set-goal-name__rules-item"><b>Измеримая</b>: <br/> Как вы узнаете, что цель достигнута?</li>
                            <li className="set-goal-name__rules-item"><b>Достижимая</b>: <br/> Это цель которую вы действительно можете достигнуть?</li>
                            <li className="set-goal-name__rules-item"><b>Значимая</b>: <br/> Эта цель отражает ваши жизненные ценности?</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default addTargetCard(SetGoalName)