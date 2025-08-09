"use client"

import { createContext, useContext, useState } from "react"

const AudioContext = createContext(undefined)

export function AudioProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        togglePlay,
        currentTrack,
        setCurrentTrack,
      }}
    >
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider")
  }
  return context
}
