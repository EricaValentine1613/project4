 import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loginpage from './components/Loginpage'
import Registrationpage from './components/Registrationpage'


export default function Mainpage() {
  const [login, setLogin] = useState([{id_username: "", email:"", password: ""}])

  const fetchStudents = async () => {
    const response = await axios.get ("http://localhost:4000/students/")
    console.log (response.data)
    setLogin (response.data) 
  }

  useEffect(() => {
    fetchLogin();
  }, [])


  return (
    <>
      <Mainpage fetchData={fetchData} />
    </>
  )
}