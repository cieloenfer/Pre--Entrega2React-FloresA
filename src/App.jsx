import ItemListContainer from "./Components/ItemListContainer";
import  Navbar  from "./Components/Navbar";
import CartWidget from "./Components/CartWidget";
import { ChakraProvider } from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./About";
import footer from "./footer";
import HOME from "./HOME.JSX";
import NavBar from "./NavBar";
import Cart from "./Components/Cart"
import Data from "./data.json"
import ServiciosDettails from "./Components/ItemDetails";
import Navbar from "./Components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Navbar />
        <itemListContainer greeting={"Bienvenidos a Iuris Help"} />
      </ChakraProvider>
      <Routes>
        <Route exact path="/" element={<HOME />} />
        <Route exact path="/About" element={<itemDetailContainer />} />
        <Route exact path="/servicios id:" element={ItemDettails />} />
        <Route exact path="/Categoria/:Categoria" element={<itemLis />} />
        <Route exact path="/ítem/:id" element={<itemDetailContainer />} />
        <Route exact path="/Components/Cart" element={<Cart />} />
      </Routes>
      <footer />
    </BrowserRouter>
  );
}

export default App;




