import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/Default'
import { Transactions } from './pages/Transactions'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Transactions />} />
      </Route>
    </Routes>
  )
}
