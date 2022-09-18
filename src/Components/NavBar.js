import React from 'react'
import { Container } from 'react-bootstrap'
import {AiOutlineSearch} from 'react-icons/ai'
import {Link} from 'react-router-dom'
const NavBar = ({search}) => {
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