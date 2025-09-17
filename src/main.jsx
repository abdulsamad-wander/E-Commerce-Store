import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { DataProvider } from "./context/DataContext";
import { DataaProvider } from "./contextt/DataContext";
import { CartProvider } from "./contextt/CartContext";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "react-scroll-to-top";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <DataaProvider>
        <CartProvider>
          <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <App />
            <ScrollToTop color="white" smooth style={{backgroundColor: "blue",  display: "flex", justifyContent: "center", alignItems: "center"}}/>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </ClerkProvider>
        </CartProvider>
      </DataaProvider>
    </DataProvider>
  </StrictMode>
);
