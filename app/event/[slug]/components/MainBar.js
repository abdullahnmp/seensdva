
import React from 'react'
import ImageSlider from './ImageSlider'
import About from './About'
import Lineup from './Lineup'
import Media from './Media'
import LocationMap from './LocationMap'

export default function MainBar() {
  return (
    <main className='flex flex-col gap-9'>
      <ImageSlider/>
      <About/>
      <Lineup/>
      <Media/>
      <LocationMap/>
    </main>
  )
}
