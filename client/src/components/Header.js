import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header  = (props) => ( 
    <header className={`main-header ${!props.general.headerVisible && 'main-header--hidden'}`}>
        <span className="main-header__close">Close</span>
        <nav className="main-header__nav">
            <NavLink to='/' className='main-header__nav-link' activeClassName = 'main-header__nav-link--active'>Frank</NavLink>
            <NavLink to='/goals-dashboard' className='main-header__nav-link' activeClassName = 'main-header__nav-link--active'>Goals</NavLink>
            <NavLink to='/quests' className='main-header__nav-link' activeClassName = 'main-header__nav-link--active'>Quests</NavLink>
        </nav>
    </header>
);

const mapStateToProps = state => ({
    general: state.general
  });

export default connect(mapStateToProps)(Header);
