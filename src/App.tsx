import React from 'react';
import { authRoutes, mainRoutes } from './config/routes';
import { AuthLayout, MainLayout } from './layouts';
import { Provider, connect } from 'react-redux';
import { history, configureStore } from './config/store';
import { configureReducer } from './reducers';
import { ConnectedRouter } from 'connected-react-router';
import { UserState } from './reducers/user';

const reducer = configureReducer(history);
const store = configureStore(reducer);

const App: React.FC = (props: any) => {
  const user = props.user as UserState;
  return (
    <div>
      <div
        style={{
          background: `url(${require('./assets/images/bg/main.jpg')})`,
          backgroundSize: 'cover',
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      ></div>

      <ConnectedRouter history={history}>
        {user._id ? (
          <MainLayout routes={mainRoutes} />
        ) : (
            <AuthLayout routes={authRoutes} />
          )}
      </ConnectedRouter>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const AppWithState = connect(mapStateToProps, null)(App);

const AppWithRedux: React.FC = () => {
  return (
    <Provider store={store}>
      <AppWithState />
    </Provider>
  );
};

export default AppWithRedux;
