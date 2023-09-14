import { useRef } from 'react'
import { SongData } from '../../pages/Home';
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsFillSkipEndCircleFill,
} from 'react-icons/bs'

type PlayerProps = {
  songs: SongData[]
  isPlaying: boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  currentSong: SongData
  setCurrentSong: React.Dispatch<React.SetStateAction<SongData>>
  audioElem: React.RefObject<HTMLAudioElement>
  songProgress: number
  setSongProgress: React.Dispatch<React.SetStateAction<number>>
}

export const Player = ({
  songs,
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  audioElem,
  songProgress,
  setSongProgress,
}: PlayerProps) => {
  const playPause = () => {
    setIsPlaying(!isPlaying)
  }

  const clickRef = useRef<HTMLDivElement>(null)

  const checkWidth = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (clickRef.current && audioElem.current) {
      const width = clickRef.current.clientWidth
      const offset = e.nativeEvent.offsetX

      const divProgress = (offset / width) * 100
      audioElem.current.currentTime = (divProgress / 100) * (currentSong.length ?? 0)
    }
  }

  const skipBack = () => {
    const index = songs.findIndex((x: SongData) => x.title == currentSong.title)
    if (index == 0) {
      setCurrentSong(songs[songs.length - 1])
    } else {
      setCurrentSong(songs[index - 1])
    }
    setSongProgress(0)
    setIsPlaying(false)
    //audioElem.current.currentTime = 0
  }

  const skipToNext = () => {
    const index = songs.findIndex((x: SongData) => x.title == currentSong.title)
    if (index == songs.length - 1) {
      setCurrentSong(songs[0])
    } else {
      setCurrentSong(songs[index + 1])
    }
    setSongProgress(0)
    setIsPlaying(false)
    //audioElem.current.currentTime = 0
  }

  return (
    <div className="w-[300px] sm:w-[400px] lg:w-[600px] p-4 border rounded-lg flex flex-col items-center justify-between bg-black text-white px-4 shadow-2xl">
      <div className="p-4">
        <p>{currentSong.title}</p>
      </div>
      <div className="w-full">
        <div
          className="relative min-w-full h-[6px] bg-gray-500 rounded-3xl cursor-pointer overflow-hidden"
          onClick={checkWidth}
          ref={clickRef}
        >
          <div
            style={{ width: `${songProgress}%` }}
            className="h-full bg-green-300 rounded-3xl transition-width"
          >
            {/*<audio src={currentSong.url} controls />*/}
          </div>
        </div>
      </div>
      {/*Controls*/}
      <div className="flex items-center ">
        <BsFillSkipStartCircleFill
          className="m-4 hover:text-gray-500 transition transform duration-300 text-2xl cursor-pointer"
          onClick={skipBack}
        />
        {isPlaying ? (
          <BsFillPauseCircleFill
            className="m-4 hover:text-gray-500 transition transform duration-300 text-4xl cursor-pointer"
            onClick={playPause}
          />
        ) : (
          <BsFillPlayCircleFill
            className="m-4 hover:text-gray-500 transition transform duration-300 text-4xl cursor-pointer"
            onClick={playPause}
          />
        )}
        <BsFillSkipEndCircleFill
          className="m-4 hover:text-gray-500 transition transform duration-300 text-2xl cursor-pointer"
          onClick={skipToNext}
        />
      </div>
    </div>
  )
}

export default Player
