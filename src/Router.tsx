import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'

export function Router() {
  return (
    <Routes>
      <Route Component={Home} path="/home" index />
      <Route Component={History} path="/history" />
    </Routes>
  )
}
