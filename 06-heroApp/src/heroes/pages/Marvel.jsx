import HeroList from '../components/HeroList'
import { PUBLISHERS } from '../helpers/filterHeroesByPublisher'

export default function Marvel () {
  return (
    <>
      <HeroList publisher={PUBLISHERS[1]} />
    </>
  )
}
