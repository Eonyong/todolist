import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/about' element={ <About /> } />
      </Routes>
    </>
  )
}

export default App;
