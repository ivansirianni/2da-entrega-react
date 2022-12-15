import {Routes, Route} from "react-router-dom"
import "./App.css"
import Layout from "./components/Layout/Layout"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Home from "./Pages/Home"
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/Contact"


function App() {
  return (
      
          <div>         
            <Layout />
            <Routes>
              <Route path="/home" element={ <Home />} />      
              <Route path='/aboutUs' element={ <AboutUs   />}/>
              <Route path='/contactUs' element={ <ContactUs />}/>     
              <Route path='/' element={ <ItemListContainer  />}/>
              <Route path='/category/:categoryId' element={ <ItemListContainer  />}/>
              <Route path='/item/:itemId' element={ <ItemDetailContainer  />}/>
            </Routes>
          </div>
  );
}


export default App;