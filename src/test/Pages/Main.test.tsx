import { render, screen } from '@testing-library/react';
import { Home } from 'components/Pages';

test('render Main Page', () => {
    render(<Home />);

    const h1Tag = screen.getByText(/this is main page/i);
    expect(h1Tag).toBeInTheDocument();
})