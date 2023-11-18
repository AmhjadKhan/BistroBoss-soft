import { createBrowserRouter } from 'react-router-dom'
import Mainlayout from '../Mainlayout/Mainlayout.Jsx';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';

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
        }
     ]
    },

])
export default router;

