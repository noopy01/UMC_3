import { BrowserRouter, Route,Routes } from 'react-router-dom';

import Home from './pages/Home';
import Popular from './pages/Popular';
import NowPlaying from './pages/NowPlaying';
import TopRated from './pages/TopRated';
import Login from './pages/Login';
import Upcoming from './pages/Upcoming';
import Header from './components/Header';

function App() {

  return (
  <div className="root-wrap">

  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/login" element={<Login />} /> 
    <Route path="/popular" element={<Popular />} /> 
    <Route path="/now playing" element={<NowPlaying />} /> 
    <Route path="/top rated" element={<TopRated />} /> 
    <Route path="/upcoming" element={<Upcoming />} />
    </Routes>
    </BrowserRouter>
    </div>
  
  );


}



export default App;
