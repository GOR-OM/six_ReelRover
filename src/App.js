import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Videos from './component/Videos';
import Upload from './component/Upload';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/upload' element={<Upload/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
