import React from 'react'
import { Table, Tooltip, message, Spin } from 'antd';
import EllipsisTooltip from './common/EllipsisTooltip';

export default class Newjob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    getNewData = (dataSource) => {
        let arr1 = [dataSource[0]]
        //一次展示5条
        let arr2 = dataSource.slice(1, 6)
        let arr3 = dataSource.slice(6, dataSource.length)
        this.setState({
            loading: false,
            theDataSource: [...arr2, ...arr3, ...arr1],
            newDataSource: [...arr2]
        });
    }
    // //创建定时器
    carousel = (dataSource) => {
        this.setIntervalId = setInterval(() => { this.getNewData(this.state.theDataSource ? this.state.theDataSource : dataSource) }, 1000);
    }
    //停止定时器
    stopCarousel = () => {
        clearInterval(this.setIntervalId)
    }
    //鼠标离开再次启动定时器
    goCarousel = () => {
        this.carousel(this.state.newDataSource)
    }
    componentDidMount(carousel) {
        //在次获取需要轮播的数据（调用后台接口）
        const data = [
            {
                key: '1',
                job: '同城零售-ToB产品运营（猫超卡）-用户运营部门(同城零售-ToB产品运营（猫超卡）-用户运营部门)',
                address: '杭州',
                updateTime: '9分钟前',
            },
            {
                key: '2',
                job: '阿里云智能事业群-系统研发专家-机器学习平台',
                address: '杭州',
                updateTime: '19分钟前',
            },
            {
                key: '3',
                job: '中台运营事业部-品牌搜索产品运营-上海',
                address: '上海',
                updateTime: '19分钟前',
            },
            {
                key: '4',
                job: '阿里妈妈技术-前端开发专家/高级专家-北京',
                address: '北京',
                updateTime: '19分钟前',
            },
            {
                key: '5',
                job: '同城零售-渠道拓展专家-天猫超市1',
                address: '杭州',
                updateTime: '19分钟前',
            },
            {
                key: '6',
                job: '同城零售-渠道拓展专家-天猫超市2',
                address: '杭州',
                updateTime: '19分钟前',
            },
            {
                key: '7',
                job: '同城零售-渠道拓展专家-天猫超市3',
                address: '杭州',
                updateTime: '19分钟前',
            },
            {
                key: '8',
                job: '同城零售-渠道拓展专家-天猫超市4',
                address: '杭州',
                updateTime: '19分钟前',
            },
            {
                key: '9',
                job: '同城零售-渠道拓展专家-天猫超市5',
                address: '杭州',
                updateTime: '19分钟前',
            },
            {
                key: '10',
                job: '同城零售-渠道拓展专家-天猫超市6',
                address: '杭州',
                updateTime: '19分钟前',
            },
        ];
        this.carousel(data)
    }
    //组件销毁时清除定时器
    componentWillUnmount() {
        this.stopCarousel()
    }
    getMore = () => {
        message.info("功能开发中")
    }

    render() {
        const theStyle = {
            width: "800px",
            height: "400px",
            margin: "24px",
            borderTop: '12px solid #202020',
            borderBottom: '10px solid #202020',
            borderLeft: '6px solid #202020',
            borderRight: '8px solid #202020',
            padding: '10px'
        }
        const columns = [
            {
                title: '职位',
                width: '50%',
                dataIndex: 'job',
                key: 'job',
                // align: 'center',
                onCell: () => ({
                    style: {
                        color: '#709FAF',
                        maxWidth: '400px',//长度超过400省略
                    }
                }),
                //长文本省略处理
                render: (text) => (<EllipsisTooltip title={text}>{text}</EllipsisTooltip>)
            },
            {
                title: '地址',
                width: '35%',
                dataIndex: 'address',
                key: 'address',
                align: 'center',
                onCell: () => ({
                    style: {
                        color: '#8D8F8E',
                    }
                }),
            },
            {
                title: '更新时间',
                width: '15%',
                dataIndex: 'updateTime',
                key: 'updateTime',
                align: 'center',
                onCell: () => ({
                    style: {
                        color: '#B4BEC0',
                    }
                }),
            },
        ];
        return (
            <div style={theStyle}>
                <div>
                    <span style={{ aligh: 'left', marginLeft: '16px', fontSize: "22px", fontWeight: 'bold' }}>最新职位</span >
                    <span onClick={this.getMore} style={{ float: 'right', textAlign: 'center', marginRight: '30px', color: "#B4BEC0" }}>更多</span>
                </div>
                <Table
                    columns={columns}
                    dataSource={this.state.newDataSource}
                    pagination={false}
                    showHeader={false}
                    loading={this.state.loading}
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