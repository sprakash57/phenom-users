import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import store from './store';
import { loadUser } from './store/actions/user';

const App: React.FC = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={UserList} />
          <Route exact path='/:_id' component={UserDetails} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
