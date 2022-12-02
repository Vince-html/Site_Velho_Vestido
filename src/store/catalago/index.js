const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case action.LOAD_REQUEST:
      return { ...state, loading: true };
    case action.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };

    case action.LOAD_ERROR:
      return { ...state, loading: false, error: true, data: [] };

    default:
      return state;
  }
};

export default reducer;
