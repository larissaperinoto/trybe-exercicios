const Redux = require('redux');

// ========= Actions =====
const fazerLogin = (email) => ({
  type: "LOGIN",
  email,
});

// ======= Reducer =====

const initialState = {
  login: false,
  email: "",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email
      }
    return state;
  }
}

// ====== Store ======

const store = Redux.createStore(reducer);

// ===== Interações ===
store.dispatch(fazerLogin("email@email.com"));
