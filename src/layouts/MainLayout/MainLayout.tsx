import React from 'react'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      <div className='pt-[72px] pb-6'>{children}</div>
      <Footer />
    </div>
  )
}
