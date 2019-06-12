import React from 'react';

class EditableItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span>
                {
                    this.props.isEdit
                        ? <input
                            value={this.props.newVal}
                            onChange={(e) => this.props.handleChange(this.props.name, e.target.value)}
                        />
                        : this.props.val
                }
            </span>
        )
    }
}

export default EditableItem;
