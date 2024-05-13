import { cleanup, render, screen } from '@testing-library/react';
import MatchMediaMock from "jest-matchmedia-mock";
import App from './App';

const  matchMedia = new MatchMediaMock();

describe(`App`, () => {
  beforeAll(() => {
    matchMedia.useMediaQuery(`(min-width: 992px)`); // Use lg by default
  });

  beforeEach(() => { cleanup(); })
  
  it(`should render page`, () => {
    render(<App />);

    expect(screen.getByRole(`main`)).toBeInTheDocument();
    expect(screen.getByRole(`navigation`)).toBeInTheDocument();
    expect(screen.getByRole(`menuitem`, { name: `Home` })).toBeInTheDocument();
    expect(screen.getByRole(`menuitem`, { name: `Booking` })).toBeInTheDocument();
  });

  it(`should render form`, () => {
    render(<App />);

    expect(screen.getByRole(`textbox`, { name: `First Name` })).toBeInTheDocument();
    expect(screen.getByRole(`textbox`, { name: `Last Name` })).toBeInTheDocument();
    expect(screen.getByRole(`textbox`, { name: `Email` })).toBeInTheDocument();
    expect(screen.getByRole(`textbox`, { name: `Phone number` })).toBeInTheDocument();
    expect(screen.getByRole(`textbox`, { name: `Date & Time` })).toBeInTheDocument();
    expect(screen.getByRole(`spinbutton`, { name: `Number of guests` })).toBeInTheDocument();
    expect(screen.getByRole(`button`, { name: `Reserve` })).toBeInTheDocument();
  });
})
