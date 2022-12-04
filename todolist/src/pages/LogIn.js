import axios from 'axios'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
  const idRef = useRef()
  const pwRef = useRef()
  const emailRef = useRef()

  const navigator = useNavigate()

  const handleMember = ()=> {
    if (idRef.current.value === "" || idRef.current.value === undefined) {
      alert("아이디를 입력하시기 바랍니다.")
      idRef.current.focus()
      return false
    }

    if (pwRef.current.value === "" || pwRef.current.value === undefined) {
      alert("패스워드를 입력하시기 바랍니다.")
      pwRef.current.focus()
      return false
    }

    if (emailRef.current.value === "" || emailRef.current.value === undefined) {
      alert("이메일을 입력하시기 바랍니다.")
      emailRef.current.focus()
      return false
    }

    axios.post("http://localhost:8080/signup", {
      id: idRef.current.value,
      pw: pwRef.current.value,
      emailRef: emailRef.current.value,
    })
    .then(res => {
      console.log("handlerMember:", res)
      if (res.data.affectedRows === 1) {
        alert("회원가입이 되었습니다.")
      } else alert("이미 가입된 정보입니다.")
    })
    .catch(e => console.error(e))
  }

}

export default LogIn;