import React from 'react'
import { Route, Routes } from 'react-router'
import App from './src/App'
import Error from './pages'

const Movieapp = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default Movieapp
