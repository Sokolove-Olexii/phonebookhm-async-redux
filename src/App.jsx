import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PassReset from "./pages/PassReset";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <b>Refreshing user...</b>;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute redirectTo="/register" component={<Contacts />} />
        }
      />
      <Route
        path="/phonebookhm-async-redux"
        element={
          <PrivateRoute redirectTo="/register" component={<Contacts />} />
        }
      />
      <Route
        path="/login"
        element={
          <RestrictedRoute
            redirectTo="/phonebookhm-async-redux"
            component={<Login />}
          />
        }
      />
      <Route
        path="/register"
        element={
          <RestrictedRoute
            redirectTo="/phonebookhm-async-redux"
            component={<Register />}
          />
        }
      />
      <Route
        path="/reset-password"
        element={
          <RestrictedRoute
            redirectTo="/phonebookhm-async-redux"
            component={<PassReset />}
          />
        }
      />
    </Routes>
  );
};

export default App;
