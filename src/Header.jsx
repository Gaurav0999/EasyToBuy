import React from 'react';

import { HiShoppingCart } from 'react-icons/hi';

function Header({productCount} ) {
  return (
    <div className="bg-white flex justify-between items-center px-4 max-w-6xl m-auto ">
      <img className="h-16" src="http://g-ecx.images-amazon.com/images/G/01/logo/a_com_logo_220x96v2._CB485924063_.jpg" />
      <div className="flex flex-col items-center">
     <HiShoppingCart className="w-6 h-6" />
      
        <span className="-m-10">{productCount}</span>
      </div>
    </div>
  );
}
export default Header;