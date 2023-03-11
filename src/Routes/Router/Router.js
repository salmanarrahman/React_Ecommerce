import {createBrowserRouter} from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";
import Checkout from "../../Pages/Checkout/Checkout";
import Orders from "../../Pages/Orders/Orders";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },{
                path:'/login',
                element:<Login></Login>
            },{
                path:'/register',
                element:<SignUp></SignUp>
            },
            {
                path:'/checkout/:id',
                element:<Checkout></Checkout>,
                loader: ({params})=> fetch(`http://localhost:5000/service/${params.id}`)
            },{
                path:'/order',
                element:<Orders></Orders>
            }
        ]
    }
])

export default router;
