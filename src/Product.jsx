import React from 'react';
import { Link } from 'react-router-dom';

function Product({ thumbnail, title, category, price, id }) {
    return (
        <div className=" flex flex-col  bg-gray-100 w-full sm:w-48  p-2 lg:w-56 border border-gray-200  rounded-lg">
            <div className="w-full w-full sm:h-48 lg:h-56 aspect-squre ">
                <img className=" object-cover w-full  sm:h-48 lg:h-56 sm:p-2" src={thumbnail} />
            </div>
            <h1 className="text-gray-500 grow mt-4 px-2">{title}</h1>
            <p className="text-black font-bold text-lg px-2">{category}</p>
            <h2 className="px-2">{price}</h2>
            <Link to={"/products/" +id}> view detail</Link>
        </div>
    );
}
export default Product;