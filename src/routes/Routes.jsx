import { createBrowserRouter } from "react-router";
import Author from "../components/Author";
import BlogContent from "../components/BlogContent";
import MainLayout from "../layouts/MainLayout";
import BlogDetails from "../pages/BlogDetails";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blogs',
        element: <Blogs />,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
      },
      {
        path: '/blog/:blogId',
        element: <BlogDetails />,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.blogId}`),
        children: [
            {
                index: true,
                element: <BlogContent />,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.blogId}`)
            },
            {
                path: 'author',
                element: <Author />,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.blogId}`)
            }
        ]
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />
      }
    ]
  }
])

export default router