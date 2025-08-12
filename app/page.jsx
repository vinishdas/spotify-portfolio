"use client"

import { useState, useEffect } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { Sidebar } from "@/components/sidebar"
import { MainContent } from "@/components/main-content"
import { MusicPlayer } from "@/components/music-player"
import { ProjectDetail } from "@/components/project-detail"
import { ProfileView } from "@/components/profile-view"


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleProjectSelect = (projectId) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setSelectedProject(projectId)
      setIsTransitioning(false)
    }, 300)
  }

  const handleProfileClick = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setShowProfile(true)
      setIsTransitioning(false)
    }, 300)
  }

  const handleBack = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setSelectedProject(null)
      setShowProfile(false)
      setIsTransitioning(false)
    }, 300)
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  if (selectedProject) {
    return (
      <div
        className={`h-screen bg-black text-white flex flex-col ${isTransitioning ? "page-transition-enter" : "fade-in"}`}
      >
        <div className="flex-1 overflow-hidden">
          <ProjectDetail projectId={selectedProject} onBack={handleBack} />
        </div>
        <MusicPlayer />
      </div>
    )
  }

  if (showProfile) {
    return (
      <div
        className={`h-screen bg-black text-white flex flex-col ${isTransitioning ? "page-transition-enter" : "fade-in"}`}
      >
        <div className="flex-1 overflow-hidden">
          <ProfileView onBack={handleBack} />
        </div>
        <MusicPlayer />
      </div>
    )
  }

  return (
    <div
      className={`h-screen bg-black text-white flex flex-col ${isTransitioning ? "page-transition-enter" : "fade-in"}`}
    >
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} onProfileClick={handleProfileClick} />
        <MainContent
          onProjectSelect={handleProjectSelect}
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
          onProfileClick={handleProfileClick}
        />
      </div>
      <MusicPlayer className="fixed bottom-0 left-0 right-0 z-50"  />
      
    </div>
  )
}
