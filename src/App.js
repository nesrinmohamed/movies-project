import React , {useState , useEffect} from 'react';
import './App.css';
import MovList from './Components/MovList';
import NavBar from './Components/NavBar';
import {Container} from 'react-bootstrap';
import axios from 'axios';
import {Routes , Route} from 'react-router-dom'
import CardMoviesDetails from './Components/CardMoviesDetails'
function App() {
  const [movies , setMovies] = useState([])
  const [pageCount , setPageCount] =  useState(0)
  const getAllMovies = async() =>{
  const res =  await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&language=ar&page')
console.log(res.data.homepage)
setMovies(res.data.results) 
setPageCount(res.data.total_pages)
}
// get current page 
const getPage = async(page) =>{
  const res =  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&language=ar&page=${page}`)
console.log(res.data.results)
setMovies(res.data.results) 
setPageCount(res.data.total_pages)

}
useEffect(() =>{
getAllMovies()
}, [])

const search = async(word) =>{
  if(word === ''){
  getAllMovies();
  }else{
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&query=${word}&language=ar`)
    setMovies(res.data.results)
setPageCount(res.data.total_pages)

  }
}

  return (
  <div className='font color-body'>
    <NavBar search={search}/>
    <Container>
      <Routes>
        <Route path='/' element={<MovList movies={movies}  getPage={getPage} pageCount={pageCount}/>}/>
       <Route path='/movedetails' element={<CardMoviesDetails/>}/>
      </Routes>
    </Container>
  </div>
  );
}

export default App;
