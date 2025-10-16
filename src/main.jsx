import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/Store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import { RedirectAuthContainer, Login } from './Components/index.js'
import Addpost from "./Pages/Addpost.jsx"
import SignupPage from './Pages/Signup.jsx'
import EditPost from "./Pages/Editpost.jsx"
import Post from "./Pages/Post.jsx"
import Allposts from "./Pages/Allposts.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <RedirectAuthContainer authentication={false}>
            <Login />
          </RedirectAuthContainer>
        ),
      },
      {
        path: "/signup",
        element: (
          <RedirectAuthContainer authentication={false}>
            <SignupPage />
          </RedirectAuthContainer>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <RedirectAuthContainer authentication>
            <Allposts />
          </RedirectAuthContainer>
        ),
      },
      {
        path: "/add-post",
        element: (
          <RedirectAuthContainer authentication>
            <Addpost />
          </RedirectAuthContainer>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <RedirectAuthContainer authentication>
            <EditPost />
          </RedirectAuthContainer>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

