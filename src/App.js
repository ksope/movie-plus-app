
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';

function App() {
  return (
      <div className='pb-14 lg:pb-0'>
          <Navbar/>
          <div className='pt-16'>
              <Outlet />
              <Footer />
              <MobileNavbar />
          </div>

          <Footer />
      </div>
  );
}

export default App;
