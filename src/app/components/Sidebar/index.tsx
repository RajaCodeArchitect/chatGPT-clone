import React from 'react'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid';

const Sidebar = () => {
    return (
        <div className='flex flex-col h-screen'>
            <div className="drawer lg:drawer-open flex-1">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="btn btn-square btn-ghost"><Bars3BottomLeftIcon className='h-6 w-6' /> </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        <button className='btn'> Add new </button>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar