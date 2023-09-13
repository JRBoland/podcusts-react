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
}) => {
  const playPause = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <div className="">
      <div className="">
        <p>{currentSong.title}</p>
      </div>
      <div className="">
        <div className="">
          <div className="">
            <audio src={currentSong.url} controls />
          </div>
        </div>
      </div>
      {/*Controls*/}
      <div className="">
        <BsFillSkipStartCircleFill />
        {isPlaying ? (
          <BsFillPauseCircleFill onClick={playPause} />
        ) : (
          <BsFillPlayCircleFill onClick={playPause} />
        )}
        <BsFillSkipEndCircleFill />
      </div>
    </div>
  )
}

export default Player
