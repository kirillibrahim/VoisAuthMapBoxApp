import { Dispatch } from 'redux';

import { PolygonsActionTypes, PolygonAction } from '../types';

import axios from 'axios';

export const fetchPolygons = () => async (dispatch: Dispatch<PolygonAction>) => {
  dispatch({ type: PolygonsActionTypes.FETCH_POLYGONS_REQUEST });

  try {
    const response = await axios.get('http://localhost:3000/api/polygons'); // Update the URL as needed
    dispatch({
      type: PolygonsActionTypes.FETCH_POLYGONS_SUCCESS,
      polygons: response.data,
    });
  } catch (error) {
    dispatch({
      type: PolygonsActionTypes.FETCH_POLYGONS_FAILURE,
      error: 'Failed to fetch polygons',
    });
  }
};
