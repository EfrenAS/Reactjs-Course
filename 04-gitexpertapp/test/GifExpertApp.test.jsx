import { render, screen } from '@testing-library/react'
import GifExpertApp from '../src/GifExpertApp'

describe('Test to <GifExpertApp />', () => {
  test('Should set categories with the new category', () => {
    render(<GifExpertApp />)
    screen.debug()
  })
})