import './App.css';
import { Navbar } from './components';
import { UserPage } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <UserPage />
      </div>
    </>
  )
}

export default App
