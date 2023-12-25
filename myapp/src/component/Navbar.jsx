const Navbar = ()=>{
    return (
        <div className="w-100 my-2 mx-40 bg-slate-200">
            <div className="mx-2
             flex"><a className="flex"><img src="https://img.icons8.com/?size=48&id=jWPjQhx0oPhE&format=png"/></a>
             <a href="https://www.education.com/" className="my-2">|Eduction.com</a>
             <img  className="h-6 my-2 flex ml-60" src="https://img.icons8.com/?size=30&id=59878&format=png"/>
             <form>
               
                <input className="my-2 mx-0 border-x-2 border-black border-y-2 rounded-2xl" type="search" placeholder="  Search here"></input>
             </form>
             <button className="ml-80" >Login</button>
             <button>|Logout</button>
            
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
            <div><img src="https://wallpaperaccess.com/full/5650407.jpg"/></div>
        
        </div>
    )
}

export default Navbar;