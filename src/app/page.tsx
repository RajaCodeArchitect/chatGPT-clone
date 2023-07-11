import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import Sidebar from './components/Sidebar'
import ChatSpace from './components/ChatSpace'
import SidebarRight from './components/SidebarRight'
import { SessionProvider } from './components/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]'
import Login from './components/Login'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <SessionProvider session={session}>
      {!session ? (
        <Login />
      ) : (
        <div className="flex">
          <Sidebar />
          <ChatSpace />
          <SidebarRight />
        </div>
      )}
    </SessionProvider>
  )
}
