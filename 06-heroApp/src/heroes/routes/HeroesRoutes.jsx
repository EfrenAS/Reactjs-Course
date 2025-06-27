import { Navigate, Route, Routes } from 'react-router'
import Navbar from '../../ui/components/Navbar'
import Dc from '../pages/Dc'
import HeroPage from '../pages/HeroPage'
import Marvel from '../pages/Marvel'
import SearchPage from '../pages/SeacrhPage'

export default function HeroesRoutes () {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='marvel' element={<Marvel />} />
        <Route path='dc' element={<Dc />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='hero/:heroId' element={<HeroPage />} />
        <Route path='/' element={<Navigate to='/marvel' />} />
      </Routes>
    </>
  )
}
