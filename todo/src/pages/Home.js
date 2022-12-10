import React from 'react'
import { useSelector } from 'react-redux';
import { showlogin } from '../features/Users/UserLogin';



const Home = () => {
  const logintf = useSelector(showlogin)
  // const dispatch = useDispatch()


  return (
    <div>
      <span> {logintf} </span>
    </div>
  )
}


export default Home;