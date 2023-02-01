import React,{useState,useEffect} from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import axios from "axios"
import { HashRouter, Routes, Route,useNavigate,Router,Outlet } from "react-router-dom";
import Home from "../../view/Home/Home";
const { Header, Content, Footer, Sider } = Layout;

const axiosFun=async()=>{
  console.log(111);
  // axios.post('http://localhost:9000/posts',{
  //   title:'2222',
  //   author:'22222222'
  // })
  // axios.put('http://localhost:9000/posts/1',{
  //   title:'1111',
  // })
  // axios.patch('http://localhost:9000/posts/1',{
  //   title:'2222',
  //   author:'22222222'
  // })
  // axios.delete('http://localhost:9000/posts/1')
  const {data}=await axios.get('http://localhost:9000/rights?_embed=children')
  console.log(22222,data);
}

interface ItemProps{
  key:string,
  id:number,
  icon:React.ReactNode,
  title:string,
  children:ItemProps[]
  pagepermisson:number
}

const filterItem=((data:any)=>{
  return data.filter((item:any)=>{
    return item.pagepermisson
  })
})
const getItem=((data:any)=>{
  console.log(123,data);
  
  return (data||[]).map((item:ItemProps)=>{
    const formatItem={
          // key:item.key,
          // icon: React.createElement(UserOutlined),
          key:item.key,
          label:item.title,
          children:getItem(item.children)
        }
        if(!formatItem.children?.length){
          delete formatItem.children
        }
    return formatItem
  })
})


const App: React.FC = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [menu,setMenu]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    axios.get('http://localhost:9000/rights?_embed=children').then(res=>{
      console.log(33333,res.data);
      const filterData=filterItem(res.data).map((item:any)=>{
        return {
          ...item,
          children:filterItem(item.children)
        }
      })
      console.log(2222,filterData);
      
      const mapData=getItem(filterData)
      console.log(33333,mapData); 
      setMenu(mapData)
    })
  },[])
  const clickMenu=({ item, key, keyPath, domEvent }:{ item:any, key:any, keyPath:any, domEvent:any })=>{
  console.log(123,item, key, keyPath, domEvent);
  console.log(333311,props);
  navigate(key)
}
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          onClick={clickMenu}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={menu}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} >
       {/* <Route path="/home" element={<Home></Home>}></Route> */}
       顶部
       </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div onClick={axiosFun} style={{ padding: 24, minHeight: 360, background: colorBgContainer }}><Outlet></Outlet></div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default App;