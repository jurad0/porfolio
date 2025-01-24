import React, { useState } from 'react';
import { Row, Card, Typography, Modal, Button, Carousel, Image, List } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import whatever from '/images/whatever.png';
import whatever2 from '/images/whatever2.png';
import juradogram1 from '/images/juradogram1.png';
import juradostore1 from '/images/juradostore1.png';
import juradostore2 from '/images/juradostore2.png';
import juradostore3 from '/images/juradostore3.png';



const { Meta } = Card;

const ProyectosSection = () => {
    const [isModalOpen, setIsModalOpen] = useState({});

    const showModal = (key) => {
        setIsModalOpen((prev) => ({ ...prev, [key]: true }));
    };

    const handleCancel = (key) => {
        setIsModalOpen((prev) => ({ ...prev, [key]: false }));
    };

    return (
        <section id="proyectos" style={{ paddingTop: 100 }}>
            <Row justify="center">
                <Typography.Title level={2}>Proyects</Typography.Title>
            </Row>

            <Row justify="center" gutter={[16, 16]}>
                {/* Card 1 */}
                <Card
                    style={{ width: 400, margin: 10, paddingBottom: 10 }}
                    hoverable
                    cover={<img alt="whatever" src={whatever} />}
                    onClick={() => showModal('whatever')}
                >
                    <Meta
                        title="WhatEver"
                        description="Whatever is a web application designed to help students manage and organize their notes efficiently."
                    />
                </Card>

                {/* Card 2 */}
                <Card
                    style={{ width: 400, margin: 10, paddingBottom: 10 }}
                    hoverable
                    cover={<img alt="juradogram" src={juradogram1} />}
                    onClick={() => showModal('juradogram')}
                >
                    <Meta
                        title="Juradogram"
                        description="Juradogram is a social media platform where users can post, like, and comment on photos."
                    />
                </Card>

                <Card
                    style={{ width: 400, margin: 10, paddingBottom: 10 }}
                    hoverable
                    cover={<img alt="juradostore" src={juradostore1} />}
                    onClick={() => showModal('juradostore')}
                >
                    <Meta
                        title="JuradoStore"
                        description="JuradoStore is an e-commerce platform offering a seamless online shopping experience."
                    />
                </Card>
            </Row>

            {/* Modal for WhatEver */}
            <Modal
                open={isModalOpen['whatever'] || false}
                onCancel={() => handleCancel('whatever')}
                footer={[
                    <Button key="close" onClick={() => handleCancel('whatever')}>
                        Close
                    </Button>,
                ]}
            >
                <Typography.Title level={4}>WhatEver</Typography.Title>
                <Typography.Paragraph>
                    This project is a web application designed to help students manage and organize their notes efficiently. It allows users to create,
                    edit, view, and delete tasks, as well as upload and view related PDF files.
                </Typography.Paragraph>

                <Carousel autoplay>
                    <div>

                        <Image

                            src={whatever}
                            alt="Main tasks"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div>
                        <Image
                            src={whatever2}
                            alt="Secondary tasks"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </Carousel>

                <Typography.Text strong>Frontend Technologies</Typography.Text>
                <List size='small'
                    dataSource={['Javascript', 'React', 'React Bootstrap']}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <br />
                <Typography.Text strong>Backend Technologies</Typography.Text>
                <List size='small'
                    dataSource={['Python', 'Django', 'Django Rest Framework', 'JWT']}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <br />
                <Typography.Text strong>Databases</Typography.Text>
                <List size='small'
                    dataSource={['MongoDB', 'Azure Blob Storage']}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <br />
                <Typography.Text strong>Deployment</Typography.Text>
                <List size='small'
                    dataSource={['Docker Compose', 'Azure']}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <br />
                <Typography.Text strong>Repository:</Typography.Text>
                <Button
                    type="link"
                    icon={<GithubOutlined />}
                    href="https://github.com/jurad0/Gestor-Notas"
                    target="_blank"
                >
                    GitHub
                </Button>
            </Modal>

            {/* Modal for Juradogram */}
            <Modal
                open={isModalOpen['juradogram'] || false}
                onCancel={() => handleCancel('juradogram')}
                footer={[
                    <Button key="close" onClick={() => handleCancel('juradogram')}>
                        Close
                    </Button>,
                ]}
            >
                <Typography.Title level={4}>Juradogram</Typography.Title>
                <Typography.Paragraph>
                    Juradogram is a social media platform where users can post, like, and comment on photos. It includes features for user authentication,
                    post sharing, and real-time updates.
                </Typography.Paragraph>

                <Carousel autoplay>
                    <div>
                        <Image
                            src={juradogram1}
                            alt="Juradogram home"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>


                </Carousel>

                <Typography.Text strong>Frontend Technologies</Typography.Text>
                <List size='small'
                    dataSource={['Bootstrap', 'HTML', 'CSS']}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />

                <Typography.Text strong>Backend Technologies</Typography.Text>
                <List size='small'
                    dataSource={['PHP']}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />

                <Typography.Text strong>Databases</Typography.Text>
                <List size='small'
                    dataSource={['MySQL']}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />

                <Typography.Text strong>Deployment</Typography.Text>
                <List size='small'
                    dataSource={['XAMP']}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />

                <Typography.Text strong>Repository:</Typography.Text>
                <Button
                    type="link"
                    icon={<GithubOutlined />}
                    href="https://github.com/jurad0/juradogram"
                    target="_blank"
                >
                    GitHub
                </Button>

            </Modal>

            <Modal
                open={isModalOpen['juradostore'] || false}
                onCancel={() => handleCancel('juradostore')}
                footer={[
                    <Button key="close" onClick={() => handleCancel('juradostore')}>
                        Close
                    </Button>,
                ]}
            >
                <Typography.Title level={4}>JuradoStore</Typography.Title>
                <Typography.Paragraph>
                    JuradoStore is an e-commerce platform that provides users with a smooth and intuitive shopping experience. It features product browsing,
                    cart management, and secure checkout processes.
                </Typography.Paragraph>

                <Carousel autoplay>
                    <div>
                        <Image
                            src={juradostore1}
                            alt="JuradoStore home"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div>
                        <Image
                            src={juradostore2}
                            alt="Login page"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div>
                        <Image
                            src={juradostore3}
                            alt="Profile page"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>

                </Carousel>

                <Typography.Text strong>Frontend Technologies</Typography.Text>
                <List size='small'
                    dataSource={['Javascript', 'Bootstrap', 'HTML', 'CSS']}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />

                <Typography.Text strong>Backend Technologies</Typography.Text>
                <List size='small'
                    dataSource={['Node.js']}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />

                <Typography.Text strong>Databases</Typography.Text>
                <List size='small'
                    dataSource={['MySQL']}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />

                <Typography.Text strong>Deployment</Typography.Text>
                <List size='small'
                    dataSource={['Azure']}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />

                <Typography.Text strong>Repository:</Typography.Text>
                <Button
                    type="link"
                    icon={<GithubOutlined />}
                    href="https://github.com/jurad0/JuradoStore"
                    target="_blank"
                >
                    GitHub
                </Button>

            </Modal>
        </section>
    );
};

export default ProyectosSection;