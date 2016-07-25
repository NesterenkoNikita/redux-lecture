import React from 'react';
import heact from 'heact';
const h = heact('.list');
import NewCardForm from './NewCardForm';
import Card from './Card';
import './List.styl';

export default class List extends React.Component {
    static propTypes = {
        list: React.PropTypes.object.isRequired,
        onCardAdd: React.PropTypes.func.isRequired,
        onRemove: React.PropTypes.func.isRequired
    };

    onCardAdd = name => {
        this.props.onCardAdd(name);
    };

    onRemove = () => {
        this.props.onRemove();
    };

    render() {
        return h('.module', null,
            h('.name', null,
                this.props.list.name,
                h('button.remove', {
                        onClick: this.onRemove
                    },
                    'X'
                )
            ),
            h(NewCardForm, {
                onCardAdd: this.onCardAdd
            }),
            h('.cards', null,
                this.props.list.cards.map(card => {
                    return h(Card, {
                        key: card,
                        card
                    });
                })
            )
        );
    }
}
