import React, { useState, useEffect } from 'react';
import { getallproduct } from './Api';
import Loading from './Loading';
import Button from './Button';
import Hello from './Hello';
import Nodatafound from './Nodatafound';
import Nomaching from './Nomaching';
function ProductList() {
  const [productList1, setproductList] = useState([]);
  const [query, setquery] = useState("");
  const [select, setselect] = useState("default");
  const [loading, setLoading] = useState(true);
  useEffect(function() {
    const xyz = getallproduct();
    xyz.then(function(products) {
      setproductList(products);
      setLoading(false);
    });
    xyz.catch(function() {
      setLoading(false);

    });

  }, []);

  const data = productList1.filter(function(item) {

    const lowercasetitle = item.title.toLowerCase();
    const lowercasequery = query.toLowerCase();
    return lowercasetitle.indexOf(lowercasequery) != -1;

  });

function handlechange(event) {
    setquery(event.target.value);
  }
  function handleselectchange(event) {
    setselect(event.target.value);
  }


  if (select == "pricehigh") {
    data.sort(function(x, y) {
      return x.price - y.price
    });
  } else if (select == "name") {
    data.sort(function(x, y) {
      return x.title < y.title ? -1 : 1;
    });
  } else if (select == "pricelow") {
    data.sort(function(x, y) {
      return y.price - x.price
    });
  }
  if (loading) {
    return <Loading />;
  }
  if (!productList1) {
    return <Nodatafound />;
  }
  return (
    <>

      <div className=" mt-4 max-w-6xl px-4 m-auto bg-white">
        <div className="max-w-3xl m-auto ">
          <div className="flex sm:flex-row flex-col  sm:justify-between">
            <input className=" sm:mt-8 w-40 mt-4 border border-blue-400 rounded-sm" value={query} onChange={handlechange} placeholder="product" />
            <select onChange={handleselectchange} value={select} className="  border border-black  rounded-sm mt-4 w-40 sm:mt-8">
              <option vlaue="default">Default Shorting</option>
              <option value="name" >Sort by title</option>
              <option value="pricehigh">Sort by price: low to high</option>
              <option value="pricelow">Sort by price: high to low</option>
            </select>
          </div>

          <div>
            {data.length > 0 && <Hello item={data} />}
            {data.length == 0 && <Nomaching children="no maching found" />}
          </div>


          <div className="flex gap-1 mt-4 justify-center sm:justify-start ">
            <Button value="1"></Button>
            <Button value="2"></Button>
            <Button value="->"></Button>

          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;