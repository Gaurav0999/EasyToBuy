import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import { Routes, Route } from 'react-router-dom';
import Items from './Items';
import Nodatafound from './Nodatafound';

function Data() {
  const savedDatastring=localStorage.getItem("my-cart")||"{}";
  const savedData=JSON.parse(savedDatastring);
  const [cart,setcart]=useState(savedData);
  function handleAddcart(productid,count){
    console.log(productid,count);
    const oldcount=cart[productid]||0;
    const newcart={...cart,[productid]:oldcount+count};
    setcart(newcart);
    const cartString=JSON.stringify(newcart);
    localStorage.setItem("my-cart",cartString);
  }
  const totalcount=Object.keys(cart).reduce(function(privious,current){
   return privious+cart[current];
  },0);

  return (


    <div className="bg-gray-300 flex flex-col h-screen rounded-lg overflow-scroll" >
      <div className="bg-white">
        <Header productCount={totalcount}></Header>
      </div>
      <div className="grow ">
        
        <Routes>
          <Route index element={<ProductList />}></Route>
          <Route path="/products/:id" element={<Items  onAddcart={handleAddcart}/>}></Route>
       
          
             <Route path="*" element={<Nodatafound/>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>);
}
export default Data;