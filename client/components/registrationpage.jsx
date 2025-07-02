import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';
import './registrationpage.jsx';
import './header.jsx'

export default function registrationpage({add, setAddition}) {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    author: "",
    status:""
  })

  function handleChange (event) {
    const {name, value} = event.target
    console.log (name,value)
    setFormData ({...formData, [name]:value})
  }

  function handleADDAddition () {
    console.log (formData)
    setFormData ({...formData, id:10})
    const newBook = {...formData, id:uuidv4()}
    console.log (newBook)
    setBooks ([...books, newBook])
  }


  return (
    <>
       <InputGroup className="mb-3">
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          name="username"
          onChange={(event)=>handleChange(event)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Email"
          aria-label="Email"
          name="email"
          onChange={(event)=>handleChange(event)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Addition"
          aria-label="Addition"
          name="addition"
          onChange={(event)=>handleChange(event)}
        />
      </InputGroup>

      <Button variant="secondary" onClick={handleADDAddition}>Submit</Button>
    
    </>
  )
} 