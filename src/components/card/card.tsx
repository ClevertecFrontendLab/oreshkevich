import { ReactNode } from 'react';
import './card.scss';

interface Props {
    title: string;
    text: string;
    img: ReactNode;
}
export const CardMain = ({ title, text, img }: Props) => {
    return (
        <div className='card'>
            <div className='card-2'>{title}</div>
            <div className='card-3'>
                <div className='card-4'>
                    <div className='card-5'>{img}</div>
                    <div className='card-6'>{text}</div>
                </div>
            </div>
        </div>
    );
};
