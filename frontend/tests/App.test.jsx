import { render } from '@testing-library/react'
import App from '../src/App'
import { describe, it, expect } from 'vitest'

describe('App', () => {
  it('renders title', () => {
    const { getByText } = render(<App />)
    expect(getByText('Taskboard')).toBeTruthy()
  })
})
