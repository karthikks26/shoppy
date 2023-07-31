import { useState } from "react";
import "./App.css";
import NavbarComponent from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cancel from "./Pages/Cancel";
import Store from "./Pages/Store";
import Success from "./Pages/Success";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartProvider from "./CartContent";

function App() {
  const client = new QueryClient();
  return (
    <CartProvider>
      <QueryClientProvider client={client}>
        <Container>
          <NavbarComponent />
          <BrowserRouter>
            <Routes>
              <Route index element={<Store />} />
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </QueryClientProvider>
    </CartProvider>
  );
}

export default App;
