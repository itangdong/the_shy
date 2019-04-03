import React from 'react'
import { Layout, Menu, Icon ,Input,Modal} from 'antd';
import FormList from '../components/FormList'
import {connect} from "dva";

const {
   Sider
} = Layout;


class autoForm extends React.Component {
  state = { visible: false,leftKey:'' ,inputName:''}


  showModal = (e) => {
    // console.log(this)
    // console.log(e)
    this.setState({
      visible: true,
      leftKey:e.key
    });
  }

  handleOk = () => {
    let obj ={}
    if(this.state.leftKey === '1'){
      obj.key = 1
      obj.value = this.refs.inp.state.value
    }
    this.props.dispatch({
      type: 'form/add',
      payload: obj
    })
    this.setState({
      visible: false,
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Layout>
        <Sider style={{
          overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
        }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" >
            <Menu.Item key="1" onClick={this.showModal}>
              <Icon type="user" />
              <span className="nav-text">文本输入框</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={this.showModal}>
              <Icon type="video-camera" />
              <span className="nav-text">文本域</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">下拉框</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="bar-chart" />
              <span className="nav-text">日期选择</span>
            </Menu.Item>
          </Menu>
        </Sider>
        < FormList listArr={this.props.form} />
          <div>
            <Modal
              title="设置属性"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >

              请输入输入框名称：<br/><br/><Input ref='inp' placeholder="请输入输入框名称" />
            </Modal>
          </div>
      </Layout>
      </div>

    );
  }
}

export default connect(({ form }) => ({
  form
}))(autoForm);
