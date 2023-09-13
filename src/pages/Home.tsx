import { useState, useRef, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Player from '../components/Player/Player'
import intro1 from '/assets/media/intro_foreigners_talk.mp3'
import { songsdata } from '../components/Player/audio'

function Home() {
  const [songs, setSongs] = useState(songsdata)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(songsdata[0])
  const audioElem = useRef();

  useEffect(() => {
    if(isPlaying){
      audioElem.current.play()
    } else {
      audioElem.current.pause()
    }
  }, [isPlaying])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <h1 className="max-h-screen h-96 flex justify-center items-end">
        PODCUSTS
      </h1>
      <main className="flex-1 flex flex-col items-center bg-slate-50 w-full min-w-full">
        <div className="md:w-768px min-w-[280px]  text-black">
          <h2 className="text-2xl mt-32">Listen:</h2>
          <audio src={intro1} ref={audioElem}/>
          <div className="m-8">
            <Player
              songs={songs}
              setSongs={setSongs}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              audioElem={audioElem}
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
            />
            {/*<audio src={intro1} controls />*/}
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
