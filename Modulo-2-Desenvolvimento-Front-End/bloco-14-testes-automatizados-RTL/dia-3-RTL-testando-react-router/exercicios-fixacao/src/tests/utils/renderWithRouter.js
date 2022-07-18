import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

function renderWithRouter(component) {
  const history = createMemoryHistory();
  const renderObject = render(
    <Router history={history}>
      { component }
    </Router>
  );
  return ({
    ...renderObject, history: history,
  });
};
export default renderWithRouter;
