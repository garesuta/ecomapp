import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ShoppingCartPage from './Pages/ShoppingCart.jsx';
import HomePage from './Pages/HomePage.jsx';
import { ShoppingCartProvider } from './Context/ShoppingCartContext.jsx';


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
