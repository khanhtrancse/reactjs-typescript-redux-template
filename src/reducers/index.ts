import { combineReducers } from 'redux';
import { userReducer as user } from './user';
import { connectRouter } from 'connected-react-router';

export const configureReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    user,
  });
