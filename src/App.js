
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBannerData, setImageURL } from './store/movieSlice';

function App() {
    const dispatch = useDispatch();

    //fetch movies weekly data
    const fetchTrendingData = async()=>{
        try{
            const response = await axios.get("/trending/all/week");
            dispatch(setBannerData(response.data.results));

            console.log("response" );
        }
        catch(err){
            console.log('error',err)
        }
    }

    const fetchConfiguration = async()=>{
        try{
            const response = await axios.get('/configuration');
            dispatch(setImageURL(response.data.images.secure_base_url+'original'));
        }
        catch(err){
            console.log('error', err);
        }
    }

    useEffect(()=>{
        fetchTrendingData();
        fetchConfiguration();
    },[])

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
