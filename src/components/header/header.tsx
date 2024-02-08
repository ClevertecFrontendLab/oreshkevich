import React from 'react';
import './header.scss';
import { SettingOutlined } from '@ant-design/icons';

export const Header: React.FC = () => {
    return (
        <div className='header'>
            <a href='#' className='header__link'>
                Главная
            </a>
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
