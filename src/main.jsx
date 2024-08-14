import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ImpTodoPage from './components/ImpTodoPage.jsx';
import MyDayPage from './components/MyDayPage.jsx';
import PendingTaskPage from './components/PendingTaskPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/importantTodos",
    element: <ImpTodoPage></ImpTodoPage>,
  },
  {
    path: "/my-day",
    element: <MyDayPage></MyDayPage>,
  },
  {
    path: "/pending-tasks",
    element: <PendingTaskPage></PendingTaskPage>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
