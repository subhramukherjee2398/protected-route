import './App.css';
import {Routes,Route} from 'react-router-dom'
import {useRoutes,Outlet} from 'react-router-dom'
import { DashboardPage, HomePage, LoginPage, RequireAuth, SettingsPage } from './global';
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
          element:<RequireAuth Component={<SettingsPage/>}></RequireAuth>
        },
        {
          path: "/dashboard",
          element:  <RequireAuth Component={<DashboardPage/>}></RequireAuth> 
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
