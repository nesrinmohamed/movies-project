import React from 'react'
import { Col } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

const CardMove = ({mov}) => {
  const navigate = useNavigate()
  const direct = () =>{
    navigate('/movedetails' , {state:mov})
    }
  return (
 <Col xs='6' sm='6' lg='3' className='my-1'>
 <div className='card'  onClick={direct}>
    <img src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path}  alt='hu' className='card-img'/>
    <div className="card_overlay">
    <div className="overlay_text text-center w-100 p-2">
  <p>اسم الفيلم : {mov.original_title}</p>  
  <p>تاريخ الاصدار: {mov.release_date}</p>  
  <p>المقيمين  : {mov.vote_count}</p>  
  <p>التقييم : {mov.vote_average}</p> 
   </div>
    </div>
 </div>
 </Col>
  )
}

export default CardMove