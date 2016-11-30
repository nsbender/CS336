import $ from 'jquery';
import { createStore } from 'redux';

import { API_URL, POLL_INTERVAL } from './global';

let StoreTools = {
  // TODO - Useful utility functions for the state representation
}

let ActionTools = {
  loadingComments: function() {
    return {
      type: 'LOADING_COMMENTS'
    };
  },
  loadedComments: function(comments) {
    return {
      type: 'LOADED_COMMENTS',
      comments: comments
    };
  },
  addComment: function(comment) {
    return {
      type: 'ADD_COMMENT',
      comment: comment
    };
  },
  editComment: function(id, comment) {
    return {
      type: 'EDIT_COMMENT',
      id: id,
      comment: comment
    };
  }
}

let Reducers = {
  // TODO - Reducer functions
}

function commentsApp(state, action) {
  switch (action.type) {
    case 'LOADING_COMMENTS':
      Reducers.loadingComments();
      return state;
    case 'LOADED_COMMENTS':
      return { data: action.comments };
    case 'ADD_COMMENT':
      Reducers.addComment(action);
      return state;
    case 'EDIT_COMMENT':
      Reducers.editComment(action);
      return state;
    default:
      return state;
  }
}

let defaultState = {
  data: []
};

let store = createStore(commentsApp, defaultState);

module.exports = { StoreTools, ActionTools, store }
