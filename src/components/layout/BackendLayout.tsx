import React, { useState } from 'react';

import {  Layout, Menu, theme } from 'antd';
import { TUser, useCurrentToken } from '@/redux/features/auths/authSlice';
import SidebarGenarator from '@/utils/SidebarGenarator';
import { adminPaths } from '@/routes/admin.routes';
import { userPaths } from '@/routes/user.routes';
import { useAppSelector } from '@/redux/hook';
import { verifyToken } from '@/utils/verifyToken';
import { Link, Outlet, useLocation } from 'react-router-dom';
import HoverProfileMenu from '../shared/HoverProfileMenu';


const {  Content, Footer, Sider } = Layout;


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
        <div className="demo-logo-vertical " />
        <Link to='/'>
        <h2 className='text-2xl font-bold text-white text-center py-5'>CAR WASH</h2>
        </Link>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems} />
      </Sider>
      <Layout >
       
        <Content style={{ margin: '0 16px' }}>
         <div className='flex justify-between mx-4 items-center'>
         {pathname}
         {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{pathname}</Breadcrumb.Item>
          </Breadcrumb> */}

          <HoverProfileMenu user={user}/>
         </div>
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
         Car Wash ©{new Date().getFullYear()} Created by Ashiq
        </Footer>
      </Layout>
    </Layout>
  );
};

export default BackendLayout;