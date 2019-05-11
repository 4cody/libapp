import { 
    FETCH_BOOKS, 
    ADD_BOOK_STARTED, 
    ADD_BOOK_SUCCESS,
    ADD_BOOK_FAILURE,
    BOOK_SELECTION
} from './types'
import axios from 'axios'

export const fetchBooks = () => dispatch => {
    axios.get('/books')
        .then(res => dispatch({
            type: FETCH_BOOKS,
            payload: res.data
        })) 
}

export const addBook = ({ title, author, genre, desc }) => dispatch => {
    dispatch(addBookStarted())
    axios
      .post('/books', {
        title,
        author,
        genre,
        desc
      })
      .then(book => {
        console.log(book.data)
        dispatch(addBookSuccess(book.data))
      })
      .catch(err => {
        dispatch(addBookFailure(err.message))
      })
}

export const bookSelector = ({ id }) => dispatch => {
    axios
      .get('/books', {
        params:{
          id
        }
      })
      .then(book => {
        dispatch(selection(book.data))
      })
      .catch(err => {
        console.log(err)
      })
}

// const hydrateBooks = () => ({

// })

const addBookSuccess = book => ({
    type: ADD_BOOK_SUCCESS,
    payload: {
      ...book
    }
})
  
const addBookStarted = () => ({
    type: ADD_BOOK_STARTED
})
  
const addBookFailure = error => ({
    type: ADD_BOOK_FAILURE,
    payload: {
      error
    }
})

const selection = (book) => ({
  type: BOOK_SELECTION,
  payload: {
    ...book
  }
})
  