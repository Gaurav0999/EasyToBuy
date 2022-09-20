import React from 'react';
function Button(hello)
  {
    return (
      <button className="w-8 h-8 hover:bg-green-400 border border-black ">{hello.value}</button>       
        
        
    );
  }

export default Button;