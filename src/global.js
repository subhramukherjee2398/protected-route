

import {useRoutes,Outlet,Link} from 'react-router-dom'
import AuthConsumer from './auth';

let c  = console.log.bind(document)

export const LoginPage=()=>{
    const auth = AuthConsumer();
    return (
        <div>
            <h1>Login Page</h1>
        </div>
    )
}

export const HomePage = () => {
    const auth = AuthConsumer();
    c(auth);

    return (
      <div>
        <h1 style={{backgroundColor:'yellow',textAlign:'center'}}>Home Page</h1>
        <Nav/>
        <Outlet></Outlet>
      </div>
    );
  };
  
  export const DashboardPage = () => {
    return (
      <div>
        <h1>Dashboard Page</h1>
      </div>
    );
  };
  
  export const Nav = () => {
    return (
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', backgroundColor: 'blue' }}>
          <li style={{ margin: '0 10px' }}>
            <Link to="/">
              <a style={{ color: 'white' }}>Home</a>
            </Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/login">
              <a style={{ color: 'white' }}>login</a>
            </Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/dashboard">
              <a style={{ color: 'white' }}>Dashboard</a>
            </Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/settings">
              <a style={{ color: 'white' }}>Settings</a>
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  export const SettingsPage = () => {
    return (
      <div>
        <h1>Settings Page</h1>
      </div>
    );
  };
  