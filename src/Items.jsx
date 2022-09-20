import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getproductdata } from './Api';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';
import Nodatafound from './Nodatafound'; 
import Loading from './Loading';
function Items({onAddcart}) {
  const id = +useParams().id;
  const [product, setproduct] = useState();
const [loading,setloading] =useState(true);
  const [count,setCount]=useState(1);
  useEffect(
    function() {
      const p = getproductdata(id);
      p.then(function(response) {
        setproduct(response.data);
setloading(false);
      });
      p.catch(function() {
        setloading(false);
      });
    },
    [id]
  );
  function handlecount(event){
    setCount(+event.target.value);
  }
  function handleButtonchange(){
    onAddcart(id,count);
   setCount(1);
  }

if(loading){
  return <Loading/>;
}
  if (!product) {
    return <Nodatafound/>;
  }




  return (
    <div className=" mt-6 mb-12 m-auto p-4 max-w-6xl  bg-gray-100">
      <Link to="/" className="text-3xl">
        <HiArrowSmLeft />
      </Link>
      <div className="flex sm:flex-row flex-col shadow-lg rounded p-5 bg-white">
        <img className=" h-full w-full sm:w-1/2  " src={product.thumbnail} />
        <div className="w-1/2 ml-5 flex flex-col justify-between">
          <h1 className="font-black text-lg">{product.title}</h1>
          <p className="text-blue-400">{product.brand} </p>

          <h2 className="font-bold mt-2">${product.price}</h2>
          <p className="mt-2">{product.category}</p>
          <p className="">{product.description}</p>
          <div className="mt-4">
            <input className="border border-black rounded-sm w-10"
              type="number"
              name="mug"
              id="mug"
value={count}
          onChange={handlecount}  
            />
            <button onClick={handleButtonchange} className="w-24 bg-gray-200 rounded-sm">add to cart</button>
          </div>
        </div>

      </div>
      <div className="w-full flex flex-wrap mt-3 gap-0 justify-between">
        <img className="w-1/3" src={product.images[0]} />
        <img className="w-1/3" src={product.images[1]} />
        <img className="w-1/3" src={product.images[2]} />
        <img className="w-1/3" src={product.images[3]} />
      </div>

      <div className="flex justify-between">
        <div>
          {id > 1 && (
            <Link to={'/products/' + (id - 1)} className="text-3xl">
              <HiArrowSmLeft />
            </Link>
          )}
        </div>
        <div>
          <Link to={'/products/' + (id + 1)} className="text-3xl">
            <HiArrowSmRight />
          </Link>
        </div>
      </div>
    </div>
    );
}
export default Items;