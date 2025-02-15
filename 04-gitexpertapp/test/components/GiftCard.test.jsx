import { render, screen } from '@testing-library/react'
import GiftCard from '../../src/components/GifCard'

describe('GiftCard test', () => {
  const title = 'Goku vs. Superman'
  const url = 'https://localhost:3000/goku-vs-superman.gif'

  test('should render correctly with snapshot', () => {
    const { container } = render(<GiftCard title={title} url={url} />)
    expect(container).toMatchSnapshot()
  })

  test('should render title', () => {
    render(<GiftCard title={title} url={url} />)

    const {src, alt } = screen.getByRole('img')
    
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('should render title and url', () => {
    render(<GiftCard title={title} url={url} />)

    const titleElement = screen.getByText(title)

    expect(titleElement).toBeTruthy()
  })
})