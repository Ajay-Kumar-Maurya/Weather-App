import React from 'react'

export const About = () => {
   let myStyle = {
      backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/03/27/07/32/clouds-1282314_960_720.jpg")',
   }
   return (
      <div className='w-screen h-screen bg-no-repeat bg-cover py-4' style={myStyle}>
         <div className='text-center  px-4'>
            <h1 className='text-4xl'>About</h1>
            <p className='pt-2'>This is a simple weather app which is build using React JS. React is a JavaScript library for building user interfaces.<br/>This website uses Open Weather API to show weather data. This app shows current weather details, hourly forecast and daily forecast.
            </p>
         </div>
      </div>
   )
}