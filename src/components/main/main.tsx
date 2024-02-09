import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Header } from '../header';
import { CardMain } from '../card-main';
import { Footer } from '../footer';
import { ButtonExit } from '../buttonExit';
import logo from '../../../assets/svg/logo.svg';
import logoMin from '../../../assets/svg/logoMin.svg';
import './main.scss';
import { ModalMenu } from '../modal-menu';

const { Sider, Content } = Layout;

export const Main: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const handleToggle = () => {
        setIsActive(!isActive);
    };
    return (
        <div className='wrapper'>
            <div className='container-main'>
                <Layout>
                    <Sider
                        theme='light'
                        className='sider-main'
                        trigger={null}
                        collapsible
                        collapsed={collapsed}
                    >
                        <div className='logo'>
                            {collapsed ? (
                                <img
                                    loading='lazy'
                                    className='logo__img'
                                    src={logoMin}
                                    alt='logo'
                                />
                            ) : (
                                <img loading='lazy' className='logo__img' src={logo} alt='logo' />
                            )}
                        </div>
                        <div className='main-sidebar'>
                            <Menu
                                mode='inline'
                                defaultSelectedKeys={['1']}
                                items={[
                                    {
                                        key: '1',
                                        icon: (
                                            <CalendarTwoTone
                                                style={{
                                                    fontSize: '14px',
                                                    color: '#061178',
                                                }}
                                                twoToneColor='#061178'
                                            />
                                        ),
                                        label: 'Календарь',
                                    },
                                    {
                                        key: '2',
                                        icon: (
                                            <HeartFilled
                                                style={{
                                                    fontSize: '14px',
                                                    color: '#061178',
                                                }}
                                                twoToneColor='#061178'
                                            />
                                        ),
                                        label: 'Тренировки',
                                    },
                                    {
                                        key: '3',
                                        icon: (
                                            <TrophyFilled
                                                style={{
                                                    fontSize: '14px',
                                                    color: '#061178',
                                                }}
                                                twoToneColor='#061178'
                                            />
                                        ),
                                        label: 'Достижения',
                                    },
                                    {
                                        key: '4',
                                        icon: (
                                            <IdcardOutlined
                                                style={{ fontSize: '14px', color: '#061178' }}
                                                twoToneColor='#061178'
                                            />
                                        ),
                                        label: 'Профиль',
                                    },
                                ]}
                            />
                            <ButtonExit collapsed={collapsed} />
                        </div>
                    </Sider>
                    <Layout className='site-layout'>
                        <Header />
                        <button
                            className={`trigger-mobile ${isActive ? '' : 'hidden-button'}`}
                            data-test-id='sider-switch-mobile'
                            onClick={handleToggle}
                        ></button>
                        <Content className='welcome'>
                            <section className='container'>
                                <div className='main__text'>
                                    С CleverFit ты сможешь:
                                    <br />
                                    — планировать свои тренировки на календаре, выбирая тип и
                                    уровень нагрузки;
                                    <br />
                                    — отслеживать свои достижения в разделе статистики, сравнивая
                                    свои результаты с нормами и рекордами;
                                    <br />
                                    — создавать свой профиль, где ты можешь загружать свои фото,
                                    видео и отзывы о тренировках;
                                    <br />— выполнять расписанные тренировки для разных частей тела,
                                    следуя подробным инструкциям и советам профессиональных
                                    тренеров.
                                </div>
                                <div className='main__text-small'>
                                    CleverFit — это не просто приложение, а твой личный помощник в
                                    мире фитнеса. Не откладывай на завтра — начни тренироваться уже
                                    сегодня!
                                </div>
                                <div className='site-card-wrapper'>
                                    <CardMain
                                        title='Расписать тренировки'
                                        text='Тренировки'
                                        img={
                                            <HeartFilled
                                                style={{
                                                    fontSize: '12px',
                                                    color: '#2F54EB',
                                                }}
                                                twoToneColor='#2F54EB'
                                            />
                                        }
                                    ></CardMain>
                                    <CardMain
                                        title=' Назначить календарь'
                                        text='Календарь'
                                        img={
                                            <CalendarTwoTone
                                                style={{
                                                    fontSize: '12px',
                                                    color: '#2F54EB',
                                                }}
                                                twoToneColor='#2F54EB'
                                            />
                                        }
                                    ></CardMain>
                                    <CardMain
                                        title='Заполнить профиль'
                                        text='Профиль'
                                        img={
                                            <IdcardOutlined
                                                style={{
                                                    fontSize: '12px',
                                                    color: '#2F54EB',
                                                }}
                                                twoToneColor='#2F54EB'
                                            />
                                        }
                                    ></CardMain>
                                </div>
                                <div className='trigger-main' data-test-id='sider-switch'>
                                    {React.createElement(
                                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                                        {
                                            className: 'trigger, trigger-main-span ',
                                            onClick: () => setCollapsed(!collapsed),
                                        },
                                    )}
                                </div>
                            </section>
                            <Footer />
                        </Content>
                    </Layout>
                </Layout>
                <ModalMenu isActive={isActive} />
            </div>
        </div>
    );
};
