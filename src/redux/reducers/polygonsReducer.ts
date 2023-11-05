import { PolygonsActionTypes, PolygonAction } from '../types';
  import { Polygon } from '../types';
  
  interface PolygonState {
    polygons: Polygon[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: PolygonState = {
    polygons: [],
    loading: false,
    error: null,
  };
  
  const polygonReducer = (state = initialState, action: PolygonAction): PolygonState => {
    switch (action.type) {
      case PolygonsActionTypes.FETCH_POLYGONS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case PolygonsActionTypes.FETCH_POLYGONS_SUCCESS:
        return {
          ...state,
          loading: false,
          polygons: action.polygons,
        };
      case PolygonsActionTypes.FETCH_POLYGONS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default polygonReducer;
  