import React from 'react';
import addTargetCard from './hoc/addTargetCard'

 class SetAreas extends React.Component {
    onAreaChange = (e) => {
        this.props.onAreaChange(e);
        if (e.target.checked){
            this.props.setCardReady();
            console.log('check');
        } else if (this.props.areas.length == 1) {
            this.props.setCardNotReady();
        }
    }
    render(){
        return (
             <div className='add-target__card-areas'>
                <h3 className = 'add-target__card-title'>Какие области жизни улучшит цель?</h3>
                <div className="set-areas">
                    <div className="set-areas__inputs">
                        <input id='areaHealth' className='set-areas__input' type='checkbox' value='health' onChange = {this.onAreaChange}/><label className='set-areas__label set-areas__label--health' htmlFor='areaHealth'>Здоровье</label>
                        <input id='areaFamily' className='set-areas__input' type='checkbox' value='family' onChange = {this.onAreaChange}/><label className='set-areas__label set-areas__label--family' htmlFor='areaFamily'>Семья</label>
                        <input id='areaRelax' className='set-areas__input' type='checkbox' value='relax' onChange = {this.onAreaChange}/><label className='set-areas__label set-areas__label--relax' htmlFor='areaRelax'>Отдых</label>
                        <input id='areaCareer' className='set-areas__input' type='checkbox' value='career' onChange = {this.onAreaChange}/><label className='set-areas__label set-areas__label--career' htmlFor='areaCareer'>Карьера</label>
                        <input id='areaFriends' className='set-areas__input' type='checkbox' value='friends' onChange = {this.onAreaChange}/><label className='set-areas__label set-areas__label--friends' htmlFor='areaFriends'>Друзья</label>
                        <input id='areaSelfDevelopment' className='set-areas__input' type='checkbox' value='selfDevelopment' onChange = {this.onAreaChange}/><label className='set-areas__label set-areas__label--self-development' htmlFor='areaSelfDevelopment'>Саморазвитие</label>
                        <input id='areaHobby' className='set-areas__input' type='checkbox' value='hobby' onChange = {this.onAreaChange}/><label className='set-areas__label set-areas__label--hobby' htmlFor='areaHobby'>Хобби</label>
                        <input id='areaMoney' className='set-areas__input' type='checkbox' value='money' onChange = {this.onAreaChange}/><label className='set-areas__label set-areas__label--money' htmlFor='areaMoney'>Деньги</label>
                    </div>
                    <p className="set-areas__description">Цель может иметь влияние на разные области вашей жизни. Подумайте и выберите нужные области.</p>
                    <p className="set-areas__description">Эта информация поможет в составлении рекомендаций для вас.</p>
                </div>
               
            </div>
        )
    }
}

export default addTargetCard(SetAreas);