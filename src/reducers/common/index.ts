import { Action, AppTypes } from '../../actions/common';

export const commonHandler = (
  state: any,
  action: Action,
  initialState: any,
) => {
  switch (action.type) {
    case AppTypes.reset:
      return initialState;
    default:
      return state;
  }
};
