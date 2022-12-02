import { PRODUCT_GET } from '../api';

const FETCH_PRODUCT_LOADING = 'product/fetchLoading';
const FETCH_PRODUCT_SUCCESS = 'product/fetchSuccess';
const FETCH_PRODUCT_ERROR = 'product/fetchError';
const SEARCH_PHOTO = 'product/searchPhoto';

export const fetchProductLoading = () => ({
  type: FETCH_PRODUCT_LOADING,
});

export const fetchProductSuccess = (data) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: data,
});

export const fetchProductError = (error) => ({
  type: FETCH_PRODUCT_ERROR,
  payload: error,
});

export const searchPhoto = (param) => ({
  type: SEARCH_PHOTO,
  payload: param,
});

const initialState = {
  loading: false,
  error: null,
  data: [],
  searchParam: '',
};

export default function product(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
        data: state.data,
        error: null,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload],
        error: null,
      };

    case FETCH_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        data: state.data,
        error: action.payload,
      };
    case SEARCH_PHOTO:
      return {
        ...state,
        searchParam: action.payload,
        loading: true,
      };

    default:
      return state;
  }
}

export const fetchProduct = (id) => async (dispatch) => {
  try {
    dispatch(fetchProductLoading());
    const { url, options } = PRODUCT_GET(id);
    const response = await fetch(url, options);
    const data = await response.json();
    dispatch(fetchProductSuccess(data));
    if (response.ok === false) throw new Error(data.message);
  } catch (error) {
    dispatch(fetchProductError(error.message));
  }
};
