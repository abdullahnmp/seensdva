import React from 'react'
import Newsletter from './newsletter'
import PhotoGallery from './PhotoGallery'

function VisualsA() {
  return (
    <section className='bg-black text-white flex flex-col justify-center items-center py-20'>
        <Newsletter/>
        <PhotoGallery/>    
    </section>
  )
}

export default VisualsA