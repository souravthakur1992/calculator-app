import { render, screen } from '@testing-library/react';
import { Home } from 'components/Pages';
const renderer = require('react-test-renderer');
test('render Main Page', () => {
    render(<Home />);

    const h1Tag = screen.getByText(/CALCULATOR REACT APP/i);
    expect(h1Tag).toBeInTheDocument();
})
describe("Snapshot test for Home page", () => {
    it("Matches DOM Snapshot", () => {
        const domTree = renderer.create(<Home />).toJSON();
        expect(domTree).toMatchSnapshot();
    });
});