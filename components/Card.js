import React from 'react';
import heact from 'heact';
const h = heact('.card');

export default class Card extends React.Component {
    static propTypes = {
        card: React.PropTypes.string.isRequired
    };
    render() {
        return h('.module', null,
            h('.name', null,
                this.props.card
            )
        );
    }
}
