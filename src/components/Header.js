import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/AppSlice';

const Header = () => {

    const dispatch =useDispatch();

    const toogleMenuHandler = () =>{
        dispatch(toggleMenu())
    }
    return (
        <div className='grid grid-flow-col p-3 m-2 shadow-md'>
            <div className='logo-menu flex col-span-1'>
                <span className="material-symbols-outlined h-7 mt-1 cursor-pointer" onClick={()=>toogleMenuHandler()}>menu</span>
                <div className='flex'>
                    <img alt="youtubeicon" className='h-7 ml-5' src='assets/youtube.png' /><p className='ml-1 text-lg md:font-bold'>Youtube</p>
                </div>
            </div>
            <div className='searchbox col-span-10 flex justify-center items-center'>
                <input type="text" placeholder="Search"
                    className=" w-1/2  search-input border border-gray-300 rounded-l-full pl-4 pr-10 py-1 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                <button className='border border-gray-300 px-4 py-2 rounded-r-full bg-gray-300 flex justify-center items-center'>
                    <img className="w-4 h-4" alt="search" src="assets/search.png" />
                </button>            </div>
            <div className='right col-span-1'>
                <img alt="user" className='h-8' src='assets/profile-user.png' />
            </div>
        </div>
    );
}

export default Header;
