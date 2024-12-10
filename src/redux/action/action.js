export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'
export const GET_FAVOURITE = 'GET_FAVOURITE'
export const GET_FAVOURITE_ERROR = 'GET_FAVOURITE_ERROR'

export const addToFavouriteAction = (favouriteSelected) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: favouriteSelected,
  }
}

export const removeFromFavouriteAction = (i) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: i,
  }
}

export const getFavouriteAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://strive-benchmark.herokuapp.com/api/jobs?company='
      );

      if (response.ok) {
        const fetchedFavourite = await response.json(); 
        dispatch({
          type: GET_FAVOURITE,
          payload: fetchedFavourite,
        });
      } else {
        throw new Error('Errore nella risposta della fetch');
      }
    } catch (error) {
      console.error('Errore durante il fetch dei preferiti:', error);
      dispatch({
        type: GET_FAVOURITE_ERROR,
        payload: error,
      });
    }
  };
};