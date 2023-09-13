import { useRef, useEffect } from 'react'
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsSkipEndCircleFill,
  BsFillSkipEndCircleFill,
} from 'react-icons/bs'

export const Player = ({
  songs,
  setSongs,
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  audioElem,
  songProgress,
  setSongProgress,  
}) => {
  const playPause = () => {
    setIsPlaying(!isPlaying)
  }

  const clickRef = useRef<HTMLDivElement>(null)

  const checkWidth = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (clickRef.current && audioElem.current) {
      const width = clickRef.current.clientWidth
      const offset = e.nativeEvent.offsetX

      const divProgress = (offset / width) * 100
      audioElem.current.currentTime = (divProgress / 100) * currentSong.length
    }
  }


  const skipBack = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title)
    if (index == 0) {
      setCurrentSong(songs[songs.length - 1])
    } else {
      setCurrentSong(songs[index - 1])
    }
    setSongProgress(0);
    setIsPlaying(false)
    //audioElem.current.currentTime = 0
  }

  const skipToNext = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title)
    if (index == songs.length-1) {
      setCurrentSong(songs[0])
    } else {
      setCurrentSong(songs[index + 1])
    }
    setSongProgress(0);
    setIsPlaying(false)
    //audioElem.current.currentTime = 0
  }

  return (
    <div className="w-full p-1 border rounded-lg flex flex-col items-center justify-between bg-black text-white px-4">
      <div className="p-4">
        <p>{currentSong.title}</p>
        <p>{currentSong.description}</p>
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
      <div className="flex items-center">
        <BsFillSkipStartCircleFill
          className="m-4 hover:color-white text-2xl cursor-pointer"
          onClick={skipBack}
        />
        {isPlaying ? (
          <BsFillPauseCircleFill
            className="m-4 hover:color-white text-4xl cursor-pointer"
            onClick={playPause}
          />
        ) : (
          <BsFillPlayCircleFill
            className="m-4 hover:color-white text-4xl cursor-pointer"
            onClick={playPause}
          />
        )}
        <BsFillSkipEndCircleFill className="m-4 hover:color-white text-2xl cursor-pointer" onClick={skipToNext} />
      </div>
    </div>
  )
}

export default Player
