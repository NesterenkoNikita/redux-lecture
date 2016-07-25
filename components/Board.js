import React from 'react';
import heact from 'heact';
const h = heact('.board');
import List from './List';
import './Board.styl';
export default class Board extends React.Component {
    static propTypes = {
        lists: React.PropTypes.array.isRequired,
        onListRemove: React.PropTypes.func.isRequired,
    };
    render() {
        return h('.module', null,
            this.props.lists.map(list => {
                return h(List, {
                    key: list._id,
                    listId: list._id,
                    onRemove: () => this.props.onListRemove(list._id)
                });
            })
        );
    }
}
