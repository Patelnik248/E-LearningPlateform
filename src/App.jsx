import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup';
import Login from "./Pages/Login";
import Courses from './Pages/Courses';
import Contact from './Pages/Contact';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses" element={<Courses/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>

        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    
    </>
  )
}

export default App
