import './footer.scss';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__feedback'>Смотреть отзывы</div>
            <div className='footer__card'>
                <div className='footer__card-wrap'>
                    <div className='footer__card-item'>Скачать на телефон</div>
                    <div className='footer__card-text'>Доступно в PRO-тарифе</div>
                </div>
                <div className='footer__card-elem'>
                    <div className='footer__card-wrapper'>
                        <div className='footer__card-img'>
                            <AndroidFilled />
                        </div>
                        <div className='footer__card-name'>Android OS</div>
                    </div>
                    <div className='footer__card-wrapper'>
                        <div className='footer__card-img'>
                            <AppleFilled />
                        </div>
                        <div className='footer__card-name'>Apple iOS</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
