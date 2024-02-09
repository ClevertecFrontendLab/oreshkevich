import React from 'react';
import './header.scss';
import { SettingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <div className='header'>
            <NavLink to='#' className='header__link'>
                Главная
            </NavLink>
            <div className='header__wrap'>
                <div className='header__title'>
                    Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей
                    мечты!
                </div>
                <div className='header__settings-wrap'>
                    <div className='header__settings-img'>
                        <SettingOutlined />
                    </div>
                    <div className='header__settings'>Настройки</div>
                </div>
            </div>
        </div>
    );
};
