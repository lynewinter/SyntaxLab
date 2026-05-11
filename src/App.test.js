// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SyntaxLab title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SyntaxLab/i);
    expect(titleElement).toBeInTheDocument();
});
