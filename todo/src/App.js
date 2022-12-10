import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import SignIn from './components/SignIn';
import { Provider } from 'react-redux';
import store from './app/store';

const App = () => {
  return(
    <div>
      <Navbar />
      <Provider store={ store }>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/signup' element={ <SignUp /> } />
          <Route path='/signin' element={ <SignIn /> } />
        </Routes>
      </Provider>
    </div>
  )
}

export default App;
