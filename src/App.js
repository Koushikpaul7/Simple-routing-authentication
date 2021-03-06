import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Header from './Component/Header/Header';
import Register from './Component/Register/Register';
import Products from './Component/Products/Products';
import Orders from './Component/Orders/Orders';
import RequireAuth from './Component/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/orders' element={
         <RequireAuth>
           <Orders></Orders>
         </RequireAuth>
       }></Route>
       <Route path='/products' element={<RequireAuth>
        <Products></Products>
       </RequireAuth>}></Route>
     </Routes>
    </div>
  );
}

export default App;
