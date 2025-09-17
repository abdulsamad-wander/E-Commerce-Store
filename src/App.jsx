import Error from "./components/Error.jsx";
import Home from "./components/Home.jsx";
import Layout from "./components/Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/Products.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Single from "./components/Single.jsx";
import Cart from "./Minor/Cart.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
import Category from "./components/Category.jsx";
import Protected from "./Minor/Protected.jsx";
import { Toaster } from "sonner";

function App() {
  const [location, setLocation] = useState();
  const [drop, setDrop] = useState(false);

  const getLoaction = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      console.log(latitude, longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${encodeURIComponent(
        latitude
      )}&lon=${encodeURIComponent(longitude)}&format=json`;

      try {
        const location = await axios.get(url);
        const exactLocation = location.data.address;
        setLocation(exactLocation);
        setDrop(false);
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    getLoaction();
  }, []);

  // define router here so it has access to props
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          location={location}
          getLoaction={getLoaction}
          setDrop={setDrop}
          drop={drop}
        />
      ),
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "/products", element: <Products /> },
        { path: "/products/:id", element: <Single /> },
        { path: "/category/:category", element: <Category /> },
        { path: "/about", element: <About /> },
        {
          path: "/cart",
          element: (
            <Protected>
              <Cart
                location={location}
                getLoaction={getLoaction}
                setDrop={setDrop}
                drop={drop}
              />
            </Protected>
          ),
        },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return(
    <>
     <RouterProvider router={router} />
     <Toaster richColors position="top-center"/>
    </>
  )
}

export default App;