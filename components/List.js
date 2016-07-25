import React from 'react';
import heact from 'heact';
const h = heact('.list');
import NewCardForm from './NewCardForm';
import Card from './Card';
import './List.styl';
import * as actions from '../actions';
import {connect} from 'react-redux';

class List extends React.Component {
    static propTypes = {
        cardAdd: React.PropTypes.func.isRequired,
        list: React.PropTypes.object.isRequired,
        onRemove: React.PropTypes.func.isRequired
    };

    onCardAdd = name => {
        this.props.cardAdd(this.props.list._id, name);
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

export default connect(
    (state, ownProps) => ({
        list: fromList.getListsWithCards(state)
    }),
    actions
)(List);
