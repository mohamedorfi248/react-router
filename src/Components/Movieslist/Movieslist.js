import React from 'react'
import Moviescard from '../Moviescard/Moviescard'
import "./Movieslist.css";



const Movieslist = ({movies , inputSearch}) => {
  return (
    <div className='moviestyle'>
      {movies
      .filter((movie)=> 
      movie.title.toUpperCase().includes(inputSearch.toUpperCase()))



      .map((movie)=>(<Moviescard movie = {movie} key= {movie.id}/>))}
    </div>
  )
}

export default Movieslist
