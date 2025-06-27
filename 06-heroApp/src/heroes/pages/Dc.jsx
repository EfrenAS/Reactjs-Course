import HeroList from '../components/HeroList'
import { PUBLISHERS } from '../helpers/filterHeroesByPublisher'

export default function Dc () {
  return (
    <HeroList publisher={PUBLISHERS[0]} />
  )
}
