import {Titles} from '../Title/Titles'
import {Home} from '../../../pages/index'
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Homepage', () => {
  it('Shows title', () => {
    render(<Titles/>);
    const titleElement = screen.getByTestId('title')
    expect(title).toHaveTextContent('Welcome to zakatCal')
  })
})