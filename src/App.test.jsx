import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App';

test('Test if text is shown', async () => {
  render(<App url="/" />)
  expect(screen.getByRole('h1[class="title"]')).toHaveTextContent('Volkswagen лучшие автомобили')
})
