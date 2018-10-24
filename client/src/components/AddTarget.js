import React from 'react';
import Slider from 'react-slick';
import uuid from 'uuid';
import AddTargetDuration from './AddTargetDuration';
import SetGoalName from './SetGoalName';
import SetAreas from './SetAreas';
import SetDifficulty from './SetDifficulty';
import SetGoalType from './SetGoalType';
import GoalDemo from './GoalDemo';
import AddCheckpoint from './AddCheckpoint'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addGoal } from '../actions/goals';
import { switchHeader } from '../actions/general'
import SetPriority from './SetPriority';
import axios from 'axios';
import { fire } from '../firebase/firebase';


class AddTarget extends React.Component {
    // Конструктор объявлен для того чтобы работал слайдер. Так в примере было :)
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    componentWillMount() {
        this.props.dispatch(switchHeader(false))
    }
    state = {
        duration: 0,
        name: '',
        areas: [],
        difficulty: '',
        priority: '',
        type:'',
        activeSlide:0,
        checkpoints: [],
        isStarted: false
    }
    settings = {
        infinite: false,
        speed: 500,
        accessibility: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        arrows: false,
        swipe: false,
        speed: 750,
        beforeChange: (oldIndex ,newIndex) => {
                this.setState({activeSlide: newIndex });
        }
    }
    start = (e) => {
        e.preventDefault();  
        this.slider.slickNext();
        // this.slider.slickGoTo(2);

        this.setState(() => ({
            isStarted: true,
        }))
    }
    next(e) {
    e.preventDefault();    
    this.slider.slickNext();
    }
    previous(e) {
    e.preventDefault();   
    this.slider.slickPrev();
    }
    goTo(slide) {
        this.slider.slickGoTo(slide)
    }
    addGoal = (e) => {
        e.preventDefault();
        const goal = {
            id: uuid(),
            name : this.state.name,
            duration : this.state.duration,
            areas: this.state.areas,
            difficulty: this.state.difficulty,
            priority:this.state.priority
        }
        this.props.dispatch(addGoal(goal))
        const databaseUsersRef = fire.database().ref(`users/${this.props.user.userID}/goals/${uuid()}`);
        databaseUsersRef.set({
            name : this.state.name,
            duration : this.state.duration,
            areas: this.state.areas,
            difficulty: this.state.difficulty,
            priority:this.state.priority
        });
        this.props.history.push('/goals-dashboard')
    }
    onDurationChange = (value) => {
        this.setState(() => ({
            duration: value
        }))
    }
    onDifficultyChange = (e) => {
        e.persist();
        this.setState(() => ({
            difficulty: e.target.value
        }))
    }
    onPriorityChange = (e) => {
        e.persist();
        this.setState(() => ({
            priority: e.target.value
        }))
    }
    onNameChange = (e) => {
        this.setState(() => ({
            name: e
        }))
    }
    onAreaChange = (e) => {
        e.persist();
        if (e.target.checked) {
            this.setState(() => ({
                areas: [
                    ...this.state.areas,
                    e.target.value
                ]
            }))
        } else {
            this.setState(() => {
                const newAreas = this.state.areas.filter((area) => {
                    return area!=e.target.value
                })
                return { areas: newAreas }
            })
        } 
    }
    addCheckpoint = (checkpoint) => {
        this.setState(() => ({
            checkpoints: [
                ...this.state.checkpoints,
                checkpoint
            ]
        }))
    }
    deleteCheckpoint = (id) => {
        this.setState(() => ({
            checkpoints: this.state.checkpoints.filter((item) => {
                console.log(id);
                console.log(item.id);
                return item.id != id
            })
        }))
    }
    onTypeChange = (e) => {
        this.setState(()=>({
            targetType: e
        }))
    }
    render() {
        return (
            <div className='add-target'>
                {/* <GoalDemo difficulty={this.state.targetDifficulty } areas = {this.state.targetAreas} title = {this.state.targetName} duration = {this.state.targetDuration}/> */}
                <form className = 'add-target__form'>
                    <a href="">Hey mate!</a>
                    <Link to = '/goals-dashboard' className="add-target__exit-button"></Link>
                    {/* {this.state.activeSlide != 0 && <span className='add-target__step'>Шаг {this.state.activeSlide}</span>} */}
                    <Slider className='add-target__form-cards' ref={c => (this.slider = c)} {...this.settings}>
                        <div className='add-target__form-card-wrapper'>
                            <div className='add-target__form-card'>
                                <div className="add-target__form-card-img"><img src="Finn_the_Human.png" alt=""/></div>
                                <h3 className = 'add-target__card-title add-target__card-title--speech'>Пришло время создать первую цель!</h3>
                                <p className = 'add-target__form-card-paragraph'>Через <b>5 простых шагов</b> у вас будет четко сформулированная цель, которая позволит вам оставаться мотивированным и удерживать фокус.</p>
                                <button onClick = {this.start} className='button button--blue add-target__form-card-start'>Начать</button>
                            </div>
                        </div>
                        {/* Coming soon in next Frank version
                            <SetGoalType next = {this.next} onTypeChange={this.onTypeChange} nextButton = {false}/> 
                        */}
                        <SetGoalName onNameChange = {this.onNameChange} next = {this.next} previous = {this.previous} {...this.state}/>
                        <div className='add-target__form-card-wrapper'>
                            <div className='add-target__form-card'>
                                <h3 className = 'add-target__card-title add-target__card-title--center'>Неплохо..<br/>Но могло бы быть и лучше!</h3>
                                <br/>
                                <br/>
                                <div className="add-target__form-card-img"><img src="./images/fry.png" alt=""/></div>
                                <p className = 'add-target__form-card-paragraph'>Я заметил, что в названии цели нет цифр, подозрительно. Вы вообще читали, что написано под полем ввода? Цель должна быть измеримой, вообще-то. Советую вернуться и переделать, мы жи тут саморазвииваться собрались.</p>
                                <button onClick = {this.next} className='button add-target__card-button-forward'>Мне все равно, дальше</button>
                                <button onClick = {this.previous} className='add-target__card-button-back'></button>
                            </div>
                        </div>
                        <AddTargetDuration onDurationChange = {this.onDurationChange} next = {this.next} previous = {this.previous} nextButton = {false} {...this.state}/>
                        <SetAreas onAreaChange={this.onAreaChange} next = {this.next} previous = {this.previous} {...this.state}/>
                        <SetDifficulty onDifficultyChange = {this.onDifficultyChange} previous = {this.previous} next = {this.next} {...this.state}/>
                        <SetPriority onPriorityChange = {this.onPriorityChange} next = {this.next} previous = {this.previous} {...this.state} nextButton = {false}/>
                        <div className='add-target__form-card-wrapper'>
                            <div className='add-target__form-card'>
                                <h3 className = 'add-target__card-title add-target__card-title--center'>Поздравляем! <br/> Вы создали свою первую цель</h3>
                                <br/>
                                <br/>
                                <div className="add-target__form-card-img"><img src="./images/success.svg" alt=""/></div>
                                <p className = 'add-target__form-card-paragraph'>Мы можем улучшить вашу цель прямо сейчас добавив контрольные точки. Так вы сможете точнеев отслеживать свой прогресс.</p>
                                <button onClick = {this.next} className='button button--blue add-target__form-card-start'>Добавить контрольные точки</button>
                                <button onClick = {this.addGoal} className='button button--secondary add-target__secondary-button'>Завершить</button>
                                {(this.state.activeSlide > 1) && <button onClick = {this.previous} className='add-target__card-button-back'></button>}
                            </div>
                        </div>
                        <AddCheckpoint next = {this.next} previous = {this.previous} deleteCheckpoint = {this.deleteCheckpoint} addCheckpoint = {this.addCheckpoint} {...this.state}/>
                        <div className='add-target__form-card-wrapper'>
                            <div className='add-target__form-card'>
                                <GoalDemo {...this.state}/>
                                <h3 className = 'add-target__card-title add-target__card-title--center'>Великолепно! Теперь вы готовы действовать!</h3>
                                <br/>
                                <br/>
                                <div className="add-target__form-card-img"><img src="./images/success.svg" alt=""/></div>
                                <p className = 'add-target__form-card-paragraph'>Только <b>3%  людей</b> записывают свои цели.Мама всегда знала, что вы особенный.</p>
                                <p className = 'add-target__form-card-paragraph'>Мы запомнили ваш подвиг! В новых версиях приложения вы получите награду.</p>
                                <button onClick = {this.addGoal} className='button button--blue add-target__form-card-start'>Завершить</button>
                                {/* {(this.state.activeSlide > 1) && <button onClick = {this.previous} className='add-target__card-button-back'></button>} */}
                            </div>
                        </div>
                    </Slider>
                    {/* {(this.state.activeSlide > 1) && <button onClick = {this.previous} className='add-target__card-button-back'></button>} */}
                </form>
            </div>
        )  
    }
}

const mapStateToProps = state => ({
    goals: state.goals,
    user: state.auth
  });

export default connect(mapStateToProps)(AddTarget);


   


