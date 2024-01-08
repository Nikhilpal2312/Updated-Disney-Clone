import React from 'react';
import johnwick from '../images/johnwick.png';

const welcome = () => {
  return (
    <div style={{backgroundImage:`linear-gradient(to right, rgba(0,0,0,7),rgba(0,0,0,0.1)),url(${johnwick})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}
    className='h-srceen grid grid-cols-2'>
        <div className='ml-10'>
            <h1 className='text-slate-300 pt-60 font-bold text-4xl'>John Wick</h1>
            <h1 className='text-slate-300 mt-3'>John Wick</h1>
         <h1 className='text-slate-300 mt-4'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</h1>
        <h1 className='text-yellow-500 font-bold text-3xl mt-8'>Review</h1>  
        <button className='bg-gray-600 mt-10 w-80 h-12 hover:bg-gray-700 text-white font-bold py-2 
        px-4 rounded'>
            Watch Now
            </button> 
        </div>

    </div>
  )
}

export default welcome