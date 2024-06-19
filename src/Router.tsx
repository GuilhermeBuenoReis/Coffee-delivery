import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { CompleteOrder } from './pages/CompleteOrder'
import { DefaultLayout } from './defaultLayout/layout'
import { CheckOutOrder } from './pages/CheckOutOrder'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/CompleteOrder" element={<CompleteOrder />}></Route>
        <Route path="/CheckOutOrder" element={<CheckOutOrder />}></Route>
      </Route>
    </Routes>
  )
}
