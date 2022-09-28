import React , {useState , useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import './App.css';
import MovList from './Components/MovList';
import NavBar from './Components/NavBar';
import {Container} from 'react-bootstrap';
import {Routes , Route} from 'react-router-dom'
import CardMoviesDetails from './Components/CardMoviesDetails'
function App() {

  return (
  <div className='font color-body'>
    <NavBar />
    <Container>
      <Routes>
        <Route path='/' element={<MovList />}/>
       <Route path='/movedetails' element={<CardMoviesDetails/>}/>
      </Routes>
    </Container>
  </div>
  );
}

export default App;
