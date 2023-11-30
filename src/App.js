import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Cars from './Pages/Cars/Cars';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AddProducts from './Pages/AdminPages/AddProducts/AddProducts';
import ViewProducts from './Pages/AdminPages/ViewProducts/ViewProducts';
import AddBrand from './Pages/AdminPages/AddBrand/AddBrand';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Header/>
        {/* <AddProducts/> */}
        {/* <ViewProducts/> */}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cars" element={<Cars/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/addbrandform" element={<AddBrand/>}/> 
            <Route path="/addproducts" element={<AddProducts/>}/>
            <Route path="/viewproducts" element={<ViewProducts/>}/>                       
          </Routes>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
        </header> */}
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;