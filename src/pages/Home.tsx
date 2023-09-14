import { useState, useRef, useEffect } from 'react'
import Header from '../components/Header'
// import { ButtonMailto } from '../components/ButtonMailTo'
import Player from '../components/Player/Player'
import { songsdata } from '../components/Player/audio'
// import { BsFillEnvelopeFill } from 'react-icons/bs'

export interface SongData {
  title: string
  url: string
  length?: number
}

function Home() {
  const [songs] = useState<SongData[]>(songsdata)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState<SongData>(songsdata[0])
  const [songProgress, setSongProgress] = useState<number>(0)

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
    const duration = audioElem.current?.duration || 0
    const ct = audioElem.current?.currentTime || 0

    {
      /*setCurrentSong({
      ...currentSong,
      "progress": (ct / duration) * 100,
      "length": duration,
    })*/
    }
    setSongProgress((ct / duration) * 100)
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <h1 className="max-h-screen h-96 flex justify-center items-end shadow-2xl">
        PODCUSTS
      </h1>
      <main className="flex-1 flex flex-col items-center bg-slate-50 w-full">
        <div className="text-black">
          <h2 className="text-lg flex justify-center text-center">
            Custom audio for your podcast.
          </h2>
          <audio
            src={currentSong.url}
            ref={audioElem}
            onTimeUpdate={onPlaying}
          />
          <div className="mt-24 md:mt-36 flex justify-center">
            <Player
              songs={songs}
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
          {/*<h3 className="text-2xl mt-16 md:mt-36 flex justify-center italic">
            <ButtonMailto
              icon={<BsFillEnvelopeFill />}
              label="info@podcusts.com"
              mailto="mailto:info@podcusts.com"
            />
  </h3>*/}
        </div>
      </main>
    </div>
  )
}

export default Home
