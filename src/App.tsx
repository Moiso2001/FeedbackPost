import './App.css'
//

/* React Router Dom */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Components */
import Header from "./components/Header/Header";
import Login from './components/Login/Login';
import Home from "./components/Home/Home";
import Detail from './components/CardDetail/Detail';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>

        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/restaurant/:id' element={<Detail/>}/>
        </Routes>
        
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
