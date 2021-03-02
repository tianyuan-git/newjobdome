import React from 'react'
import { Table } from 'antd';

export default class Newjob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                {
                    key: '1',
                    job: '同城零售-ToB产品运营（猫超卡）-用户运营部门1',
                    address: '杭州',
                    updateTime: '9分钟前',
                },
                {
                    key: '2',
                    job: '阿里云智能事业群-系统研发专家-机器学习平台',
                    address: '杭州',
                    updateTime: '9分钟前',
                },
                {
                    key: '3',
                    job: '中台运营事业部-品牌搜索产品运营-上海',
                    address: '上海',
                    updateTime: '9分钟前',
                },
                {
                    key: '4',
                    job: '阿里妈妈技术-前端开发专家/高级专家-北京',
                    address: '北京',
                    updateTime: '9分钟前',
                },
                {
                    key: '5',
                    job: '同城零售-渠道拓展专家-天猫超市',
                    address: '杭州',
                    updateTime: '9分钟前',
                },
            ],
            flag: false
        }
    }
    getNewData = () => {
        let arr2 = [this.state.dataSource[0]]
        let arr1 = this.state.dataSource.slice(1, 5)
        this.setState({
            dataSource: [...arr1, ...arr2]
        });
    }
    carousel = () => {
        this.setIntervalId = setInterval(this.getNewData, 1000);
    }
    stopCarousel = () => {
        clearInterval(this.setIntervalId)
    }
    goCarousel = () => {
        this.carousel()
    }
    componentDidMount() {
        this.carousel()
    }

    render() {
        const theStyle = {
            width: "700px",
            height: "200px",
            borderTop: '12px solid #202020',
            borderBottom: '10px solid #202020',
            borderLeft: '6px solid #202020',
            borderRight: '8px solid #202020',
            padding: '10px'
        }

        const columns = [
            {
                title: '职位',
                width: '30rem',
                dataIndex: 'job',
                key: 'job',
                onCell: () => ({
                    style: {
                        color: '#709FAF',
                    }
                }),

            },
            {
                title: '地点',
                width: '13rem',
                dataIndex: 'address',
                key: 'address',
                onCell: () => ({
                    style: {
                        color: '#8D8F8E',
                    }
                }),
            },
            {
                title: '更新时间',
                width: '4rem',
                dataIndex: 'updateTime',
                key: 'updateTime',
                onCell: () => ({
                    style: {
                        color: '#B4BEC0',
                    }
                }),
            },
        ];
        return (
            <div style={theStyle}>
                <div style={{ marginBottom: "10px" }}>
                    <span style={{ aligh: 'left', fontSize: "22px" }}>最新职位</span >
                    <span style={{ float: 'right', color: "#B4BEC0" }}>更多</span>
                </div>
                <Table
                    columns={columns}
                    dataSource={this.state.dataSource}
                    pagination={false}
                    showHeader={false}
                    onRow={record => {
                        return {
                            onMouseEnter: event => { this.stopCarousel() },
                            onMouseLeave: event => { this.goCarousel() },
                        };
                    }}
                    style={{ wordBreak: 'break-all' }}
                // title={() => {
                //     return (
                //         <div> 
                //             <span style={{ aligh: 'left', fontSize: "22px" }}>最新职位</span >
                //             <span style={{ float: 'right', color: "#B4BEC0", marginRight: "50px" }}>更多</span>
                //         </div>
                //     )
                // }}
                />
            </div>
        )
    }
}