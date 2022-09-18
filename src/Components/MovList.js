import React from 'react'
import CardMove from './CardMove'
import {Row} from 'react-bootstrap'
import Pagenation from './Pagenation'

const MovList = ({movies , getPage , pageCount}) => {

  return (
   <Row className='mt-3'>
{movies.length>=1 ? (
movies.map((mov) =>{
return(
    <CardMove key={mov.id} mov={mov} />
    )
})
) : (<h2 className='text-center'> ...لا يوجد افلام </h2>)}
<Pagenation getPage={getPage} pageCount={pageCount}/>
   </Row>
  )
}

export default MovList