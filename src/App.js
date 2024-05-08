import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import Home from "./containers/Home";
import Create from "./containers/Create";
import Update from "./containers/Update";
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/edit/:id" element={<Update/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}
export default App;