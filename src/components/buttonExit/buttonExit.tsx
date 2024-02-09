import exit from '../../../assets/svg/exit.svg';
import './buttonExit.scss';
interface Props {
    collapsed: boolean;
}
export const ButtonExit = ({ collapsed }: Props) => {
    return (
        <div className='exit'>
            <img loading='lazy' className='img' src={exit} alt='exit' />
            {!collapsed && <div className='exit__text'>Выход</div>}
        </div>
    );
};
