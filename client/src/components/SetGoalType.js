import React from 'react';
import addTargetCard from './hoc/addTargetCard'

 class SetGoalType extends React.Component {

    onTypeChange = (e) => {
        e.persist();
        this.props.onTypeChange(e.target.value);
        this.props.next(e)
    }
    render(){
        return (
            <div className='add-target__card-type'>
                <h3 className = 'add-target__card-title'>Выберите тип цели</h3>
                <div className='set-goal-type'>
                    <input type='radio' name='goalType' value = 'exercises' className='set-goal-type__radio' id='goalTypeExercise' onChange = {this.onTypeChange}/>
                    <label htmlFor='goalTypeExercise' className = 'set-goal-type__label'>
                        <div className="set-goal-type__option-img set-goal-type__option-img--sport"><img src="./images/sport.jpg" alt=""/></div> 
                        <div className='set-goal-type__type-description'>
                            <p className="set-goal-type__type-title">Спорт</p> 
                            <p className="set-goal-type__type-subtitle">Бег, йога и другие упражнения</p> 
                        </div>
                    </label>
                    <input type='radio' name='goalType' value = 'skills' className='set-goal-type__radio' id='goalTypeSkills' onChange = {this.onTypeChange}/>
                    <label htmlFor='goalTypeSkills' className = 'set-goal-type__label'>
                        <div className="set-goal-type__option-img set-goal-type__option-img--skills"><img src="./images/skills.jpg" alt=""/></div>
                         <div className='set-goal-type__type-description'>
                            <p className="set-goal-type__type-title">Навыки</p>
                            <p className="set-goal-type__type-subtitle">Учите язык, попрактикуйтесь в игре на инструменте</p> 
                        </div>
                    </label>
                    <input type='radio' name='goalType' value = 'family' className='set-goal-type__radio' id='goalTypeFriendsAndFamily' onChange = {this.onTypeChange}/>
                    <label htmlFor='goalTypeFriendsAndFamily' className = 'set-goal-type__label'>
                        <div className="set-goal-type__option-img set-goal-type__option-img--friends"><img src="./images/friends.jpg" alt=""/></div>
                         <div className='set-goal-type__type-description'>
                            <p className="set-goal-type__type-title">Друзья и семья</p>
                            <p className="set-goal-type__type-subtitle">Проведите время с близкими людьми</p> 
                        </div>
                    </label>
                    <input type='radio' name='goalType' value = 'meTime' className='set-goal-type__radio' id='goalTypeMeTime' onChange = {this.onTypeChange}/>
                    <label htmlFor='goalTypeMeTime' className = 'set-goal-type__label'>
                        <div className="set-goal-type__option-img set-goal-type__option-img--relax"><img src="./images/relax.jpg" alt=""/></div>
                          <div className='set-goal-type__type-description'>
                            <p className="set-goal-type__type-title">Время для себя</p> 
                            <p className="set-goal-type__type-subtitle">Читайте, медитируйте, проведите время с удовольствием</p> 
                        </div>
                    </label>
                    <input type='radio' name='goalType' value = 'organize' className='set-goal-type__radio' id='goalTypePlanning' onChange = {this.onTypeChange}/>
                    <label htmlFor='goalTypePlanning' className = 'set-goal-type__label'>
                        <div className="set-goal-type__option-img set-goal-type__option-img--organizing"><img src="./images/organize.jpg" alt=""/></div>
                         <div className='set-goal-type__type-description'>
                            <p className="set-goal-type__type-title">Планирование и организация</p> 
                            <p className="set-goal-type__type-subtitle">Держите жизнь под контролем</p> 
                        </div>
                    </label>
                </div>
            </div>
        )
    }
}


export default addTargetCard(SetGoalType)