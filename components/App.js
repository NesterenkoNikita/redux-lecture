import React from 'react';
import heact from 'heact';
const h = heact('.app');
import cuid from 'cuid';

import NewListForm from './NewListForm';
import Board from './Board';
import {getListsWithCards} from '../reducers';
import * as actions from '../actions';

export default class App extends React.Component {
    static propTypes = {
        listAdd: React.PropTypes.func.isRequired,
        listRemove: React.PropTypes.func.isRequired,
        lists: React.PropTypes.array.isRequired
    };

    onListAdd = name => {
        this.props.listAdd(name);
    };

    onListRemove = listId => {
        this.props.listRemove(listId)
    };

    render() {
        return h('.module', null,
            h(NewListForm, {
                onListAdd: this.onListAdd
            }),
            h(Board, {
                lists: this.props.lists,
                onListRemove: this.onListRemove
            })
        );
    }
}
