import React from 'react';
import { decoder, colorRender } from '../../utils/utils';

class EditableItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var jsx;
        if (this.props.isEdit) {
            if (this.props.selectList) {
                jsx = <select defaultedValue={this.props.selectList[0] || ''} onChange={(e) => this.props.handleChange(this.props.name, e.target.value)} value={this.props.newVal}>
                    {
                        this.props.selectList.map(item => {
                            return (
                                <option value={item}>{item}</option>
                            )
                        })
                    }
                </select>
            } else {
                jsx = <input
                    value={this.props.newVal}
                    onChange={(e) => this.props.handleChange(this.props.name, e.target.value)}
                />;
            }
        } else {
            jsx = <span>{this.props.val}</span>;
        }
        return jsx;
    }
}

export default EditableItem;
