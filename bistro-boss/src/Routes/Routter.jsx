import { createBrowserRouter } from 'react-router-dom'
import Mainlayout from '../Mainlayout/Mainlayout.Jsx';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import Order from '../pages/Ordero/Order';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
    {
     path:'/',
     element:<Mainlayout />,
     children:[
        {
            path:'/',
            element:<Home />
        },
        {
            path:'menu',
            element:<Menu />
        },
        {
            path:'order/:category',
            element:<Order />
        },
        {
            path:'login',
            element:<Login />
        },
     ]
    },

])
export default router;

