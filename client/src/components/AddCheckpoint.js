import React from 'react';
import addTargetCard from './hoc/addTargetCard';
import moment from 'moment';
moment.locale('ru');
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import uuid from 'uuid';
import GoalDemo from './GoalDemo';

class AddCheckpoint extends React.Component {
    state = {
        inputVisible: false,
        inputFocused: false,
        currentTextInput:'',
        date: '',
        focused: false
    }
    componentDidMount() {
        this.props.setCardReady();
    }
    addCheckpoint = (e) => {
        e.preventDefault();
        e.persist();
        const checkpoint = {
            id: uuid(),
            name: this.textInput.value,
            date: this.state.date
        }
        if(this.textInput.value.length > 0 && this.state.date){
            this.props.addCheckpoint(checkpoint);
            this.textInput.value = '';
            this.setState(() => ({
                date:moment()
            }))
        } else {
           this.setInputInvisible
        }
        this.setState(() => ({
            currentTextInput:'',
            date:''
        }))
    }
    setInputVisible = (e) => {
        e.preventDefault();
        this.setState(() => ({
            inputVisible: true
        }))
        setTimeout(() => {
            this.textInput.focus()
        }, 200);
    }
    setInputInvisible = (e) => {
        e && e.preventDefault();
        setTimeout(() => {
                if(!this.state.focused){
                    this.setState(() => ({
                    inputVisible: false
                }))
            }
        }, 100)
    }
    onInputChange = (e) => {
        e.persist();
        this.setState(() => ({
            currentTextInput: e.target.value
        }))
    }
    
    onCalendarBlur = (focused) => {
        this.setState({ focused })
        // this.setInputInvisible();
    }
    deleteCheckpoint = (id) => {
        // console.log(id);
        this.props.deleteCheckpoint(id);
    }
    render(){
        return(
            
            <div className='add-checkpoint'>
                <h3 className = 'add-target__card-title'>Контрольные точки</h3>
                <GoalDemo difficulty={this.props.difficulty } areas = {this.props.areas} title = {this.props.name} duration = {this.props.duration} priority = {this.props.priority}/>
                <div className="add-checkpoint__checkpoints">
                    {this.props.checkpoints.map((item, index) => {
                        return (
                        <div className='add-checkpoint__checkpoints-item' key = {index}>
                            <span className='add-checkpoint__checkpoint-name'>{item.name}</span>
                            <span className='add-checkpoint__checkpoint-date'>{item.date.format("dddd, MMMM Do YYYY") }</span>
                            <span className="add-checkpoint__checkpoint-delete" onClick = {() => {this.deleteCheckpoint(item.id)}}></span>
                        </div>
                    )
                    })}
                </div>
                <div action="" className="add-checkpoint__add-area">
                   {this.state.inputVisible ?
                        <div className="add-checkpoint__text-input-wrapper">
                            <input placeholder = 'Введите название..' ref={(input) => { this.textInput = input; }} onChange = {this.onInputChange}  type="text" value = {this.state.currentTextInput} className = {`add-checkpoint__text-input ${this.state.inputVisible ? 'add-checkpoint__text-input--visible' : ''}`}/>
                            <div className="add-checkpoint__set-time">
                                <SingleDatePicker
                                    date={moment()} 
                                    onDateChange={date => this.setState({ date })}
                                    focused={this.state.focused} 
                                    onFocusChange={({ focused }) => {
                                        this.onCalendarBlur(focused);
                                    }} 
                                    numberOfMonths={1}
                                    showDefaultInputIcon
                                    id='checkpointTime'
                                />
                            </div>
                            <span className='add-checkpoint__checkpoint-date'>{this.state.date && this.state.date.format("dddd, MMMM Do YYYY") }</span>
                            {/* <span className="add-checkpoint__checkpoint-delete add-checkpoint__checkpoint-delete--close-btn" ></span> */}
                        </div> :
                        <button className='add-checkpoint__add-button' onClick = {this.setInputVisible}>+ Добавить контрольную точку</button>
                        
                    }
                </div>
                


                { this.state.inputVisible &&  <div className="add-checkpoint__button-wrapper"><button type='submit' className='button button--blue add-checkpoint__button' onClick = {this.addCheckpoint}>Добавить</button></div>}
            </div>
        )
    }
}


export default addTargetCard(AddCheckpoint);