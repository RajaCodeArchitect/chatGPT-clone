import React from 'react'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid';

const SidebarRight = () => {
    return (
        <div className='flex flex-col h-screen'>
            <div className="drawer lg:drawer-open drawer-end">
                <input id="my-drawer2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer2" className="btn btn-square btn-ghost"><Bars3BottomLeftIcon className='h-6 w-6' /> </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SidebarRight