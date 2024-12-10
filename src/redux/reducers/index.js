const initialState = {
  favourite: {
    list: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE':
      if (state.favourite.list.some((fav) => fav === action.payload)) {
        return state;
      }
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: [...state.favourite.list, action.payload],
        },
      };

    case 'REMOVE_FROM_FAVOURITE':
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: state.favourite.list.filter((fav) => fav !== action.payload),
        },
      };

    case 'GET_FAVOURITE':
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: action.payload, 
        },
      };

    case 'GET_FAVOURITE_ERROR':
      return {
        ...state,
        favourite: {
          ...state.favourite,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};

export default mainReducer;

