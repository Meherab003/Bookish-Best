import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Root from './Components/Root';
import ListedBooks from './Components/ListedBooks';
import PageToRead from './Components/PageToRead';
import ErrorPage from './Components/ErrorPage';
import BookDetails from './Components/BookDetails';
import About from './Components/About';
import Contacts from './Components/Contacts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('books.json')
      },
      {
        path: '/listedbooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/pagetoread',
        element: <PageToRead></PageToRead>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/books/:id',
        element:<BookDetails></BookDetails>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contacts',
        element: <Contacts></Contacts>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
