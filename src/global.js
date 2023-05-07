import { useRoutes, Outlet, Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import AuthConsumer from "./auth";
import { Children } from "react";

let c = console.log.bind(document);

export const LoginPage = () => {
  const [authed, dispatch] = AuthConsumer();
  let navigate = useNavigate();
  return (
    <div>
      <h1>Login Page</h1>
      <button
        onClick={() => {
          dispatch({ types: "login" });
          navigate("/dashboard");
        }}
        style={{ background: "orange" }}
      >
        Login
      </button>
    </div>
  );
};

export const HomePage = () => {
  const [authed, dispatch] = AuthConsumer();

  c(authed);

  return (
    <div>
      <h1 style={{ backgroundColor: "yellow", textAlign: "center" }}>
        Home Page
      </h1>
      <Nav />
      <Outlet></Outlet>
    </div>
  );
};

export const DashboardPage = () => {
  const [authed, dispatch] = AuthConsumer();
  let navigate = useNavigate();
  return (
    <div>
      <h1>Dashboard Page</h1>
      <button
        onClick={() => {
          dispatch({ types: "logout" });
          navigate("/login");
        }}
        style={{ background: "red" }}
      >
        Login
      </button>
    </div>
  );
};

export const Nav = () => {
  return (
    <nav>
      <ul
        style={{ display: "flex", listStyle: "none", backgroundColor: "blue" }}
      >
        <li style={{ margin: "0 10px" }}>
          <Link to="/">
            <a style={{ color: "white" }}>Home</a>
          </Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link to="/login">
            <a style={{ color: "white" }}>login</a>
          </Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link to="/dashboard">
            <a style={{ color: "white" }}>Dashboard</a>
          </Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link to="/settings">
            <a style={{ color: "white" }}>Settings</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export const SettingsPage = () => {
    const [authed, dispatch] = AuthConsumer();
    let navigate = useNavigate()
  return (
    <div>
      <h1>Settings Page</h1>
      <button
        onClick={() => {
          dispatch({ types: "logout" });
          navigate("/login");
        }}
        style={{ background: "red" }}
      >
        Login
      </button>
    </div>
  );
};


export function RequireAuth(){
    const [authed] = AuthConsumer()
    const location = useLocation()
    return authed.auth === true ? (
         Children
    ):(
        <Navigate to={'/login'} replace state={({path:location.pathname})}></Navigate>
    )
}