const THEME_INITIAL_STATE = {
  theme: 'dark',
};

const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      };
    default:
      return state;
  }
};

const STATUS_INITIAL_STATE = {
  status: 'offline',
};

const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_STATUS':
      return {
        ...state,
        status: state.status === 'offline' ? 'online' : 'offline',
      };
    default:
      return state;
  }
};

const reducerCombinado = Redux.combineReducers({ themeReducer, statusReducer });

const store = Redux.createStore(reducerCombinado);


const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch({ type: 'CHANGE_THEME' });
});

statusButton.addEventListener('click', () => {
  store.dispatch({ type: 'CHANGE_STATUS' });
});

store.subscribe(() => {
  const { themeReducer, statusReducer } = store.getState();
  const body = document.querySelector('body');
  const statusHtml = document.getElementById('status');
  const buttonTheme =  document.getElementById('toggle-theme');
  const buttonStatus = document.getElementById('toggle-status');

  if (themeReducer.theme === 'light') {
    body.style.backgroundColor = '#333';
    body.style.color = '#ffffff';
    buttonTheme.innerText = 'Dark Mode';
  } else {
    body.style.backgroundColor = '#ffffff';
    body.style.color = '#333';
    buttonTheme.innerText = 'Light Mode';
  }

  if (statusReducer.status === 'online') {
    buttonStatus.innerText = 'Ficar Online';
    statusHtml.innerText = 'Online';
  } else {
    buttonStatus.innerText = 'Ficar Offline';
    statusHtml.innerText = 'Offline';
  }
});