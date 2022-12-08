import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import SignIn from './components/SignIn';

const App = () => {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/signup' element={ <SignUp /> } />
        <Route path='/signin' element={ <SignIn /> } />
      </Routes>
    </>
  )
}

export default App;
