import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import CartItem from './Pages/CartItem';
import HomePage from './Pages/HomePage';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/cart",
      element: <CartItem />,
    },
  ]);
  return (<div className="">
    <RouterProvider router={router} />
  </div>)
}

export default App;
