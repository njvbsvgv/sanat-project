import { HerouSection, LandingStaticeItemsControl } from '@/components'
import React from 'react'

const HomePage = () => {
  return (
    <div className='holder flex flex-col items-center'>
      {/* <LandingStaticeItemsControl /> */}
      <HerouSection holderWidth={80} />
    </div>
  )
}

export default HomePage
