import React from 'react';
import addTargetCard from './hoc/addTargetCard'

 class SetDifficulty extends React.Component {
    onDifficultyChange = (e) => {
        this.props.onDifficultyChange(e);
        this.props.next(e);
    }
    render(){
        return (
             <div className='add-target__card-difficulty'>
                <h3 className = 'add-target__card-title'>Определите сложность цели</h3>
                <div className="set-difficulty">
                    <input className='set-difficulty__input' type='radio' name='difficulty' id='simple' onChange={this.onDifficultyChange} value={'easy'}/>
                    <label className='set-difficulty__label set-difficulty__label--easy' htmlFor='simple'>Простая 
                        <div className="set-difficulty__stars"><svg className='set-difficulty__star' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path  fillRule="evenodd" d="M10.667 10.667L16 8l-5.333-2.667L8 0 5.333 5.333 0 8l5.333 2.667L8 16z"></path></svg></div>
                    </label>
                    <input className='set-difficulty__input' type='radio' name='difficulty' id='medium' onChange={this.onDifficultyChange} value={'medium'}/>
                    <label className='set-difficulty__label set-difficulty__label--medium' htmlFor='medium'>Средняя
                        <div className="set-difficulty__stars">
                            <svg className='set-difficulty__star' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path  fillRule="evenodd" d="M10.667 10.667L16 8l-5.333-2.667L8 0 5.333 5.333 0 8l5.333 2.667L8 16z"></path></svg>
                            <svg className='set-difficulty__star' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path  fillRule="evenodd" d="M10.667 10.667L16 8l-5.333-2.667L8 0 5.333 5.333 0 8l5.333 2.667L8 16z"></path></svg>
                        </div>
                    </label>
                    <input className='set-difficulty__input' type='radio' name='difficulty' id='hard' onChange={this.onDifficultyChange} value={'hard'}/>
                    <label className='set-difficulty__label set-difficulty__label--hard' htmlFor='hard'>Сложная
                        <div className="set-difficulty__stars">
                            <svg className='set-difficulty__star' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path  fillRule="evenodd" d="M10.667 10.667L16 8l-5.333-2.667L8 0 5.333 5.333 0 8l5.333 2.667L8 16z"></path></svg>
                            <svg className='set-difficulty__star' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path  fillRule="evenodd" d="M10.667 10.667L16 8l-5.333-2.667L8 0 5.333 5.333 0 8l5.333 2.667L8 16z"></path></svg>
                            <svg className='set-difficulty__star' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path  fillRule="evenodd" d="M10.667 10.667L16 8l-5.333-2.667L8 0 5.333 5.333 0 8l5.333 2.667L8 16z"></path></svg>
                        </div>
                    </label>
                </div>
                <p className="set-areas__description">В зависимости от сложности мы расчитаем какой вклад вносит эта цель.</p>
            </div>
        )
    }
}

export default addTargetCard(SetDifficulty);