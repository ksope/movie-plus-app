import React from 'react';
import { mobileNavigation } from '../navigation/navigation';
import { NavLink } from 'react-router-dom';

const MobileNavbar = () => {
    
  return (
    <div className='lg:hidden h-14 bg-neutral-600 bg-opacity-40 fixed bottom-0 w-full '>
        <div className='flex items-center justify-between h-full text-neutral-400'>
            {
                mobileNavigation.map((nav,index)=>{
                    return (
                        <NavLink key={nav.label+"mobilenavigation"}
                        to={nav.href}
                        className={({isActive})=>`px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white"}`}>
                            <div className='text-2xl'>
                                {nav.icon}
                            </div>
                            <p className='text-sm '>{nav.label}</p>
                        </NavLink>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MobileNavbar