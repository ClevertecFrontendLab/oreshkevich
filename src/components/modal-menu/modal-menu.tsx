import { NavLink } from 'react-router-dom';
import logoModal from '../../../assets/svg/logo.svg';
import './modal-menu.scss';
interface Props {
    isActive: boolean;
}
export const ModalMenu = ({ isActive }: Props) => {
    return (
        <div className={`modal-menu ${isActive ? 'hidden-left' : ''}`}>
            <div className='modal-menu__wrap'>
                <img loading='lazy' className='logo__modal' src={logoModal} alt='logo' />
                <ul className='sidebar__list'>
                    <li className='sidebar__li'>
                        <NavLink to='#' className='modal-menu__link'>
                            Календарь
                        </NavLink>
                    </li>
                    <li className='sidebar__li'>
                        <NavLink to='#' className='modal-menu__link'>
                            Тренировки
                        </NavLink>
                    </li>
                    <li className='sidebar__li'>
                        <NavLink to='#' className='modal-menu__link'>
                            Достижения
                        </NavLink>
                    </li>
                    <li className='sidebar__li'>
                        <NavLink to='#' className='modal-menu__link'>
                            Профиль
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='modal-menu__exit'>
                <NavLink to='#' className='modal-menu__link'>
                    Выход
                </NavLink>
            </div>
        </div>
    );
};
