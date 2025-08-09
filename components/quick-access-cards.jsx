"use client"

import { Play, Heart, Folder, Star, Code, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickAccessItems = [
  
  {
    id: "SideIntrest",
    title: "Side Intrests",
    icon: Heart,
    gradient: "gradient-blue-purple",
  },
  {
    id: "Competition",
    title: "Competition",
    icon: Star,
    gradient: "gradient-green-blue",
  },
  {
    id: "Techstack",
    title: "Tech stack",
    icon: Code,
    gradient: "gradient-orange-red",
  },
  // {
  //   id: "Work",
  //   title: "Work Experience",
  //   icon: Code,
  //   gradient: "gradient-teal-green",
  // },
]

export function QuickAccessCards({ onProjectSelect }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4   ">
      {quickAccessItems.map((item) => {
        const IconComponent = item.icon
        return (
          <Button
            key={item.id}
            variant="ghost"
            className="h-14  sm:h-16   md:h-20 p-3  rounded-lg spotify-card-hover group ripple "
            style={{ backgroundColor: "rgba(178, 178, 178, 0.1)" }}
            onClick={() => onProjectSelect(item.id)}
          >
            <div className="flex items-center w-full h-full ">
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16  md:h-16 rounded-l-lg ${item.gradient} flex items-center justify-center flex-shrink-0`}
              >
                <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div className="flex-1 px-3 sm:px-4 text-left min-w-0">
                <span className="font-medium text-sm xs:text-[12px] sm:text-base truncate block" style={{ color: "#ffffff" }}>
                  {item.title}
                </span>
              </div>
              <div className="pr-3 sm:pr-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-green-500 rounded-full flex items-center justify-center play-button">
                  <Play className="h-3 w-3 sm:h-3 sm:w-3 md:h-4 md:w-4 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
            </div>
          </Button>
        )
      })}
    </div>
  )
}
