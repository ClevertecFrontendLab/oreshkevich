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
import { CardMain } from '../card';
import { Footer } from '../footer';
import logo from '../../../assets/svg/logo.svg';
import './main.scss';
import { Card, Col, Row } from 'antd';

const { Sider, Content } = Layout;

export const Main: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className='wrapper'>
            <div className='container-main'>
                <Layout>
                    <Sider theme='light' trigger={null} collapsible collapsed={collapsed}>
                        <div className='logo'>
                            <img loading='lazy' className='logo__img' src={logo} alt='logo' />
                        </div>
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
                                    key: '3',
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
                    </Sider>
                    <Layout className='site-layout'>
                        <Header />
                        <Content className='welcome'>
                            <section className='container'>
                                {React.createElement(
                                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                                    {
                                        className: 'trigger , trigger-main',
                                        onClick: () => setCollapsed(!collapsed),
                                    },
                                )}
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
                                    <Row gutter={16}>
                                        <Col span={8}>
                                            <CardMain
                                                title='Расписать тренировки'
                                                text='Тренировки'
                                                img={
                                                    <HeartFilled
                                                        style={{
                                                            fontSize: '14px',
                                                            color: '#2F54EB',
                                                        }}
                                                        twoToneColor='#2F54EB'
                                                    />
                                                }
                                            ></CardMain>
                                        </Col>
                                        <Col span={8}>
                                            <CardMain
                                                title=' Назначить календарь'
                                                text='Календарь'
                                                img={
                                                    <CalendarTwoTone
                                                        style={{
                                                            fontSize: '14px',
                                                            color: '#2F54EB',
                                                        }}
                                                        twoToneColor='#2F54EB'
                                                    />
                                                }
                                            ></CardMain>
                                        </Col>
                                        <Col span={8}>
                                            <CardMain
                                                title='Заполнить профиль'
                                                text='Профиль'
                                                img={
                                                    <IdcardOutlined
                                                        style={{
                                                            fontSize: '14px',
                                                            color: '#2F54EB',
                                                        }}
                                                        twoToneColor='#2F54EB'
                                                    />
                                                }
                                            ></CardMain>
                                        </Col>
                                    </Row>
                                </div>
                            </section>
                            <Footer />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        </div>
    );
};
