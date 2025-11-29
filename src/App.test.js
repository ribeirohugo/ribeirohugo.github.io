import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero section with name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Hi, I'm Hugo Ribeiro/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders about section', () => {
  render(<App />);
  const aboutElement = screen.getByText(/About Me/i);
  expect(aboutElement).toBeInTheDocument();
});

test('renders skills section', () => {
  render(<App />);
  const skillsElement = screen.getByText(/Skills & Expertise/i);
  expect(skillsElement).toBeInTheDocument();
});

test('renders projects section', () => {
  render(<App />);
  const projectsElement = screen.getByText(/Featured Projects/i);
  expect(projectsElement).toBeInTheDocument();
});

test('renders contact section', () => {
  render(<App />);
  const contactElement = screen.getByText(/Get In Touch/i);
  expect(contactElement).toBeInTheDocument();
});
