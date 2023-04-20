import React from 'react';
import BuildTile from './BuildTile.jsx'

const Homepage = (props:Object) => {

  return (
    <div>
<div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.ocregister.com/wp-content/uploads/2021/10/OCR-L-RCPLANES-0921-11-MF.jpg?w=1024")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Welcome to RC Part Picker! Have a limited look around and be careful not to break anything!</p>
    </div>
  </div>
</div>
      <BuildTile />
    </div>
  )
}

export default Homepage

