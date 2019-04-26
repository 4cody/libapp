import { 
    FETCH_BOOKS,
    ADD_BOOK_SUCCESS,
    ADD_BOOK_FAILURE,
    ADD_BOOK_STARTED 
} from '../actions/types'

const initialState = {
    books: [],
    error: null,
    loadinng: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_BOOKS:
            return {
                ...state,
                books: action.payload
            }

        case ADD_BOOK_STARTED:
            return {
                ...state,
                loading: true
            }
        
        case ADD_BOOK_SUCCESS:
            console.log(action.payload, "reducers payload")
            return {
                ...state,
                loading: false,
                error: null,
                books: [...state.books, action.payload]
            }
        
        case ADD_BOOK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        default: 
            return state
    }
}
