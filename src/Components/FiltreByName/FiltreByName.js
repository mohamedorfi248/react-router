import React from 'react'
import { Form } from 'react-bootstrap'

const FiltreByName = ({inputSearch ,setInputSearch}) => {
  return (
    <div>
          <Form.Control type="text" 
          placeholder="Enter Movie name" 
          value = {inputSearch} 
          onChange={(e) => (setInputSearch(e.target.value))} />
    </div>
  )
}

export default FiltreByName
