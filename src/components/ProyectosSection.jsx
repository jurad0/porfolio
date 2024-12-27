import React, { useState } from 'react';
import { Row, Card, Typography, Modal, Button, Carousel } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ProyectosSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <section id="proyectos">
            <Row justify="center">
                <Typography.Title level={2}>Proyectos</Typography.Title>
            </Row>
            <Row justify="center">
                <Card
                    style={{ width: 300, margin: 10, paddingBottom: 10 }}
                    hoverable
                    cover={<img alt="example" src="src/images/whatever.png" />}
                    actions={[]}
                    onClick={showModal} // Muestra el modal al hacer clic
                >
                    <Meta
                        title="WhatEver"
                        description="Whatever es una aplicación web diseñada para ayudar a los estudiantes a gestionar y organizar sus apuntes de manera eficiente."
                    />
                </Card>
            </Row>

            {/* Modal para mostrar detalles del proyecto */}
            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="close" onClick={handleCancel}>
                        Cerrar
                    </Button>,
                ]}
            >
                <Typography.Title level={4}>WhatEver</Typography.Title>
                <Typography.Paragraph>
                    Este proyecto es una aplicación web diseñada para ayudar a los estudiantes a gestionar y organizar
                    sus apuntes de manera eficiente. Permite crear, editar, visualizar y eliminar tareas, así como subir y visualizar archivos PDF relacionados.
                </Typography.Paragraph>

                <Carousel autoplay>
                    <div>
                        <img
                            src="src/images/whatever.png"
                            alt="Vista principal"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div>
                        <img
                            src="src/images/whatever2.png"
                            alt="Vista secundaria"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </Carousel >

                <Typography.Text strong>Frontend Technologies</Typography.Text>
                <ul>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>React Bootstrap</li>
                </ul>
                <Typography.Text strong>Backend Technologies</Typography.Text>
                <ul>
                    <li>Python</li>
                    <li>Django</li>
                    <li>Django Rest Framework</li>
                    <li>JWT</li>
                </ul>
                <Typography.Text strong>Databases</Typography.Text>
                <ul>
                    <li>MongoDB</li>
                    <li>Azure Blob Storage</li>
                </ul>
                <Typography.Text strong>Deployment</Typography.Text>
                <ul>
                    <li>Docker Compose</li>
                    <li>Azure</li>
                </ul>
                <Typography.Text strong>Repositorio:</Typography.Text>
                <Button
                    type="link"
                    icon={<GithubOutlined />}
                    href="https://github.com/jurad0/Gestor-Notas"
                    target="_blank"
                >
                    GitHub
                </Button>
            </Modal>
        </section>
    );
};

export default ProyectosSection;
