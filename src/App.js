import './App.css';
import Nav from './Components/Navbar/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Shop} from './Pages/Shop';
import { Category } from './Pages/Category';
import { Products } from './Pages/Products';
import { Cart } from './Pages/Cart';
import { Login } from './Pages/Login';
import { Footer } from './Components/Footer/Footer';
import men_banner from'./Components/Assets/banner_mens.png';
import women_banner from'./Components/Assets/banner_women.png';
import kids_banner from'./Components/Assets/banner_kids.png';
import { NewCollection } from './Components/NewColections/NewCollection';
import { NewsLetter } from './Components/NewsLetter/NewsLetter';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Category banner={men_banner}category="men"/>}/>
        <Route path='/womens' element={<Category banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Category banner={kids_banner} category="kid"/>}/>
        <Route path='/product' element={<Products/>}>
            <Route path=':productId' element={<Products/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/newcollection'element={<NewCollection/>}/>
        <Route path='/newsletter' element={<NewsLetter/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
