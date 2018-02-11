import React from 'react';

const Navbar = function(props) {
  const {handleClick} = props
  return (
    <div id="nav">
      <button id="dogs" onClick={handleClick}> Show me all the dogs! </button>
    </div>
  )
  
}

export default Navbar;