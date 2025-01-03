import React from 'react';
import { Row, Col, Typography, Space, Button, Popover, Card } from 'antd';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';

const ContactoSection = () => {
    const email = "antoniojuradomiranda@gmail.com";

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(email);
    };

    return (

        <section id="contacto" style={{ padding: '40px 20px', textAlign: 'center' }}>
            <Row justify="center">
                <Typography.Title level={2}>Contact Me</Typography.Title>
            </Row>
            <Row justify="center" style={{ marginBottom: 20 }}>
                <Col span={16}>
                    <Typography.Paragraph>
                        I am excited to connect with you! If you have any questions, proposals, or just want to say hello, feel free to reach out.
                        You can contact me through social media or send me an email. I will get back to you as soon as possible!
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                        Based in <strong>Seville, Spain</strong>. Open to global and remote opportunities.
                    </Typography.Paragraph>
                </Col>
            </Row>
            <Row justify="center">
                <Space size="large">
                    <a href="https://linkedin.com/in/antonio-jurado-miranda" target="_blank" rel="noopener noreferrer">
                        <LinkedinOutlined style={{ fontSize: '24px', color: '#0e76a8' }} />
                    </a>
                    <a href="https://github.com/jurad0" target="_blank" rel="noopener noreferrer">
                        <GithubOutlined style={{ fontSize: '24px', color: '#333' }} />
                    </a>
                    <Popover
                        content={

                            <Typography.Text copyable>{email}</Typography.Text>

                        }


                    >
                        <MailOutlined style={{ fontSize: '24px', color: '#EA4335', cursor: 'pointer' }} />
                    </Popover>
                </Space>
            </Row >
            <Row justify="center" style={{ marginTop: 30 }}>
                <Button type="primary" size="large" href="mailto:antoniojuradomiranda@gmail.com">
                    Send me an email
                </Button>
            </Row>


        </section >

    );
};

export default ContactoSection;
