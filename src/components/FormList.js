import React from 'react'
import {Layout,Input,Button} from "antd";
import PropTypes from "prop-types";
import './form.less'
const {
  Header, Content, Footer,
} = Layout;

const FormList = ({listArr}) => {
  return (
    <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: '#fff', padding: '0 16px' ,fontSize:'24px',color:'rgb(166,173,179)'}} >表单预览</Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <ul className="formUl" style={{ padding: 24, background: '#fff', textAlign: 'center' }}>

          {listArr.map((item,index)=>{
            if(item.key === 1){
              return <li key={index}><Input addonBefore={item.value}  /></li>
            }
          })}
        </ul>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        {listArr.length > 0 ? (<div><Button style={{marginRight:'30px'}} type="primary">打&nbsp;印</Button><Button  type="default">清&nbsp;空</Button></div>) : '请在左侧边栏选择你需要的表单元素'}
      </Footer>
    </Layout>
  );
};
FormList.propTypes = {
  listArr: PropTypes.array.isRequired
};
export default  FormList
