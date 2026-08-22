import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import CourseDetails from './pages/CourseDetails.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "details/:semester/:courseId", element: <CourseDetails /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
