import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import ProductDetails from "./components/product_details/ProductDetails";
import { ThemeProvider, createTheme } from "@mui/material";
import ProtectedRoute from "./ProtectedRoute";
import CartItem from "./components/cart_item/CartItem";
import EachProduct from "./components/each_product/EachProduct";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins' sans-serif",
  },
});



const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
      
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
               /* <Route
                path="/productdetails/:id"
                element={
                  <ProtectedRoute>
                    <EachProduct/>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <CartItem />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
      </ThemeProvider>

      );
};
export default App;
