import React, { useState } from 'react';
import { Layout, Menu, Avatar, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;

const HeaderComponent = () => {
    const [visible, setVisible] = useState(false);

    const toggleDrawer = () => {
        setVisible(!visible);
    };

    const headerMenu = (e) => {
        let section = document.getElementById(e.key);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setVisible(false); // Cerrar el menú al hacer clic en un elemento
        }
    };

    return (
        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Avatar src="src/images/logo.png" size="large" />
            <div className="desktop-menu" style={{ flexGrow: 1, justifyContent: 'center', display: 'none', alignItems: 'center' }}>
                <Menu theme="dark" mode="horizontal" onClick={headerMenu} style={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Menu.Item key="inicio">Inicio</Menu.Item>
                    <Menu.Item key="sobre-mi">Sobre Mí</Menu.Item>
                    <Menu.Item key="proyectos">Proyectos</Menu.Item>
                    <Menu.Item key="contacto">Contacto</Menu.Item>
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
                title="Menú"
                placement="right"
                onClose={toggleDrawer}
                open={visible}

                width={250}
            >
                <Menu theme="light" mode="vertical" onClick={headerMenu}>
                    <Menu.Item key="inicio">Inicio</Menu.Item>
                    <Menu.Item key="sobre-mi">Sobre Mí</Menu.Item>
                    <Menu.Item key="proyectos">Proyectos</Menu.Item>
                    <Menu.Item key="contacto">Contacto</Menu.Item>
                </Menu>
            </Drawer>
        </Header>
    );
};

export default HeaderComponent;
