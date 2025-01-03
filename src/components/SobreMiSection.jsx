import React from 'react';
import { Row, Col, Typography } from 'antd';

const SobreMiSection = () => (
    <section id="sobre-mi" style={{ paddingTop: 100 }}>
        <Row justify="center">
            <Typography.Title level={2}>About me</Typography.Title>
        </Row>
        <Row justify="center">
            <Col span={16}>
                <Typography.Text strong>
                    Hi, I’m Antonio, a Web Applications Development Technician.
                    I have a solid foundation in web development gained during my recent training, and I’m highly motivated to continue learning and exploring new technologies and methodologies. My passion for technology has led me to develop a particular interest in backend development, dedicating my free time to refining my skills in this area.

                    I’m an adaptable, solution-oriented individual who values teamwork and collaboration. I’m confident that my enthusiasm, ability to learn quickly, and proactive approach will enable me to contribute effectively to any project or development team I join.
                </Typography.Text>
            </Col>
        </Row>
    </section>
);

export default SobreMiSection;