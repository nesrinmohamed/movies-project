import React , { useState , useEffect } from 'react'
import CardMove from './CardMove'
import {Row} from 'react-bootstrap'
import Pagenation from './Pagenation'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from './redux/actions/movieAction'

const MovList = () => {
  const [movies , setMovies] =useState([])
  const dispatch=useDispatch()
  useEffect(() =>{
  dispatch(getAllMovies)
  },[])
  const dataMovies = useSelector(state => state.movies)
  console.log(dataMovies)
  useEffect(() =>{
  setMovies(dataMovies)
  },[dataMovies])
  return (
   <Row className='mt-3'>
{movies.length>=1 ? (movies.map((mov) =>{
return(
    <CardMove key={mov.id} mov={mov} />
    )
})
) : (<h2 className='text-center'> ...لا يوجد افلام </h2>)}
{movies.length >= 1 ?<Pagenation/>  : null}
   </Row>
  )
}

export default MovList