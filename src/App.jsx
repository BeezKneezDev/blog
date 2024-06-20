import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Demo from './components/demo/Demo'
import HomeHeader from './components/home/HomeHeader';
import DemoHeader from './components/demo/DemoHeader';

function App() {
  const auth = false;
  return (
      <>
      {auth ? <HomeHeader /> : <DemoHeader />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/demo' element={<Demo />} />
      </Routes>
      </>
  )
}

export default App