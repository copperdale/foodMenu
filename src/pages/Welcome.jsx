import React from 'react';
import { Drawer, Icon, Button, Input, InputNumber, Divider } from 'antd'

class Welcome extends React.Component {
  state = {
    visible: false,
    extraPrice: 0,
    head: 2,
    selected: [
      {
        name: '藤椒鸡',
        unitPrice: 18,
        count: 1
      },
      {
        name: '特色卤肉',
        unitPrice: 15,
        count: 1
      }
    ],
    menus: [
      {
        sectionTitle: '特色菜',
        items: [
          {
            name: '藤椒鸡',
            unitPrice: 18,
            count: 1
          },
          {
            name: '特色卤肉',
            unitPrice: 15,
            count: 1
          }
        ]
      },
      {
        sectionTitle: '鱼',
        items: [
          {
            name: '水煮鱼',
            unitPrice: 35,
            count: 1
          },
          {
            name: '脆皮鱼',
            unitPrice: 35,
            count: 1
          },
          {
            name: '酸菜鱼',
            unitPrice: 35,
            count: 1
          },
          {
            name: '家常鱼',
            unitPrice: 28,
            count: 1
          },
          {
            name: '鲜椒鱼',
            unitPrice: 26,
            count: 1,
            unit: '斤'
          }
        ]
      },
      {
        sectionTitle: '凉菜',
        items: [
          {
            name: '凉拌猪头肉',
            unitPrice: 15,
            count: 1
          },
          {
            name: '凉拌黄瓜',
            unitPrice: 6,
            count: 1
          },
          {
            name: '凉拌三丝',
            unitPrice: 6,
            count: 1
          },
          {
            name: '凉拌茄子',
            unitPrice: 6,
            count: 1
          },
          {
            name: '凉拌豇豆',
            unitPrice: 6,
            count: 1
          }
        ]
      },
      {
        sectionTitle: '烧菜',
        items: [
          {
            name: '水煮牛肉',
            unitPrice: 38,
            count: 1
          },
          {
            name: '红烧肥肠',
            unitPrice: 28,
            count: 1
          },
          {
            name: '红烧牛肉',
            unitPrice: 28,
            count: 1
          },
          {
            name: '红烧排骨',
            unitPrice: 25,
            count: 1
          },
          {
            name: '红烧鸡',
            unitPrice: 25,
            count: 1
          },
          {
            name: '青笋肚条',
            unitPrice: 22,
            count: 1
          },
          {
            name: '水煮肉片',
            unitPrice: 18,
            count: 1
          },
          {
            name: '麻婆豆腐',
            unitPrice: 10,
            count: 1
          },
          {
            name: '烧血旺',
            unitPrice: 8,
            count: 1
          }
        ]
      },
      {
        sectionTitle: '炖菜',
        items: [
          {
            name: '东坡肘子',
            unitPrice: 48,
            count: 1
          },
          {
            name: '蹄花汤',
            unitPrice: 16,
            count: 1
          },
          {
            name: '碗豆肥肠',
            unitPrice: 15,
            count: 1
          }
        ]
      },
      {
        sectionTitle: '炒菜',
        items: [
          {
            name: '爆炒腰花',
            unitPrice: 18,
            count: 1
          },
          {
            name: '肝腰合炒',
            unitPrice: 16,
            count: 1
          },
          {
            name: '回锅肉',
            unitPrice: 14,
            count: 1
          },
          {
            name: '鸡杂',
            unitPrice: 14,
            count: 1
          },
          {
            name: '爆炒粉肠',
            unitPrice: 13,
            count: 1
          },
          {
            name: '爆炒猪肝',
            unitPrice: 13,
            count: 1
          },
          {
            name: '爆炒脆肠',
            unitPrice: 13,
            count: 1
          },
          {
            name: '青椒肉丝',
            unitPrice: 13,
            count: 1
          },
          {
            name: '蒜薹肉丝',
            unitPrice: 13,
            count: 1
          },
          {
            name: '土豆肉丝',
            unitPrice: 13,
            count: 1
          },
          {
            name: '木耳肉片',
            unitPrice: 13,
            count: 1
          },
          {
            name: '莴笋肉片',
            unitPrice: 13,
            count: 1
          },
          {
            name: '鱼香肉丝',
            unitPrice: 13,
            count: 1
          },
          {
            name: '鱼香茄子',
            unitPrice: 10,
            count: 1
          },
          {
            name: '番茄炒蛋',
            unitPrice: 10,
            count: 1
          },
          {
            name: '青椒土豆丝',
            unitPrice: 6,
            count: 1
          },
          {
            name: '炝炒莲白',
            unitPrice: 6,
            count: 1
          },
          {
            name: '炒时蔬',
            unitPrice: 6,
            count: 1
          }
        ]
      },
      {
        sectionTitle: '干锅系列',
        items: [
          {
            name: '干锅鸡（小）',
            unitPrice: 48,
            count: 1
          },
          {
            name: '干锅鸡(中)',
            unitPrice: 68,
            count: 1
          },
          {
            name: '干锅鸡(大)',
            unitPrice: 88,
            count: 1
          },
          {
            name: '干锅排骨(小)',
            unitPrice: 48,
            count: 1
          },
          {
            name: '干锅排骨(中)',
            unitPrice: 68,
            count: 1
          },
          {
            name: '干锅排骨(大)',
            unitPrice: 88,
            count: 1
          },
          {
            name: '干锅肥肠(小)',
            unitPrice: 58,
            count: 1
          },
          {
            name: '干锅肥肠(中)',
            unitPrice: 78,
            count: 1
          },
          {
            name: '干锅肥肠(大)',
            unitPrice: 98,
            count: 1
          }
        ]
      },
      {
        sectionTitle: '汤菜',
        items: [
          {
            name: '圆子汤',
            unitPrice: 14,
            count: 1
          },
          {
            name: '酥肉汤',
            unitPrice: 14,
            count: 1
          },
          {
            name: '番茄蛋汤',
            unitPrice: 8,
            count: 1
          },
          {
            name: '紫菜蛋花汤',
            unitPrice: 8,
            count: 1
          },
          {
            name: '酸菜粉丝汤',
            unitPrice: 8,
            count: 1
          },
          {
            name: '小白菜豆腐汤',
            unitPrice: 8,
            count: 1
          }
        ]
      },
      {
        sectionTitle: '豆花旺子',
        items: [
          {
            name: '豆花',
            unitPrice: 5,
            count: 1
          },
          {
            name: '血旺',
            unitPrice: 5,
            count: 1
          }
        ]
      }
    ]
  };

  onClose = () => {
    this.setState({ visible: false });
  }

  priceSummary = () => {
    let selected = this.state.selected;
    return selected.reduce((temp, item) => {
      return temp + item.unitPrice * (Number(item.count) || 1);
    }, Number(this.state.extraPrice))
  }

  everyPrice = () => {
    let summaryPrice = this.priceSummary();
    let head = this.state.head || 1;
    let result = Number(summaryPrice / Number(head)).toFixed(2);
    return result;
  }

  updateSelectedCount = (item, value) => {
    let selected = this.state.selected;
    selected = selected.map((data) => {
      if (data.name === item.name) {
        data.count = value;
      }
      return data;
    });
    this.setState({
      selected
    });
    // return JSON.parse(JSON.stringify(selected));
  }

  renderDrawer = () => {
    let selected = this.state.selected;
    return (
      <Drawer
        title="点单记录"
        placement="right"
        closable={true}
        onClose={this.onClose}
        visible={this.state.visible}
        width='90%'
      >
        {
          selected.map((item, index) => {
            return (
              <div style={{ fontWeight: 'bold' }}>
                <span style={{ display: 'inline-block', width: '50%' }}>
                  {index+1}. {item.name}
                </span>
                <span style={{ color: '#b93416' }}>
                  <InputNumber
                    style={{ width: '60px' }} size="small" value={item.count}
                    onChange={(value) => { this.updateSelectedCount(item, value); }}
                  />
                  {item.unit === '斤' ? '斤' : '份'}
                  &nbsp;
                  {item.unitPrice}元 {item.unit ? `/${item.unit}` : ''}
                  {/* <Button onClick={() => { this.toggleSelected(item) }} type="link">删除</Button> */}
                  <Icon type="delete" style={{ color: '#096dd9', cursor: 'pointer' }} onClick={() => { this.toggleSelected(item) }} />
                </span>
                <hr />
              </div>
            );
          })
        }
        {
          selected.length
          ?
          <div style={{ fontWeight: 'bold' }}>
            其它： <InputNumber size="small" value={this.state.extraPrice} onChange={(value) => { this.setState({ extraPrice: value }) }} /> 元
          </div>
          : ''
        }
        {
          selected.length
          ?
          <div style={{ fontWeight: 'bold', marginTop: '4px' }}>
            人数： <InputNumber size="small" value={this.state.head} onChange={(value) => { this.setState({ head: value }) }} />
          </div>
          : ''
        }
        <div style={{ fontSize: '24px' }}>
          人均： <span style={{ color: '#b93416', fontWeight: 'bold' }}>{this.everyPrice()}</span>元
        </div>
        <div style={{ fontSize: '24px' }}>
          总计： <span style={{ color: '#b93416', fontWeight: 'bold' }}>{this.priceSummary()}</span>元
        </div>
        <hr />
      </Drawer>
    );
    
  }

  toggleSelected = (item) => {
    let selected = this.state.selected;
    if (selected.some(data => data.name === item.name)) {
      selected = selected.filter(data => data.name !== item.name);
    } else {
      selected.push(item);
    }
    this.setState({
      selected
    });
  }

  renderMenu = () => {
    let menus = this.state.menus;
    let selectedColor = '#b93416';
    let selected = this.state.selected;
    const getColor = (item) => {
      let result = '#000';
      if (selected.some(data => data.name === item.name)) {
        result = selectedColor;
      }
      return result;
    };
    return menus.map((menu) => {
      return (
        <div
          class="section-wrap"
          // style={{
          //   display: 'inline-block',
          //   width: '49%'
          // }}
        >
          <div style={{
            backgroundColor: '#b93416',
            color: '#FFFFFF',
            padding: '2px',
            fontWeight: 'bold',
          }}>
            {menu.sectionTitle}
          </div>
          {
            menu.items.map((item) => {
              return (
                <div style={{ fontWeight: 'bold', cursor: 'pointer', color: getColor(item) }} onClick={() => { this.toggleSelected(item); }}>
                  <span>
                  {item.name}
                  </span>
                  <span style={{ float: 'right', color: '#b93416' }}>
                    {item.unitPrice}元 {item.unit ? `/${item.unit}` : ''}
                  </span>
                </div>
              )
            })
          }
        </div>
      );
    });
  }

  render() {
    let menusHtml = this.renderMenu();
    let renderDrawerHtml = this.renderDrawer();
    return (
      <div style={{ padding: '6px' }}>
        <Icon style={{ position: 'fixed', right: '12px', top: '12px', cursor: 'pointer', backgroundColor: '#FFFF', transform: 'scale(2)', color: '#1890ff' }} type="menu-fold" onClick={() => { this.setState({ visible: true }) }} />
        {menusHtml}
        {renderDrawerHtml}
      </div>
    );
  }
}
export default Welcome;