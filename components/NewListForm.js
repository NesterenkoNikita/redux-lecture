import React from 'react';
import heact from 'heact';
const h = heact('.new-list-form');
import Form from './Form';

export default class NewListForm extends React.Component {
    static propTypes = {
        onListAdd: React.PropTypes.func.isRequired
    };
    onListAdd = name => {
        this.props.onListAdd(name);
    };
    render() {
        return h(Form, {
            onAdd: this.onListAdd,
            label: 'Create new list'
        });
    }
}
