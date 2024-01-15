// src/reducers/index.js
// src/reducers/counterReducer.js
// src/reducers/userReducer.js
const favoriteReducer = (state = { favorite: [] }, action) => {
  switch (action.type) {
    case "SET_AZIENDA":
      return { favorite: action.payload };
    case "CLEAR_AZIENDA":
      return { favorite: [] };
    default:
      return state;
  }
};

export default favoriteReducer;
