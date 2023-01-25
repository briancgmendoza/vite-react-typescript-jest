import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from '../App';


test('Renders main page correctly', async () => {
  render(<App />);

  const buttonCount = await screen.findByRole('button');
  const codeCount = await screen.queryByText(/The count is now:/);

  // Pre Expecations
  expect(buttonCount).toHaveTextContent('count is: 0');
  // codeCount is rendered conditionallly
  expect(codeCount).not.toBeInTheDocument();

  // Triggering user clicks
  await user.click(buttonCount);
  await user.click(buttonCount);

  // Post Expectations
  expect(buttonCount).toHaveTextContent('count is: 2');
  expect(await screen.queryByText(/The count is now:/)).toBeInTheDocument();
});