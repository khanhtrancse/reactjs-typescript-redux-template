import { Action, createAction } from '../common';

export const Types = {
  changeFields: 'app.user.change-fields',
  setInfo: 'user.set-user',
};

const changeFields = (object: any = {}) =>
  createAction(Types.changeFields, object);

const setInfo = (data: any = {}) => createAction(Types.setInfo, data);

export const userAction = {
  changeFields,
  setInfo,
};
