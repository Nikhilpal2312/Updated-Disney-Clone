import { useState } from 'react';
import logo from '../images/logo.svg';
import user from '../images/user.png';
import home from '../images/home.png';
import search from '../images/search.png';
// import out from '../images/out.png';
import tv from '../images/tv.png';
import movie from '../images/movie.png';
import love from '../images/love.png';
import sport from '../images/sport.png';
import { Fade } from 'react-awesome-reveal';

const Navbar = () => {

const [touch, setTouch]= useState(false);



  return (
    <div className='fixed grid grid-cols-2 h-full w-28 bg-black'>
       <div onMouseEnter={() =>setTouch(true)} onMouseLeave={()=> setTouch(false)}>
       <img src={logo} className='w-28 ml-5 mt-5'  />
       <img src={user} className='w-5 ml-9 mt-9 cursor-pointer' />
        <img src={search} className='w-9 ml-7 mt-8 cursor-pointer'/>
        <img src={home} className='w-9 ml-7 mt-8 cursor-pointer'/>
        <img src={tv} className='w-12 mt-8 ml-5 cursor-pointer' />
        <img src={movie} className='w-12 ml-5 mt-8 cursor-pointer'/>
        <img src={love} className='w-6 ml-8 mt-8 cursor-pointer'/>
        <img src={sport} className='w-6 ml-8 mt-8 cursor-pointer'/>
       </div>
       {touch && <Fade><div className='z-8 ml-8 w-20 bg-black font-semibold text-base text-slate-300 h-screen'>
        <h4 className='mt-24'>Signin</h4>
        <h4 className='mt-9'>Search</h4>
        <h4 className='mt-12'>Home</h4>
        <h4 className='mt-8'>Tv</h4>
        <h4 className='mt-9'>Movie</h4>
        <h4 className='mt-8'>Love</h4>
        <h4 className='mt-9'>Sport</h4>
       </div> 
       </Fade>}
    </div>
  )
}

export default Navbar