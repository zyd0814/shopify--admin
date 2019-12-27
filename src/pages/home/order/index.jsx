import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Icon } from 'antd';

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <PageHeaderWrapper>
        <div style={{float: 'left'}}>
          <Card style={{ width: 300 }}>
            <p>今天的营销额</p>
            <h2>US$20.68</h2>
            <hr/>
            <span>总订单数：1</span>
          </Card>

          <Card style={{ width: 400,marginTop:30 }}>
            <div>
              <a>
                <span style={{lineHeight: 2}}>13个订单待发货</span>
                <Icon style={{lineHeight: 2,float: 'right'}} type="right" />
              </a>
            </div>
            <hr/>
            <div>
              <a>
                <span style={{lineHeight: 2}}>1项付款待获取</span>
                <Icon style={{lineHeight: 2,float: 'right'}} type="right" />
              </a>
            </div>
          </Card>
        </div>
        <div style={{float: 'right'}}>
          <Card title="热门产品" extra={<a href="#">今天</a>} style={{ width: 500 }}>
             <div style={{display: 'flex',justifyContent:'space-between'}}>
               <div >
                 <img src="https://www.runoob.com/wp-content/uploads/2015/07/7bf8bed24a17fbebd3e171f9630dbccb.gif" alt="" style={{height:50,width:50}}/>
               </div>
               <div >
                 <h4>2019 Winter Shoes Men Warm</h4>
                 <p>BlackwithBrushed/46·1个订单</p>
               </div>
               <div>
                 <p>US$31.45</p>
               </div>
             </div>
            <div style={{display: 'flex',justifyContent:'space-between'}}>
              <div >
                <img src="https://www.runoob.com/wp-content/uploads/2015/07/7bf8bed24a17fbebd3e171f9630dbccb.gif" alt="" style={{height:50,width:50}}/>
              </div>
              <div >
                <h4>2019 Winter Shoes Men Warm</h4>
                <p>BlackwithBrushed/46·1个订单</p>
              </div>
              <div>
                <p>US$31.45</p>
              </div>
            </div>
            <div style={{display: 'flex',justifyContent:'space-between'}}>
              <div >
                <img src="https://www.runoob.com/wp-content/uploads/2015/07/7bf8bed24a17fbebd3e171f9630dbccb.gif" alt="" style={{height:50,width:50}}/>
              </div>
              <div >
                <h4>2019 Winter Shoes Men Warm</h4>
                <p>BlackwithBrushed/46·1个订单</p>
              </div>
              <div>
                <p>US$31.45</p>
              </div>
            </div>
          </Card>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
