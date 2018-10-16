import React from 'react';
import moment from 'moment';
moment.locale('ru');
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import addTargetCard from './hoc/addTargetCard';

class AddTargetDuration extends React.Component {
    state = {
        currentTab: '',
        startAt:moment(),
        endAt: moment(),
        calendarFocused: null
    }
    onTabChange = (e) => {
        e.persist();
        this.setState(() => ({
            currentTab: e.target.value,
            endAt: moment().add(e.target.value, 'days')
        }));
        this.props.setCardReady();
        this.props.onDurationChange(e.target.value);
        this.props.next(e);
        
    }
    onDatesChange = ({startDate, endDate}) => {
        this.setState(() => ({
            startAt: startDate,
            endAt:endDate
        }))
    }
    onFocusChange = (focused) => {
        this.setState(() => ({calendarFocused: focused}))
    }
    render(){
        return (
                <div className='card-duration'>
                    <h3 className = 'add-target__card-title'>Выберите длительность цели</h3>
                    <div className="card-duration__content">
                        <div className='card-duration__tabs'>
                            <input type='radio' id='duration30' className='card-duration__tabs-radio' name='duration' onChange={this.onTabChange} value={30}/>
                            <label htmlFor='duration30' className='card-duration__tabs-label'>
                                <div className="card-duration__tabs-label-header">
                                    <span className="card__duration__label-days-value">30 дней</span>
                                </div>
                                <div className="card-duration__description-wrapper">
                                    <span className='card-duration__option-name'>Месяц</span>
                                    <p className="card-duration__option-description">Удерживайте контроль прямо сейчас</p>
                                </div>
                            </label>
                            <input type='radio' id='duration90' className='card-duration__tabs-radio'  name='duration' onChange={this.onTabChange} value={90}/>
                            <label htmlFor='duration90' className='card-duration__tabs-label'>
                                <div className="card-duration__tabs-label-header">
                                    <span className="card__duration__label-days-value">90 дней</span>
                                </div>
                                <div className="card-duration__description-wrapper">
                                    <span className='card-duration__option-name'>Квартал</span>
                                    <p className="card-duration__option-description">Получите результат не теряя фокуса</p>
                                </div>
                            </label>
                            <input type='radio' id='duration360' className='card-duration__tabs-radio' name='duration'onChange={this.onTabChange} value={360}/>
                            <label htmlFor='duration360' className='card-duration__tabs-label'>
                                <div className="card-duration__tabs-label-header">
                                    <span className="card__duration__label-days-value">360 дней</span>
                                </div>
                                <div className="card-duration__description-wrapper">
                                    <span className='card-duration__option-name'>Год</span>
                                    <p className="card-duration__option-description">Определите стратегию на длительный срок</p>
                                </div>
                            </label>
                        </div>
                    </div>
                    
                </div>
        )
    }
}


export default addTargetCard(AddTargetDuration);