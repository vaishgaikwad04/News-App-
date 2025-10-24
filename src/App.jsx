import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
//import Fetch from './pages/ui/Fetch';
import CategoryNews from './pages/ui/CategoryNews';
import TrendingNews from './pages/ui/TrandingNews';
import HotNews from './pages/ui/HotNews';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
       
           <Route path="/category/:category" element={<CategoryNews />} />
           <Route path='tranding' element={<TrendingNews/>}/>
           <Route path='breaking' element={<HotNews/>}/>
                  

        </Route>
      </Routes>
    </Router>
  )
}

export default App
