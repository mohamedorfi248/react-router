import './App.css';
import {moviesData} from './Components/Data/Data (1)'
import Movieslist from './Components/Movieslist/Movieslist';
import {React,useState} from 'react'
import Addmovie from './Components/Addmovie/Addmovie';
import FiltreByName from './Components/FiltreByName/FiltreByName';
import Filtrebyrate from '/Cmponents/Filtrebyrate/Filtrebyrate';
function App() {
const [movies, setMovies] = useState(moviesData)
const [inputSearch, setInputSearch] = useState("")
const [rating, setRating] = useState(2)

const add =(newmovie)=>{
    setMovies([...movies,newmovie])

}

return (
    <div className="App">
    <h1>MOVIE APP</h1>
    <FiltreByName inputSearch={inputSearch} setInputSearch={setInputSearch}/>
    <Filtrebyrate rating = {rating} setRating = {setRating} />
    <Movieslist movies = {movies} inputSearch = {inputSearch}/>
    <Addmovie add={add}/>
    
    
    </div>
);
}

export default App;
