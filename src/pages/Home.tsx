import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import intro1 from '../assets/media/intro_foreigners_talk.mp3'

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <h1 className="max-h-screen h-96 flex justify-center items-end">
        PODCUSTS
      </h1>
      <main className="flex-1 flex flex-col items-center bg-slate-50 w-full min-w-full">
        <div className="md:w-768px min-w-[280px]  text-black">
          <h2 className="text-2xl mt-32">Listen:</h2>
          <div className="m-8">
          <audio src={intro1} controls />
          {/*LOOK AT AND BUILD THIS
          https://blog.logrocket.com/building-audio-player-react/*/}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
