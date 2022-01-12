import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

jest.mock('./components/NavHeader', () => () => <div>Mock Header</div>)

describe('App', () => {
  it('renders the layout component', () => {
    render(<App />)

    expect(screen.getByText('Mock Header')).toBeInTheDocument()
  })

  it('renders the children', () => {
    render(<App />)

    expect(screen.getByText('Hello World!')).toBeInTheDocument()
  })
})
