import React, { useState } from 'react';
import { Layout, Menu, Avatar, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from '/images/logo.png';

const { Header } = Layout;

const HeaderComponent = () => {
    const [visible, setVisible] = useState(false);

    const toggleDrawer = () => {
        setVisible(!visible);
    };

    const headerMenu = (e) => {
        let section = document.getElementById(e.key);
        if (section) {
            const yOffset = -70; // Altura del header
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setVisible(false);
        }
    };


    return (
        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Avatar src={logo} size="large" />
            <div className="desktop-menu" style={{ flexGrow: 1, justifyContent: 'center', display: 'none', alignItems: 'center' }}>
                <Menu theme="dark" mode="horizontal" onClick={headerMenu} style={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Menu.Item key="inicio">Home</Menu.Item>
                    <Menu.Item key="sobre-mi">About Me</Menu.Item>
                    <Menu.Item key="proyectos">Proyects</Menu.Item>
                    <Menu.Item key="skills">Skills</Menu.Item>
                    <Menu.Item key="experience">Experience</Menu.Item>
                    <Menu.Item key="contacto">Contact Me</Menu.Item>
                </Menu>
            </div>
            <Button
                className="mobile-menu-button"
                type="text"
                icon={<MenuOutlined style={{ fontSize: 24, color: '#fff' }} />}
                onClick={toggleDrawer}
                style={{ display: 'block' }}
            />
            <Drawer
                title="Menu"
                placement="right"
                onClose={toggleDrawer}
                open={visible}

                width={250}
            >
                <Menu theme="light" mode="vertical" onClick={headerMenu}>
                    <Menu.Item key="inicio">Home</Menu.Item>
                    <Menu.Item key="sobre-mi">About Me</Menu.Item>
                    <Menu.Item key="proyectos">Proyects</Menu.Item>
                    <Menu.Item key="skills">Skills</Menu.Item>
                    <Menu.Item key="experience">Experience</Menu.Item>
                    <Menu.Item key="contacto">Contact Me</Menu.Item>
                </Menu>
            </Drawer>
        </Header>
    );
};

export default HeaderComponent;
