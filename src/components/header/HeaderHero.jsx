import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import Logo from './icons/Logo';
import DropDown from './DropDown';
import FeedBackBtn from './FeedBackBtn';

const HeaderHero = () => (
    <header className='header__hero'>
        <Logo />
        <div className='header__hero-wrap'>
            <nav className="header__hero-nav">
                <Link className='header__link' to="/about">Принципы</Link>
                <Link className='header__link' to="/cases">Кейсы</Link>
                <DropDown />
                <Link className='header__link' to="/contact">Контакты</Link>
                <Link className='header__link' to="/news">Новости</Link>
            </nav>
            <FeedBackBtn />
        </div>
    </header>
);

export default HeaderHero;