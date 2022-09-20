import React from 'react';
  import {ImSpinner3} from 'react-icons/im';
function Loading(){
  return (<div className="text-3xl flex items-center justify-center h-screen    text-blue-500">
    <ImSpinner3 className=" animate-spin"/>
  </div>);
}
export default Loading;