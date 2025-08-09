"use client";

import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import  allProjects from "@/data/projectlist"



export function ProjectsGrid({ onProjectSelect }) {
  return (
    <div className="space-y-4 sm:space-y-6  ">
      <div className="flex items-center justify-between ">
        <h2
          className="text-xl sm:text-2xl font-bold"
          style={{ color: "#ffffff" }}
        >
         Project Album
        </h2>
        <div className="flex items-center space-x-2 ">
          <div className="flex space-x-1 sm:hidden">
            <Button
              size="sm"
              variant="ghost"
              className="w-8 h-8 rounded-full bg-gray-800/50 spotify-button "
            >
              <ChevronLeft className="h-3 w-3 " style={{ color: "#b2b2b2" }} />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="w-8 h-8 rounded-full bg-gray-800/50 spotify-button"
            >
              <ChevronRight className="h-3 w-3" style={{ color: "#b2b2b2" }} />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile: Horizontal scroll with responsive sizing */}
      <div className="sm:hidden">
        <div className="grid grid-cols-2 gap-4 pb-4">
          {allProjects.slice(0, 8).map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer spotify-card-hover"
              onClick={() => onProjectSelect(project.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="p-3 rounded-lg relative"
                style={{ backgroundColor: "rgba(178, 178, 178, 0.1)" }}
              >
                <div className="relative mb-3">
                  <div
                    className={`w-full aspect-square rounded-lg ${project.gradient} flex items-center justify-center`}
                  >
                    <div className="text-white text-base xs:text-lg font-bold">
                      {project.title
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="absolute bottom-2 right-2 w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-green-500 hover:bg-green-400 play-button-hover play-button"
                  >
                    <Play
                      className="h-3 w-3 text-black ml-0.5"
                      fill="currentColor"
                    />
                  </Button>
                </div>
                <div className="space-y-1">
                  <h3
                    className="font-semibold text-xs xs:text-sm truncate"
                    style={{ color: "#ffffff" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-xs line-clamp-2"
                    style={{ color: "#b2b2b2" }}
                  >
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet and Desktop: Responsive grid with better scaling */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
        {allProjects.map((project, index) => (
          <div
            key={project.id}
            className="group cursor-pointer spotify-card-hover fade-in"
            onClick={() => onProjectSelect(project.id)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className="p-3 md:p-4 rounded-lg relative"
              style={{ backgroundColor: "rgba(178, 178, 178, 0.1)" }}
            >
              <div className="relative mb-3 md:mb-4">
                <div
                  className={`w-full aspect-square rounded-lg ${project.gradient} flex items-center justify-center`}
                >
                  <div className="text-white text-lg md:text-xl lg:text-2xl font-bold">
                    {project.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                </div>
                <Button
                  size="sm"
                  className="absolute bottom-2 right-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500 hover:bg-green-400 play-button-hover play-button"
                >
                  <Play
                    className="h-3 w-3 md:h-4 md:w-4 text-black ml-0.5"
                    fill="currentColor"
                  />
                </Button>
              </div>
              <div className="space-y-1">
                <h3
                  className="font-semibold truncate text-sm md:text-base"
                  style={{ color: "#ffffff" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-xs md:text-sm line-clamp-2"
                  style={{ color: "#b2b2b2" }}
                >
                  {project.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
