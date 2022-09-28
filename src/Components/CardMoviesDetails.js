import React from 'react'
import {  Row , Col  } from 'react-bootstrap'
import {Link , useLocation} from 'react-router-dom'
const CardMoviesDetails = () => {
 const location = useLocation()
 const mov = location.state
 console.log(mov)
  return (
    <div>
      <Row className='justify-content-center mt-3'>
    <Col>
    <div className="card-details d-flex aliign-items-center">
<img className='img-movie ' 
src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path} 
alt='asced'
/>
<div className="text-center justify-content-center mx-auto">
  <p className='card-text-details border-bottom'>اسم الفيلم : {mov.original_title}</p>
  <p className='card-text-details border-bottom'>تاريخ الفيلم : {mov.release_date}</p>
  <p className='card-text-details border-bottom'>عدد المقيمين : {mov.vote_count}</p>
  <p className='card-text-details border-bottom'> التقييم :{mov.vote_average}</p>
</div>

    </div>
    </Col>
      </Row>

<Row className='justify-content-center'>
<Col md='12' xs='12' sm='12' >
<div className="card-story d-flex flex-column align-items-start">
<div className="text-end p-2">
  <p className="card-text-title fs-3 border-bottom" style={{fontWeight:'bold'}}>القصة:</p>
</div>
<div className="text-end">
  <p className="card-text-story"> {mov.overview}</p>
</div>
</div>
</Col>
</Row>

<Row className=' justify-content-center mt-5'>
<Col md='10' xs='12' sm='12' className='mt-2 d-flex justify-content-center'>
<Link to='/'>
<button className='mx-2 btn'>
  عودة للصفحة الرئيسية
</button>
</Link>
<button className='btn' >
مشاهدة الفيلم
</button>
</Col>
</Row>
    </div>
  )
}

export default CardMoviesDetails