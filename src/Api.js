import axios from 'axios';
export function getproductdata(id){
  return axios.get("https://dummyjson.com/products/"+id);
}
export function getallproduct(){
 return axios.get("https://dummyjson.com/products").then(function(response){
   return response.data.products;
 });
 
}