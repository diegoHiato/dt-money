import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './Routes'
import { TransactionsProvider } from './contexts/Transactions/Provider'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <TransactionsProvider>
          <AppRoutes />
        </TransactionsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
