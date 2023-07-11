import React from 'react'
import { SunIcon } from '@heroicons/react/24/solid'

const ChatSpace = () => {
    return (
        <div className="flex-1">
            <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
                <h1 className='text-5xl font-bold mb-20'>ChatGPT</h1>

                <div className="flex text-center space-x-6">
                    <div className='text-center'>
                        <div className='text-center'>
                            <SunIcon className='h-6 w-6 text-blue-500' />
                            <h2>Examples</h2>
                        </div>
                        <div className="space-2">
                            <p className="infoText">Explain something to me</p>
                            <p className="infoText">what is the difference between a dog </p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <SunIcon className='h-6 w-6 text-blue-500' />
                            <h2>Examples</h2>
                        </div>
                        <div className="space-y-2">
                            <p className="infoText">Explain something to me</p>
                            <p className="infoText">what is the difference between a dog </p>
                        </div>
                    </div>

                    <div>
                        <div className='text-center'>
                            <SunIcon className='h-6 w-6 text-blue-500' />
                            <h2>Examples</h2>
                        </div>
                        <div className="space-y-2">
                            <p className="infoText">Explain something to me</p>
                            <p className="infoText">what is the difference between a dog </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatSpace