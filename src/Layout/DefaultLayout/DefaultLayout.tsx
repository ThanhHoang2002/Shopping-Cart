import React from 'react'
import Breadcrumbs from '../../component/Breadcrumbs'
import Header from '../Header'
import Footer from '../Footer'

interface DefaultLayoutProps {
  children: React.ReactNode
}
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className='min-h-screen flex flex-col dark:bg-black bg-white'>
      <header className='sticky top-0 z-20'>
        <Header />
      </header>
      <div className='m-4 z-0'>
        <Breadcrumbs />
      </div>
      <main className='flex-1 '>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default DefaultLayout
