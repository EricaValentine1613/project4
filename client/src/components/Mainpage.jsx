 import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loginpage from './components/Loginpage'
import Registrationpage from './components/Registrationpage'


export default function Mainpage() {
  const [data, setData] = useState([{questions: "", answers:"",}])

  const fetchData = async () => {
    const response = await axios.get ("http://localhost:4000/students/")
    console.log (response.data)
    setMaindata (response.data) 
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <>
      <Mainpage fetchData={fetchData} />
    </>
  )
}