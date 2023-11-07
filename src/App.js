import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import Form from "./pages/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminForm from "./Components/Admin";
import Login from "./Components/Login";
import CartReview from "./Components/CartReview/CartReview";
import ProtectedRoute from "./Components/ProtectedRoute";
import DisplayProducts from "./Components/DisplayProducts";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:keys" element={<DisplayProducts />} />
          <Route path="cart" element={<CartReview />} />
          <Route path="form" element={<Form />} />
          <Route path="584647" element={<Login setUser={setUser} />} />
          <Route
            path="123"
            element={
              <ProtectedRoute user={user}>
                <AdminForm user={user} />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
