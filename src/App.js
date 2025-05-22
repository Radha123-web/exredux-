import ProductInterface from "./components/ProductInterface";
import {Routes ,Route, BrowserRouter as Router}from"react-router-dom"
 import DisplayAll from "./components/DisplayAll";
import ProductData from "./components/ProductData";
import PlusMinusComponent from "./components/PlusMinusComponent";
import AddButton from "./components/AddButton";
import ShowAdd from "./components/ShowAdd";



 
function App() {
  return (
    <div>
  <Router>
    <Routes>
    <Route element={<ProductInterface/>}  path="/productinterface"/>
    <Route element={<DisplayAll/>}  path="/displayAll"/>
    <Route element={<ProductData/>}  path="/product"/>
    <Route element={<PlusMinusComponent/>}  path="/plus"/>
    <Route element={<AddButton/>}  path="/add"/>
    <Route element={<ShowAdd/>}  path="/show"/>

    </Routes>
  </Router>
  
    </div>
  );
}

export default App;
