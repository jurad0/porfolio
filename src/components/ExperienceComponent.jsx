import { Card, Divider, Row, Timeline, Typography } from 'antd';


const ExperienceComponent = () => {

    return (

        <section id="experience" style={{ paddingTop: 100 }}>
            <Row justify="center">
                <Typography.Title level={2}>Experience</Typography.Title>
            </Row>
            <Row justify="center" style={{ marginTop: 20 }}>
                <Timeline mode="alternate" className='expcards' style={{ width: '50%' }}>
                    <Timeline.Item>
                        <Card className='timeline-card' bordered={false} style={{ marginBottom: 20 }} hoverable>
                            <Typography.Title level={5}>Intermediate Diploma in Microcomputer Systems and Networks</Typography.Title>
                            <Divider />
                            <Typography.Text italic>
                                Equivalent to a Level 3 qualification focused on IT support, networking, and microcomputer systems administration.
                            </Typography.Text>
                            <Divider />
                            <Typography.Text strong>2019 - 2022</Typography.Text>
                        </Card>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Card bordered={false} style={{ marginBottom: 20 }} hoverable>
                            <Typography.Title level={5}>IT Technician (Microcomputer Systems)</Typography.Title>
                            <Typography.Text italic>JDZ Informática</Typography.Text>
                            <Divider />

                            <Typography.Text strong>Mar 2022 - Jun 2022</Typography.Text>
                        </Card>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Card bordered={false} style={{ marginBottom: 20 }} hoverable>
                            <Typography.Title level={5}>Advanced Diploma in Web Application Development</Typography.Title>
                            <Divider />
                            <Typography.Text italic>
                                Equivalent to a Level 5 qualification specializing in web development, including front-end and back-end programming, database management, and web application design.
                            </Typography.Text>
                            <Divider />
                            <Typography.Text strong>2022 - 2024</Typography.Text>
                        </Card>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Card bordered={false} style={{ marginBottom: 20 }} hoverable>
                            <Typography.Title level={5}>Intern Software Developer</Typography.Title>

                            <Typography.Text italic>Solum Photovoltaic Innovation</Typography.Text>

                            <Divider />
                            <Typography.Text strong>Mar 2024 - June 2024</Typography.Text>
                        </Card>
                    </Timeline.Item>
                </Timeline>

            </Row>
        </section>

    );
}

export default ExperienceComponent;