export interface Action {
  type: string;
  data?;
  message?: string;
}

export const AppTypes = {
  reset: 'app.reset',
};

export function createAction<T>(type: string, data?, message?: string): Action {
  return {
    type,
    data,
    message,
  };
}
