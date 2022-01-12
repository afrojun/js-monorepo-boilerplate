import React from 'react'
import { render, screen } from '@testing-library/react'
import NavHeader from './NavHeader'

describe('NavHeader', () => {
  it('renders the logo', () => {
    render(<NavHeader />)
    expect(screen.getByText('JS Monorepo Boilerplate')).toBeInTheDocument()
  })

  it('matches the snapshot', () => {
    expect(render(<NavHeader />).asFragment()).toMatchSnapshot()
  })
})
