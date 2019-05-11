import { 
    FETCH_BOOKS,
    ADD_BOOK_SUCCESS,
    ADD_BOOK_FAILURE,
    ADD_BOOK_STARTED,
    BOOK_SELECTION 
} from '../actions/types'

const initialState = {
    books: [],
    selection: {},
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

        case BOOK_SELECTION:
            return {
                ...state,
                selection: action.payload
            }

        default: 
            return state
    }
}
