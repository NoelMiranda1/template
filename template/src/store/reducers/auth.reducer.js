const initialState = {
  authenticate: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'authenticate':
      return {
        ...state,
        authenticate: action.payload,
      };

    default:
      return state;
  }
};
