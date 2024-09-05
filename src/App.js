import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { memo } from 'react';
import Task from './pages/Task';
import Auth from './pages/Auth';
import RootLayout from './layouts/root.layout';
import ErrorPage from './pages/Error';

// const MemoizedTask = memo(Task);
const MemoizedAuth = memo(Auth, () => true);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Task />,
      },
      {
        path: '/auth',
        element: <MemoizedAuth />,
      },
    ],
  },
]);

export default function App() {
  console.log('======= App');
  return <RouterProvider router={router} />;
}
