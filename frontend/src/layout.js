import Sidebar from './sidebar';
import Home from './pages/home';
import Login from './pages/login';
import './layout.css';
import {
  createBrowserRouter,
   Outlet,
   RouterProvider } from 'react-router-dom';

function Layout({children}){
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
    },
    {
      path:'/login',
      element:<Login/>
    }
  ]);

  return(
<div className='layout'>
  <div className='sidebar'>
    <Sidebar/>
  </div>
  <div>
    <RouterProvider router={router}/>
  </div>
</div>
  );
}

export default Layout;
