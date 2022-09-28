import { ALLMOVIES } from "../type"

const intialState = {
movies:[],
pageCount:0,
}
export const movieReducer = (state= intialState , action) =>{
switch(action.type){
case ALLMOVIES:
return{
movies:action.data,
pageCount:action.pages
}
default:
    return state
}
}