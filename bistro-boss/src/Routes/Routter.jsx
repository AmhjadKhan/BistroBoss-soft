import { createBrowserRouter } from 'react-router-dom'
import Mainlayout from '../Mainlayout/Mainlayout.Jsx';
import Home from '../Home/Home';

const router = createBrowserRouter([
    {
     path:'/',
     element:<Mainlayout />,
     children:[
        {
            path:'/',
            element:<Home />
        }
     ]
    },

])
export default router;

