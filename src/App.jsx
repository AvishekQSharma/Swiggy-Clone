import { useState } from "react";
import logo from "./assets/logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Offer from "./pages/Offer";
import { Carts } from "./pages/Carts";
import Helps from "./pages/Helps";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/offers" element={<Offer />} />
        <Route path="/Carts" element={<Carts />} />
        <Route path="/Helps" element={<Helps />} />
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
