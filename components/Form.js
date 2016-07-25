import React from 'react';
import heact from 'heact';
const h = heact('.form');

export default class Form extends React.Component {
    static propTypes = {
        onAdd: React.PropTypes.func.isRequired,
        label: React.PropTypes.node.isRequired
    };
    onSave = () => {
        this.props.onAdd(this.elem.value);
        this.elem.value = '';
    };
    render() {
        return h('.module', null,
            h('input', {
                ref: elem => this.elem = elem
            }),
            h('button', {
                    onClick: this.onSave
                },
                this.props.label
            )
        );
    }
}
