import { Route, Routes } from 'react-router-dom'; 
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Gallery from './pages/Gallery';
import Fqa from './pages/Fqa';
import History from './pages/History'

function App() {

  return (

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/fqa' element={<Fqa />} />
          <Route path='/history' element={<History />} />
        </Routes>
  );
}

export default App
