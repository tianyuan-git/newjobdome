import React from 'react'
import { Tooltip } from 'antd';

export default class EllipsisTooltip extends React.Component {
    state = {
        visible: false
    }
    handleVisibleChange = (visible) => {
        if (this.container.clientWidth < this.container.scrollWidth) {
            this.setState({
                visible: visible
            })
        }
    }
    render() {
        const style = {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            cursor: 'pointer',
            ...this.props.MyStyle
        }
        return (
            <Tooltip visible={this.state.visible} onVisibleChange={this.handleVisibleChange} title={this.props.title}>
                <div ref={node => this.container = node} style={style}>{this.props.children}</div>
            </Tooltip>
        )
    }
}