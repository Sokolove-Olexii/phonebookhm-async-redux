import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./routes/appRoutes";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Refreshing user...</p>;
  }

  return (
    <Routes>
      {appRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default App;
