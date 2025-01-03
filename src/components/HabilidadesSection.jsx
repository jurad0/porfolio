import React from 'react';
import { Row, Typography, Col, } from 'antd';
import { FaJava, FaPython, FaPhp, FaReact, FaGit } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiDjango, SiSpringboot, SiMysql, SiMongodb } from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";

const HabilidadesSection = () => {
    const skills = [
        { icon: <FaJava />, label: 'Java', color: '#007396' },
        { icon: <SiJavascript />, label: 'JavaScript', color: '#F7DF1E' },
        { icon: <FaPython />, label: 'Python', color: '#3776AB' },
        { icon: <FaPhp />, label: 'PHP', color: '#777BB4' },
        { icon: <SiHtml5 />, label: 'HTML', color: '#E34F26' },
        { icon: <SiCss3 />, label: 'CSS', color: '#1572B6' },
        { icon: <FaReact />, label: 'React', color: '#61DAFB' },
        { icon: <SiDjango />, label: 'Django', color: '#092E20' },
        { icon: <SiSpringboot />, label: 'Spring Boot', color: '#6DB33F' },
        { icon: <SiMysql />, label: 'MySQL', color: '#4479A1' },
        { icon: <SiMongodb />, label: 'MongoDB', color: '#47A248' },
        { icon: <VscAzure />, label: 'Azure', color: '#0078D4' },
        { icon: <FaGit />, label: 'Git', color: '#F05032' },
    ];

    return (
        <section id="skills" style={{ paddingTop: 100 }}>
            <Row justify="center">
                <Typography.Title level={2}>Skills</Typography.Title>
            </Row>
            <Row justify="center" gutter={[16, 16]} style={{ marginTop: 20 }}>
                {skills.map((skill, index) => (
                    <Col key={index} xs={8} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                        <div style={{ fontSize: 32, color: skill.color }}>{skill.icon}</div>
                        <Typography.Text>{skill.label}</Typography.Text>
                    </Col>
                ))}
            </Row>

        </section>
    );
};

export default HabilidadesSection;
