import React from 'react';
import heact from 'heact';
const h = heact('.new-card-form');
import Form from './Form';

export default class NewCardForm extends React.Component {
    static propTypes = {
        onCardAdd: React.PropTypes.func.isRequired
    };
    onCardAdd = name => {
        this.props.onCardAdd(name);
    };

    render() {
        return h(Form, {
            onAdd: this.onCardAdd,
            label: 'Create card'
        });
    }
}
