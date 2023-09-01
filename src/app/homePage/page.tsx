import React from 'react'
import Card from '../components/Card'
import Slider from '../components/Slider'
import BreakFast from '../components/SubMenu'
import MenuSection from '../components/MenuSection'
const page = () => {
  return (
    <div>
      <Slider title="Home" />
      <div>
        <MenuSection/>
      </div>
    </div>
  )
}

export default page