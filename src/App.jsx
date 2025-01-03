import React from 'react';
import { Layout, FloatButton } from 'antd';
import HeaderComponent from './components/HeaderComponent';
import InicioSection from './components/InicioSection';
import SobreMiSection from './components/SobreMiSection';
import ProyectosSection from './components/ProyectosSection';
import HabilidadesSection from './components/HabilidadesSection';
import ExperienceComponent from './components/ExperienceComponent';
import ContactoSection from './components/ContactoSection';
import FooterComponent from './components/FooterComponent';

const { Content } = Layout;

function Home() {
  return (
    <Layout className="layout">
      <HeaderComponent />

      <Content style={{ padding: '20px', textAlign: 'center' }}>
        <InicioSection />
        <SobreMiSection />
        <ProyectosSection />
        <HabilidadesSection />
        <ExperienceComponent />
        <ContactoSection />
        <FloatButton.BackTop />
      </Content>

      <FooterComponent />
    </Layout>
  );
}

export default Home;