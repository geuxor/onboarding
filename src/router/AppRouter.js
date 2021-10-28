import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import FirstStep from '../components/FirstStep';

const AppRouter = () => {
  const [user, setUser] = useState({});

  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };

  const resetUser = () => {
    setUser({});
  };

  return (
    <BrowserRouter>
      <div className="container">

        <Switch>
          <Route
            render={(props) => (
              <FirstStep {...props} user={user} updateUser={updateUser} />
            )}
            path="/"
            exact={true}
          />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
