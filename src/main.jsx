import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css"; 
import MVP from './Componets/MVP.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MVP/>,
  },
  {
    path: "/text",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
  
)
