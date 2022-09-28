import React  , {useState , useEffect} from 'react'
// import  {Pagination} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getPage } from './redux/actions/movieAction';
const Pagenation = () => {
const [pageCount , setPageCount] =  useState(0)
const dispatch= useDispatch()
useEffect(() =>{
  setPageCount(pages)
},[])
const pages = useSelector(state => state.pageCount)
const moviePage = async(page) =>{
dispatch(getPage(page))
}
const handlePageClick =(data) =>{
  moviePage(data.selected + 1)
  }

  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="التالى"
    onPageChange={handlePageClick}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    pageCount={pageCount}
    previousLabel="السابق"
    renderOnZeroPageCount={null}
    containerClassName={'pagination justify-content-center p-3'}
    pageClassName={'page-item'}
    pageLinkClassName={'page-link'}
    previousClassName={'page-item'}
    nextClassName={'page-item'}
    previousLinkClassName={'page-link'}
    nextLinkClassName={'page-link'}
    breakClassName={'page-link'}
    activeClassName={'active'}
  />
  )
}

export default Pagenation