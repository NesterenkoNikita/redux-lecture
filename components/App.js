import React from 'react';
import heact from 'heact';
const h = heact('.app');
import cuid from 'cuid';

import NewListForm from './NewListForm';
import Board from './Board';

export default class App extends React.Component {
    state = {
        lists: []
    };

    onListAdd = name => {
        this.setState({
            lists: [...this.state.lists, {
                _id: cuid(),
                name,
                cards: []
            }]
        });
    };

    onCardAdd = (listId, name) => {
        this.setState({
            lists: this.state.lists.map(list => {
                if (list._id === listId) {
                    return {
                        ...list,
                        cards: [...list.cards, name]
                    };
                }
                return list;
            })
        });
    };

    onListRemove = listId => {
        this.setState({
            lists: this.state.lists.filter(list => {
                return list._id !== listId;
            })
        });
    };

    render() {
        return h('.module', null,
            h(NewListForm, {
                onListAdd: this.onListAdd
            }),
            h(Board, {
                lists: this.state.lists,
                onCardAdd: this.onCardAdd,
                onListRemove: this.onListRemove
            })
        );
    }
}
