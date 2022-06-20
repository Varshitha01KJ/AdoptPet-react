
import './App.css';
import Home from './Component/Home';
import Product from './Component/Product';
import {Routes,Route} from 'react-router-dom';
import Details from './Component/Details';
import Submit from './Component/Submit';
import Cat from './Component/Cat';

function App() {
  return (
    <>
   {/* <Home/> */}
   {/* <Product/> */}
   {/* <Details/> */}
  <Routes>
     <Route exact path="/" element={<Home />}></Route>
     </Routes>
     <Routes>
     <Route  path="/Product" element={<Product />}></Route>
     </Routes>
     <Routes>
     <Route  path="/details/:id" element={<Details/>}></Route>
     </Routes>
     <Routes>
     <Route  path="/submit/:id" element={<Submit />}></Route>
     </Routes>
     <Routes>
     <Route  path="/Cat" element={<Cat />}></Route>
     </Routes>
     </>
    )
  }
export default App;
