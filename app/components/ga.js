import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-CYPLVVSN8B');
};

export const logPageView = () => {
  ReactGA.pageview(window.location.pathname);
};