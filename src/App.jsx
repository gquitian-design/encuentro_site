import { Route, Routes } from 'react-router-dom'; 
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Gallery from './pages/Gallery';

function App() {

  return (

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
  );
}

export default App
