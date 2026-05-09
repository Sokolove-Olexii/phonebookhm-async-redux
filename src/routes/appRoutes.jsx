import Contacts from "../pages/Contacts/Contacts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PassReset from "../pages/PassReset/PassReset";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

export const appRoutes = [
  {
    path: "/",
    element: <PrivateRoute redirectTo="/register" component={<Contacts />} />,
  },
  {
    path: "/phonebookhm-async-redux",
    element: <PrivateRoute redirectTo="/register" component={<Contacts />} />,
  },
  {
    path: "/login",
    element: (
      <RestrictedRoute
        redirectTo="/phonebookhm-async-redux"
        component={<Login />}
      />
    ),
  },
  {
    path: "/register",
    element: (
      <RestrictedRoute
        redirectTo="/phonebookhm-async-redux"
        component={<Register />}
      />
    ),
  },
  {
    path: "/reset-password",
    element: (
      <RestrictedRoute
        redirectTo="/phonebookhm-async-redux"
        component={<PassReset />}
      />
    ),
  },
];
