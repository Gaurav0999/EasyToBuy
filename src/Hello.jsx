import React from 'react';
import Product from './Product';

function Hello({item}){
  return(
    <>
        <div className="sm:grid sm:grid-cols-3  mt-8  gap-4  ">
          {item.map (function(products){
          return( 
            <Product title={products.title} thumbnail={products.thumbnail} category={products.categoryry} price={products.price} id={products.id}/>
          
          );
            }
            )
          }
          </div>
    </>
  );
}
export default Hello;