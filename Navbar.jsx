import { useState } from 'react';
import flag2 from '../assets/flag2.jpg'
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";
import {Link} from 'react-scroll';

const Navbar = () =>{

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        {link : "Overview",path : "Home"},
        {link : "Feature",path: "Feature"},
        {link : "About",path: "About"},
        {link : "Pricing",path: "Pricing"},

    ]
    return (
        <>
        <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0'>
            <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                <div className='flex space-x-14 items-center'>
                    <a href="/" className="text-2xl font-semibold flex items-center space-x-3">
                        <img src={flag2} alt="" className='w-10 inline-block items-center'/><span>Sri Lanka</span>
                    </a>

                    {/* showing navitems using map*/}

                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({link,path}) => <Link key={link} to={path} className='block hover:text-gray-300 cursor-pointer'>{link}</Link>)
                        }
                    </ul>
                </div>

               

                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                        {
                            isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary'/>) : (<FaBars className='w-6 h-6 text-primary'/>)
                        }

                    </button>
                </div>
            </div>
        </nav>
        
      
      </>
      
    );
};

export default Navbar;