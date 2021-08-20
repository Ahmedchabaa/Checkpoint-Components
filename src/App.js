import React from 'react';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import './App.css'

function App() {
  return (
    <div className='profile'>
      <div>
      <ProfilePhoto/>
      </div>
      <div className='information'>
      <FullName/>
      <Address/>
      </div>
    </div>
  )
}

export default App
