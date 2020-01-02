import produce from 'immer';
import _ from 'lodash';

import { Action } from '../../actions/common';
import { commonHandler } from '../common';
import { userInitialState } from './initial-state';
import { UserState } from './interface';
import { Types } from '../../actions/user';

export * from './interface';

const rawUserReducer = (state: UserState, action: Action) => {
  state = commonHandler(state, action, userInitialState);
  const data = action.data;
  const message = action.message;
  switch (action.type) {
    case Types.changeFields:
      if (data) {
        for (const key in data) {
          _.set(state, key, action.data[key]);
        }
      }
      return state;

    default:
      return state;
  }
};

export const userReducer = produce(rawUserReducer, userInitialState);
