// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId("count");
  expect(initialCount).toHaveTextContent("0");

});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const counterNum = screen.getByTestId("count");
  const plusButton = screen.getByRole("button", {name: "+"})

  fireEvent.click(plusButton);
  expect(counterNum).toHaveTextContent('1');

  fireEvent.click(plusButton);
  expect(counterNum).toHaveTextContent('2');

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const counterNum = screen.getByTestId("count");
  const minusButton = screen.getByRole("button", {name: "-"})

  fireEvent.click(minusButton);
  expect(counterNum).toHaveTextContent('-1');

  fireEvent.click(minusButton);
  expect(counterNum).toHaveTextContent('-2');

});
