import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ShoppingCartPage from './Pages/ShoppingCart';
import HomePage from './Pages/HomePage';
import { ShoppingCartProvider } from './Context/ShoppingCartContext';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/cart",
      element: <ShoppingCartPage />,
    },
  ]);
  return <ShoppingCartProvider>
    <>
    <div className="">
    <RouterProvider router={router} />
  </div>
    </>
  </ShoppingCartProvider>
}

export default App;
