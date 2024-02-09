import { ReactNode } from 'react';
import './card-main.scss';

interface Props {
    title: string;
    text: string;
    img: ReactNode;
}
export const CardMain = ({ title, text, img }: Props) => {
    return (
        <div className='card-information'>
            <div className='card-information__title'>{title}</div>
            <div className='card-information__wrap'>
                <div className='card-information__img'>{img}</div>
                <div className='card-information__text'>{text}</div>
            </div>
        </div>
    );
};
