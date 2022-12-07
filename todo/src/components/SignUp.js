import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const SignUpForm = styled.form`
  position: relative;
  text-align: center;
  margin: 50px 0 50px 0;
`;

const SignUp = () => {
  const navigator = useNavigate()

  const [values, setValues] = useState({
    userid: "",
    email: "",
    pw: "",
  })

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.post(
      "/user/register",
      values
    )
    .then((res) => {
      console.log(res.data)
      if (res.data.success) {
        navigator("/")
      }
    })
    .catch(e => console.error(e))
  }

  return(
    <SignUpForm onSubmit={handleSubmit}>
      <input
        type="text"
        name="userid"
        value={values.userid}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="pw"
        value={values.pw}
        onChange={handleChange}
      />
      <button type='submit'>회원가입</button>
    </SignUpForm>
  )
}


export default SignUp;