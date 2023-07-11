'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

function Login() {

    return (
        <div className='flex h-screen item-center justify-center text-center'>
            <button onClick={() => signIn('google')}>
                signIn
            </button>
        </div>
    )
}

export default Login