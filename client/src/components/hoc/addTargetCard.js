import React from 'react';
import GoalDemo from '../GoalDemo';

const addTargetCard = (Component) => {
    return class AddTargetCard extends React.Component {
        state = {
            cardIsReady: false,
            showButton: this.props.nextButton == undefined ? true : false
        }
        setCardReady = () => {
            this.setState(() => ({
                cardIsReady: true
            }))
        }
        setCardNotReady = () => {
            this.setState(() => ({
                cardIsReady: false
            }))
        }
       
        render() {
            return (
                <div className='add-target__form-card-wrapper'>
                    <div className="add-target__form-card">
                        <GoalDemo difficulty={this.props.difficulty } areas = {this.props.areas} title = {this.props.name} duration = {this.props.duration} priority = {this.props.priority}/>
                        <Component {...this.props} setCardReady = {this.setCardReady} setCardNotReady = {this.setCardNotReady}/>
                        {this.state.showButton && this.state.cardIsReady && <button onClick = {this.props.next} disabled = {!this.state.cardIsReady} className='button add-target__card-button-forward'>Дальше</button>}
                        {(this.props.activeSlide > 1) && <button onClick = {this.props.previous} className='add-target__card-button-back'></button>}
                        {this.props.activeSlide != 0 && <span className='add-target__step'>Шаг {this.props.activeSlide}</span>}
                    </div>
                </div>
            )
           
        }
    }
}

export default addTargetCard;