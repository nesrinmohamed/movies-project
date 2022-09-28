import { ALLMOVIES , APIMOVIE} from "../type"
import axios from 'axios'
// get ALLMovies 
export const getAllMovies = () =>{
    return async(dispatch) =>{
     const res = await axios.get(APIMOVIE)
     console.log(res.data)
    dispatch({type:ALLMOVIES,  data:res.data.results, pages:res.data.total_pages })
    }}
    // SEARCH BY NAME 
    export const getMovieSearch = (word) =>{
    return async(dispatch) =>{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&query=${word}&language=ar`)
    dispatch({type:ALLMOVIES, data:res.data.results,  pages:res.data.total_pages })
    }}

    // PAGECOUNT 
    export const getPage = (page) =>{
        return async(dispatch) =>{
        const res =  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&language=ar&page=${page}`)
    dispatch({type:ALLMOVIES,  data:res.data.results,  pages:res.data.total_pages })
        
        }
      }