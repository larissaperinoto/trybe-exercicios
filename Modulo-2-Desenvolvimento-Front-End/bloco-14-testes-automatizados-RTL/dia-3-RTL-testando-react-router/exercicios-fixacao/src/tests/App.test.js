import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './utils/renderWithRouter';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { act } from 'react-dom/test-utils';

describe('Verifica a rota da aplicação', () => {
  it('Verifica se o componente App é renderizado', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', {
      name: /Você está na página Início/i,
    });
    expect(homeTitle).toBeInTheDocument();
  });

  it('Verifica se a página About é renderizada ao clicar no link', () => {
    renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: /sobre/i});
    userEvent.click(linkAbout);
    const aboutTitle = screen.getByRole('heading', {
      name: /Você está na página Sobre/i,
      level: 1,
    });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Verifica se a página Não encontrada é renderizada ao navegar para uma rota não exitente', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {  history.push('/pagina-que-nao-existe'); });

     const notFound = screen.getByRole('heading', {
      name: /Página não encontrada/i,
      level: 1,
    });
    expect(notFound).toBeInTheDocument();
  });
})
