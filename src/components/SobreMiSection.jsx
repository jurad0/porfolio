import React from 'react';
import { Row, Col, Typography } from 'antd';

const SobreMiSection = () => (
    <section id="sobre-mi" style={{ paddingTop: 100 }}>
        <Row justify="center">
            <Typography.Title level={2}>Sobre Mí</Typography.Title>
        </Row>
        <Row justify="center">
            <Col span={16}>
                <Typography.Text strong>
                    Hola, mi nombre es Antonio y soy Técnico en Desarrollo de Aplicaciones Web. Tengo una sólida base en desarrollo web adquirida a través de mi reciente formación. Estoy altamente motivado para aprender nuevas tecnologías y metodologías. Durante mis estudios, desarrollé un interés particular por el desarrollo backend, dedicando mi tiempo libre a profundizar en este campo. Estoy convencido de que mi pasión por la tecnología y mi capacidad de adaptación me permitirán contribuir eficazmente en cualquier equipo de desarrollo.
                </Typography.Text>
            </Col>
        </Row>
    </section>
);

export default SobreMiSection;