import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Error from './componants/Error';
import Home from './componants/Home';
import AddTourist from './componants/AddTourist';
import AllTourist from './componants/AllTourist';
import MyList from './componants/MyList';
import Login from './componants/Login';
import SignUp from './componants/SignUp';
import AuthProvider from './providers/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import PrivetRout from './componants/PrivetRout';
import Blog from './componants/Blog';
import Contact from './componants/Contact';
import ViewDettails from './componants/ViewDettails';
import UpdatePage from './componants/UpdatePage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:() =>fetch('https://travel-alpha-one.vercel.app/spot')
      },
      {
        path:"/addtourist",
        element:<PrivetRout><AddTourist></AddTourist></PrivetRout>
      },
      {
        path:"/alltourist",
        element:<AllTourist></AllTourist>,
        loader:() =>fetch('https://travel-alpha-one.vercel.app/spot')
      },
      {
        path:"/mylist",
        element:<PrivetRout><MyList></MyList></PrivetRout>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/viewDettail/:id",
        element:<PrivetRout><ViewDettails></ViewDettails></PrivetRout>,
        loader:({params}) => fetch(`https://travel-alpha-one.vercel.app/spot/${params.id}`)
      },
     {
      path:"updatepage/:id",
      element:<UpdatePage></UpdatePage>,
      loader:({params}) =>fetch(`https://travel-alpha-one.vercel.app/spot/${params.id}`)
     }

    
   

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>

    <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
