"use client"

import { useState, useRef, useEffect } from "react"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Shuffle,
  Repeat,
  Heart,
  MoreHorizontal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useAudio } from "@/components/audio-provider"

const playlist = [
  {
    id: 1,
    title: "Coding Flow",
    artist: "Lo-Fi Beats",
    duration: 480,
    src: "/good-night-lofi-cozy-chill-music-160166.mp3",
  },
  {
    id: 2,
    title: "Debug Mode",
    artist: "Synthwave Collective",
    duration: 440,
    src: "/lofi-295209.mp3",
  },
  {
    id: 3,
    title: "Algorithm Dreams",
    artist: "Electronic Minds",
    duration: 400,
    src: "/lofi-girl-lofi-ambient-music-365952.mp3",
  },
  {
    id: 4,
    title: "fast programmer",
    artist: "Electronic feast",
    duration: 400,
    src: "/spring-lofi-vibes-lofi-music-340019.mp3",
  },
]

export function MusicPlayer() {
  const { isPlaying, togglePlay, currentTrack, setCurrentTrack } = useAudio()
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(70)
  const [isMuted, setIsMuted] = useState(false)
  const [isShuffled, setIsShuffled] = useState(false)
  const [repeatMode, setRepeatMode] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const audioRef = useRef(null)

  const currentSong = playlist[currentTrack]

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const handleEnded = () => {
      if (repeatMode === 2) {
        audio.currentTime = 0
        audio.play()
      } else {
        nextTrack()
      }
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [repeatMode])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.play().catch(console.error)
    } else {
      audio.pause()
    }
  }, [isPlaying])

useEffect(() => {
  const audio = audioRef.current
  if (!audio) return

  audio.load() // Reset the audio element
  if (isPlaying) {
    audio.play().catch(console.error)
  }
}, [currentTrack])


  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = isMuted ? 0 : volume / 100
  }, [volume, isMuted])

  const nextTrack = () => {
    if (isShuffled) {
      const randomIndex = Math.floor(Math.random() * playlist.length)
      setCurrentTrack(randomIndex)
    } else {
      setCurrentTrack((prev) => (prev + 1) % playlist.length)
    }
  }

  const previousTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length)
  }

  const handleSeek = (value) => {
    const audio = audioRef.current
    if (!audio) return

    const newTime = (value[0] / 100) * currentSong.duration
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled)
  }

  const toggleRepeat = () => {
    setRepeatMode((prev) => (prev + 1) % 3)
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div
      className="h-16 sm:h-20 border-t px-2 sm:px-4 flex items-center justify-between slide-up"
      style={{
        backgroundColor: "#121212",
        borderColor: "#333333",
      }}
    >
      <audio ref={audioRef} src={currentSong.src} />

      {/* Current Track Info */}
      <div className="flex items-center space-x-2 sm:space-x-3 w-1/4 min-w-0">
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 rounded flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: "#333333" }}
        >
          <div className="text-xs font-bold" style={{ color: "#ffffff" }}>
            {currentSong.title
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </div>
        </div>
        <div className="hidden sm:block min-w-0 flex-1">
          <div className="text-sm font-medium truncate" style={{ color: "#ffffff" }}>
            {currentSong.title}
          </div>
          <div className="text-xs truncate" style={{ color: "#b2b2b2" }}>
            {currentSong.artist}
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className={`hidden md:flex flex-shrink-0 heart-button ${isLiked ? "liked" : ""}`}
          style={{ color: isLiked ? "#1db954" : "#b2b2b2" }}
          onClick={handleLike}
        >
          <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
        </Button>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center space-y-1 sm:space-y-2 w-1/2 max-w-md">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleShuffle}
            className={`w-6 h-6 sm:w-8 sm:h-8 hidden sm:flex spotify-button ${isShuffled ? "text-green-500" : ""}`}
            style={{ color: isShuffled ? "#1db954" : "#b2b2b2" }}
          >
            <Shuffle className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={previousTrack}
            className="w-6 h-6 sm:w-8 sm:h-8 spotify-button"
            style={{ color: "#b2b2b2" }}
          >
            <SkipBack className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          <Button
            size="sm"
            onClick={togglePlay}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-gray-200 text-black play-button"
          >
            {isPlaying ? (
              <Pause className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" />
            ) : (
              <Play className="h-3 w-3 sm:h-4 sm:w-4 ml-0.5" fill="currentColor" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={nextTrack}
            className="w-6 h-6 sm:w-8 sm:h-8 spotify-button"
            style={{ color: "#b2b2b2" }}
          >
            <SkipForward className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleRepeat}
            className={`w-6 h-6 sm:w-8 sm:h-8 hidden sm:flex spotify-button ${repeatMode > 0 ? "text-green-500" : ""}`}
            style={{ color: repeatMode > 0 ? "#1db954" : "#b2b2b2" }}
          >
            <Repeat className="h-3 w-3 sm:h-4 sm:w-4" />
            {repeatMode === 2 && <span className="text-xs ml-1">1</span>}
          </Button>
        </div>

        <div className="flex items-center space-x-2 w-full max-w-md">
          <span className="text-xs w-8 text-right hidden sm:block" style={{ color: "#b2b2b2" }}>
            {formatTime(currentTime)}
          </span>
          <Slider
            value={[(currentTime / currentSong.duration) * 100]}
            onValueChange={handleSeek}
            max={100}
            step={1}
            className="flex-1 [&_[role=slider]]:bg-white [&_[role=slider]]:border-white [&_.bg-primary]:bg-green-500 hover:[&_.bg-primary]:bg-green-400 [&_[data-state=active]_.bg-primary]:bg-green-500"
          />
          <span className="text-xs w-8 hidden sm:block" style={{ color: "#b2b2b2" }}>
            {formatTime(currentSong.duration)}
          </span>
        </div>
      </div>

      {/* Volume Control */}
      <div className="flex items-center space-x-2 w-1/4 justify-end">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMute}
          className="w-6 h-6 sm:w-8 sm:h-8 hidden sm:flex spotify-button"
          style={{ color: "#b2b2b2" }}
        >
          {isMuted || volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
        <div className="hidden md:block w-20">
          <Slider
            value={[isMuted ? 0 : volume]}
            onValueChange={(value) => setVolume(value[0])}
            max={100}
            step={1}
            className="w-full [&_[role=slider]]:bg-white [&_[role=slider]]:border-white [&_.bg-primary]:bg-green-500 hover:[&_.bg-primary]:bg-green-400 [&_[data-state=active]_.bg-primary]:bg-green-500"
          />
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="w-6 h-6 sm:w-8 sm:h-8 sm:hidden spotify-button"
          style={{ color: "#b2b2b2" }}
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
