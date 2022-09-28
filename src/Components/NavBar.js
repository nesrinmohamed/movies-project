import React ,{useEffect} from 'react'
import { Container } from 'react-bootstrap'
import {AiOutlineSearch} from 'react-icons/ai'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { getAllMovies , getMovieSearch } from './redux/actions/movieAction'
const NavBar = () => {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getAllMovies())
  }, [])
  const search = async(word) =>{
    if(word === ''){
   dispatch(getAllMovies())
  }else{
    dispatch(getMovieSearch(word))
  }
  }
    const onSearch = (word) =>{
    search(word)
    }
  return (
   <nav>
    <Container>
     <div className='d-flex align-items-center'>
       <Link to='/'>
       <img src='/img/logo.png' alt='logo' className='logo' />
       </Link>
        <form action="" className='form-search'>
            <input type='text' 
            placeholder='ابحث...' 
            className='input-search'
            onChange={(e) => onSearch(e.target.value)}
            />
            <AiOutlineSearch className='icon-search'/>
        </form>
     </div>
    </Container>
   </nav>
  )
}

export default NavBar