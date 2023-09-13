import { useState, useRef, useEffect } from 'react'
import Header from '../components/Header'
import { ButtonMailto } from '../components/ButtonMailTo'
import Player from '../components/Player/Player'
import { songsdata } from '../components/Player/audio'

function Home() {
  interface SongData {
    title: string
    url: string
  }

  const [songs, setSongs] = useState<SongData[]>(songsdata)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState<SongData>(songsdata[0])
  const [songProgress, setSongProgress] = useState<number>(0);

  const audioElem = useRef<HTMLAudioElement | null>(null)

  {
    /*const intro1 = '/assets/media/intro_foreigners_talk.mp3'*/
  }

  useEffect(() => {
    if (audioElem.current) {
      if (isPlaying) {
        audioElem.current.play()
      } else {
        audioElem.current.pause()
      }
    }
  }, [isPlaying])

  const onPlaying = () => {
    const duration = audioElem.current.duration
    const ct = audioElem.current.currentTime

    {/*setCurrentSong({
      ...currentSong,
      "progress": (ct / duration) * 100,
      "length": duration,
    })*/}
    setSongProgress((ct / duration) * 100);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <h1 className="max-h-screen h-96 flex justify-center items-end">
        PODCUSTS
      </h1>
      <main className="flex-1 flex flex-col items-center bg-slate-50 w-full">
        <div className="text-black">
          {/*<h2 className="text-2xl mt-32 flex justify-center">Listen: {''}{currentSong.title}</h2>*/}
          <audio
            src={currentSong.url}
            ref={audioElem}
            onTimeUpdate={onPlaying}
          />
          <div className="mt-24 md:mt-36 flex justify-center">
            <Player
              songs={songs}
              setSongs={setSongs}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              audioElem={audioElem}
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
              songProgress={songProgress} 
              setSongProgress={setSongProgress}
            />
            {/*<audio src={intro1} controls />*/}
            {/*LOOK AT AND BUILD THIS
          https://blog.logrocket.com/building-audio-player-react/*/}
          
          
          </div>
          <h3 className="text-2xl mt-16 md:mt-36 flex justify-center italic">
          <ButtonMailto label="info@podcusts.com" mailto="mailto:info@podcusts.com" /></h3>
        </div>
      </main>
    </div>
  )
}

export default Home
