require('babel-register');
const assert = require('assert');

const board = require('./board').default;

assert.ok(
    board(undefined, {
        type: 'LIST_ADD',
        name: 'My List'
    }).lists.length === 1
);

assert.ok(
    board({lists: [{name: 'foo'}]}, {
        type: 'LIST_ADD',
        name: 'My List'
    }).lists.length === 2
);
