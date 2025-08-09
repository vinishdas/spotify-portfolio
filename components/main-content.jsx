"use client"

import { User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { QuickAccessCards } from "@/components/quick-access-cards"
import { ProjectsGrid } from "@/components/projects-grid"

export function MainContent({ onProjectSelect, isMobileOpen, setIsMobileOpen, onProfileClick }) {

  return (
    <div
      className="flex-1 flex flex-col bg-gradient-to-b from-gray-900 via-gray-900 to-black min-w-0 slide-in-right"
      style={{
        background: `linear-gradient(180deg, #121212 0%, #000000 100%)`,
      }}
    >
      {/* Top Navigation */}
      <div
        className="flex items-center justify-between p-3 sm:p-4 bg-black/20 backdrop-blur-sm border-b border-gray-800/50"
        style={{ borderColor: "#333333" }}
      >
        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden rounded-full bg-black/40 hover:bg-black/60 w-8 h-8 sm:w-9 sm:h-9 spotify-button ripple"
          >
            <Menu className="h-4 w-4" style={{ color: "#b2b2b2" }} />
          </Button>
        </div>

        {/* Profile Section */}
        
        <div className="flex items-center space-x-2 sm:space-x-3">
          <span className="text-lg sm:text-xl font-bold  sm:block" style={{ color: "#ffffff" }}>
            vinish Das
          </span>
           
            <User className="h-7 w-7 sm:h-4 sm:w-4" style={{ color: "#b2b2b2" }} />
         
        </div>
      </div>

      {/* Main Content */}
      <ScrollArea className="flex-1 scrollbar-thin">
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 slide-up">
          {/* Greeting */}
          <h1 className="text-2xl sm:text-xl lg:text-2xl font-bold fade-in  " style={{ color: "#ffffff" }}>
            Learn About me Playlist
          </h1>

          {/* Quick Access Cards */}
          <div className="stagger-animation">
            <QuickAccessCards onProjectSelect={onProjectSelect} />
          </div>

          {/* All Projects */}
          <div className="stagger-animation">
            <ProjectsGrid onProjectSelect={onProjectSelect} />
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
