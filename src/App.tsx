import './App.css'

/* React Router Dom */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Components */
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
