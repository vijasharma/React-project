import React from "react";
import Home from "./Componets/Home/Home1";
import Contact from "./Componets/Contact/Contact1";
import About from "./Componets/About/About1";
import Service from "./Componets/Services/Service1";
import HeaderItem from "./Header/HeaderItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./Componets/Services/MovieDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderItem/>
<Routes>
    <Route path="about" element={ <About />} />
    <Route path="service" element={<Service/>} />
    <Route path="contact" element={<Contact/>} />
    <Route path="moviedetails/:id" element={<MovieDetails/>} />

  <Route path="/" element={<Home/> }>
  </Route>
</Routes>
</BrowserRouter> 
    </div>
  );
}

export default App;
