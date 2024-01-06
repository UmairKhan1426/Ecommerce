import React, {useState} from 'react';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
const Navbar = ()=>{
    const slides=[
        {img:'/5650407.jpg'},
        {img:'/5650410.jpg'},
        {img:'/5650406.jpg'},
        
    ];
    const [currentIndex, setcurrentIndex]= useState (0)
    const prevSlide = () =>{
        const isFirstSlide= currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setcurrentIndex(newIndex);
    }
    const nextSlide = () =>{
        const isLastSlide= currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setcurrentIndex(newIndex);

    }
    return (
        <div className="w-100 my-2 mx-40 bg-slate-200 ">
            <div className="mx-2
             flex"><a className="flex"><img src="https://img.icons8.com/?size=48&id=jWPjQhx0oPhE&format=png"/></a>
             <a href="https://www.education.com/" className="my-2">|Eduction.com</a>
             <img  className="h-6 my-2 flex ml-60" src="https://img.icons8.com/?size=30&id=59878&format=png"/>
             <form>
               
                <input className="my-2 mx-0 border-x-2 border-black border-y-2 rounded-2xl" type="search" placeholder="  Search here"></input>
             </form>
             <button className="ml-auto" >Login</button>
             <button className="mr-0" >|Logout</button>
            
             </div>
             <nav>
                <div className=" flex bg-slate-300">
                    <ul className="flex">
                        <li className="mx-2"><a>Worksheets</a></li>
                        <li className="mx-2"><a>Games</a></li>
                        <li className="mx-2"><a>Lesson Plan</a></li>
                        <li className="mx-2"><a>Activities</a></li>
                        <li className="mx-2"><a>Workbooks</a></li>
                        <li className="mx-2"><a>Excercise</a></li>
                        <li className="mx-2"><a>Songs</a></li>
                        <li className="mx-2"><a>Stories</a></li>
                    </ul>
                </div>
             </nav>
    <div className='relative'><div className='duration-500 relative group'><img src={slides[currentIndex].img}/></div></div>
<div className='group-hover:block absolute top-[30%] translate-y-30 mx-4 cursor-pointer'><BsChevronCompactLeft size={30} onClick={prevSlide}/></div>
<div className='group-hover:block absolute top-[30%] translate-y-30 right-[11%] cursor-pointer'><BsChevronCompactRight size={30} onClick={nextSlide}/></div>
<div className="text-5xl text-center h-8 bg-slate-200"><h1> Our learning library</h1></div>
<div className="text-2xl text-center h-2 my-8 bg-slate-200"><h1> With 30,000+ digital and printable resources, kids can learn about any topic they’re curious about.</h1></div>
<div class="pk" ><button className=" items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded ">Browse the library</button></div>

    

        
        </div>
    )
}

export default Navbar;