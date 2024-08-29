import React, { useState } from 'react';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { TUser, useCurrentToken } from '@/redux/features/auths/authSlice';
import SidebarGenarator from '@/utils/SidebarGenarator';
import { adminPaths } from '@/routes/admin.routes';
import { userPaths } from '@/routes/user.routes';
import { useAppSelector } from '@/redux/hook';
import { verifyToken } from '@/utils/verifyToken';
import { Outlet, useLocation } from 'react-router-dom';


const { Header, Content, Footer, Sider } = Layout;


const userRole ={
  ADMIN: 'admin',
  USER:'user'
}

const BackendLayout: React.FC = () => {
  const location = useLocation();
   
    
    const pathname = location.pathname;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
const token = useAppSelector(useCurrentToken);
let user;
if(token){
  user = verifyToken(token);
}

  let sidebarItems:any;
  
  switch((user as TUser)!.role){
    case userRole.ADMIN:
      sidebarItems = SidebarGenarator(adminPaths,userRole.ADMIN);
      break;
    case userRole.USER:
      sidebarItems= SidebarGenarator(userPaths,userRole.USER)
      break;
      default:
        break;
  } 




  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <h2 className='text-2xl font-bold text-white text-center py-5'>CAR WASH</h2>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{pathname}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
           <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
         Car Wash ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default BackendLayout;