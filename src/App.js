import './App.css';
import {Routes,Route} from 'react-router-dom'
import {useRoutes,Outlet} from 'react-router-dom'
import { DashboardPage, HomePage, LoginPage, SettingsPage } from './global';
function App() {

  const routes  = useRoutes([
    {
      path:"/",
      element:<HomePage/>,
      children:[
        {
           index:true,
           element:<div>Home Content</div>
        },
        {
          path: "/login",
          element: <LoginPage/>
        },
        {
          path: "/settings",
          element: <SettingsPage/>
        },
        {
          path: "/dashboard",
          element: <DashboardPage/>
        }
      ]
    },
  ])
  
  return (
   /*  <Route>
      <Route path='/' element={<>Home</>}/>
      <Route path='/login' element={<>Login</>}/>
      <Route path='/dash' element={<>Dashboard</>}/>
      <Route path='/setting' element={<>setting</>}/>
    </Route> */
    routes
  )
}

export default App;
