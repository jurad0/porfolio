import React from 'react';
import { Row, Col, Image, Typography, Button, Flex } from 'antd';
import { GithubOutlined, LinkedinOutlined, DownloadOutlined } from '@ant-design/icons';

const InicioSection = () => (
    <section id="inicio">
        <Row justify="center" align="middle" gutter={[16, 16]}>
            <Col xs={24} sm={24} md={10} lg={7} xl={6}>
                <Image className="profileImage" src="./src/images/fotoperfil.jpeg" width="100%" height="auto" alt="Antonio Jurado" />
            </Col>
            <Col xs={24} sm={24} md={10} lg={7} xl={6}>
                <Typography.Title className="titleName">Antonio Jurado</Typography.Title>
                <Typography.Title level={4}>Full Stack Developer</Typography.Title>
                <Flex justify="center" gap="middle">
                    <Button icon={<GithubOutlined />} size="large" href="https://github.com/jurad0" target="_blank"></Button>
                    <Button icon={<LinkedinOutlined />} size="large" href="https://www.linkedin.com/in/antonio-jurado-miranda/" target="_blank"></Button>
                    <Button icon={<DownloadOutlined />} size="large" href="src/cvs/cvdev.pdf" download="AntonioJurado_CV.pdf">Descargar CV</Button>
                </Flex>
            </Col>
        </Row>
    </section>
);

export default InicioSection;