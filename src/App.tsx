import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { Navbar } from './components'
import { store } from './store'
import { AppRouter } from './routes/AppRouter'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <AppRouter />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
