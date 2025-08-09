"use client";

import {
  ChevronLeft,
  Play,
  Pause,
  Heart,
  MoreHorizontal,
  Download,
  Share,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAudio } from "@/components/audio-provider";
import { useState } from "react";
import projectDetails from "@/data/projectdetails";

// Inside your component
const getRandomGradient = () => {
  const gradients = [
    "bg-gradient-to-r from-red-500 to-yellow-500",
    "bg-gradient-to-r from-purple-500 to-pink-500",
    "bg-gradient-to-br from-blue-500 to-green-400",
    "bg-gradient-to-tr from-indigo-500 to-purple-600",
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
};

export function ProjectDetail({ projectId, onBack }) {
  const { isPlaying, togglePlay } = useAudio();
  const [isLiked, setIsLiked] = useState(false);
  const project =
    projectDetails[projectId] || projectDetails["portfolio-website"];

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      className="h-full fade-in   overflow-y-auto scrollbar-hide "
      style={{
        background: `linear-gradient(180deg, #121212 0%, #000000 100%)`,
      }}
    >
      {/* Header */}
      <div className="relative ">
        <div className={`h-64 sm:h-80 lg:h-96 ${project.gradient}`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative p-4 sm:p-6 h-full flex flex-col justify-between slide-up ">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="absolute  sm:relative self-start rounded-full bg-black/40 hover:bg-black/60 w-8 h-8 sm:w-10 sm:h-10 spotify-button"
            >
              <ChevronLeft className="h-4 w-4" style={{ color: "#ffffff" }} />
            </Button>

            <div className="flex flex-col sm:flex-row items-start sm:items-end space-y-4 sm:space-y-0 sm:space-x-6">
              <div
                className={`w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-lg ${project.gradient} flex items-center justify-center shadow-2xl flex-shrink-0`}
              >
                <div className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold ">
                  {project.title
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>
              </div>

              <div className="   sm:flex-1 space-y-2 sm:space-y-4 min-w-0">
                {project.topic != "intrest" && (
                  <div
                    className="text-[11px] sm:text-sm "
                    style={{ color: "#b2b2b2" }}
                  >
                    {project.type}
                  </div>
                )}

                <h1
                  className="text-xl sm:text-3xl lg:text-5xl font-bold leading-snug  "
                  style={{ color: "#ffffff" }}
                >
                  {project.title}
                </h1>

                {project.topic != "intrest" && (
                  <p
                    className=" hidden  sm:flex  sm:text-base "
                    style={{ color: "#b2b2b2" }}
                  >
                    {project.description}
                  </p>
                )}
                {project.topic != "intrest" && (
                  <div
                    className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm"
                    style={{ color: "#b2b2b2" }}
                  >
                    <span>Duration: {project.duration}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Status: {project.status}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{project.technologies.length} technologies</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div
        className="px-4 sm:px-6 py-4 sm:py-6"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, #000000 100%)",
        }}
      >
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 stagger-animation">
          <Button
            size="lg"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-400 play-button"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause
                className="h-5 w-5 sm:h-6 sm:w-6 text-black"
                fill="currentColor"
              />
            ) : (
              <Play
                className="h-5 w-5 sm:h-6 sm:w-6 text-black ml-1"
                fill="currentColor"
              />
            )}
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className={`w-10 h-10 sm:w-12 sm:h-12 heart-button ${
              isLiked ? "liked" : ""
            }`}
            style={{ color: isLiked ? "#1db954" : "#b2b2b2" }}
            onClick={handleLike}
          >
            <Heart
              className={`h-5 w-5 sm:h-6 sm:w-6 ${
                isLiked ? "fill-current" : ""
              }`}
            />
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="w-10 h-10 sm:w-12 sm:h-12 spotify-button"
            style={{ color: "#b2b2b2" }}
          >
            <Download className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="w-10 h-10 sm:w-12 sm:h-12 spotify-button"
            style={{ color: "#b2b2b2" }}
          >
            <Share className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="w-10 h-10 sm:w-12 sm:h-12 spotify-button"
            style={{ color: "#b2b2b2" }}
          >
            <MoreHorizontal className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>

          {/* External Links */}
          {project.topic != "intrest" && (
            <div className="flex gap-2 ml-auto">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-gray-600 hover:bg-gray-800 text-xs sm:text-sm spotify-button"
                style={{ color: "#b2b2b2", borderColor: "#333333" }}
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Live Demo
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-gray-600 hover:bg-gray-800 text-xs sm:text-sm spotify-button"
                style={{ color: "#b2b2b2", borderColor: "#333333" }}
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                GitHub
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <ScrollArea className="flex-1 scrollbar-thin">
        <div className="px-4 sm:px-6 pb-6 space-y-6 sm:space-y-8 slide-up">
          {/* Technologies */}
          {project.topic != "intrest" && (
            <div>
              <h2
                className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 mt-5"
                style={{ color: "#ffffff" }}
              >
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2 stagger-animation">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs sm:text-sm spotify-card-hover"
                    style={{
                      backgroundColor: "rgba(178, 178, 178, 0.2)",
                      color: "#b2b2b2",
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* README */}
          {project.topic != "intrest" && (
            <div className="space-y-6">
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{ color: "#ffffff" }}
              >
                Project Documentation
              </h2>

              {/* Overview Card */}
              <div
                className="rounded-xl p-6 sm:p-8 spotify-card-hover"
                style={{ backgroundColor: "rgba(178, 178, 178, 0.1)" }}
              >
                <h3
                  className="text-lg sm:text-xl font-semibold mb-4"
                  style={{ color: "#ffffff" }}
                >
                  Project Overview
                </h3>
                <p
                  className="text-sm sm:text-base leading-relaxed mb-6"
                  style={{ color: "#b2b2b2" }}
                >
                  {project.documentation.overview}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4
                    className="text-base sm:text-lg font-semibold mb-3"
                    style={{ color: "#ffffff" }}
                  >
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.documentation.keyFeatures.map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm sm:text-base flex items-start"
                        style={{ color: "#b2b2b2" }}
                      >
                        <span
                          className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                          style={{ backgroundColor: "#1db954" }}
                        ></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Stack */}
                <div className="mb-6">
                  <h4
                    className="text-base sm:text-lg font-semibold mb-3"
                    style={{ color: "#ffffff" }}
                  >
                    Technology Stack
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(project.documentation.techStack).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="p-3 rounded-lg"
                          style={{
                            backgroundColor: "rgba(178, 178, 178, 0.05)",
                          }}
                        >
                          <span
                            className="text-sm font-medium capitalize"
                            style={{ color: "#1db954" }}
                          >
                            {key}:
                          </span>
                          <span
                            className="text-sm ml-2"
                            style={{ color: "#b2b2b2" }}
                          >
                            {value}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Challenges & Learnings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4
                      className="text-base sm:text-lg font-semibold mb-2"
                      style={{ color: "#ffffff" }}
                    >
                      Challenges
                    </h4>
                    <p
                      className="text-sm sm:text-base"
                      style={{ color: "#b2b2b2" }}
                    >
                      {project.documentation.challenges}
                    </p>
                  </div>
                  <div>
                    <h4
                      className="text-base sm:text-lg font-semibold mb-2"
                      style={{ color: "#ffffff" }}
                    >
                      Key Learnings
                    </h4>
                    <p
                      className="text-sm sm:text-base"
                      style={{ color: "#b2b2b2" }}
                    >
                      {project.documentation.learnings}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Images */}
              {project.documentation.images &&
                project.documentation.images.length > 0 && (
                  <div
                    className="rounded-xl p-6 sm:p-8 spotify-card-hover"
                    style={{ backgroundColor: "rgba(178, 178, 178, 0.1)" }}
                  >
                    <h3
                      className="text-lg sm:text-xl font-semibold mb-6"
                      style={{ color: "#ffffff" }}
                    >
                      Project Screenshots
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {project.documentation.images.map((image, index) => (
                        <div key={index} className="group cursor-pointer">
                          <div
                            className="rounded-lg overflow-hidden mb-3 transition-transform duration-300 group-hover:scale-105"
                            style={{
                              backgroundColor: "rgba(178, 178, 178, 0.05)",
                            }}
                          >
                            <img
                              src={image.url}
                              alt={image.alt}
                              className="w-full h-48 object-cover"
                              onError={(e) => {
                                e.target.style.display = "none";
                                e.target.nextElementSibling.style.display =
                                  "flex";
                              }}
                            />
                            <div
                              className="w-full h-48 hidden items-center justify-center"
                              style={{ color: "#b2b2b2" }}
                            >
                              <span className="text-sm">
                                Image not available
                              </span>
                            </div>
                          </div>
                          <p
                            className="text-sm text-center"
                            style={{ color: "#b2b2b2" }}
                          >
                            {image.caption}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          )}

          <div>
            {project.topic === "intrest" && (
              <div className="space-y-4">
                <ul className="space-y-2 mt-5">
                  {project.intrestList.map((item, index) => (
                    <li
                      key={index}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-md spotify-card-hover transition-all duration-150 group"
                      style={{}}
                    >
                      {/* Left: Number + Image + Titles */}
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-400 w-6 text-right">
                          {index + 1}
                        </span>

                        {/* Image Thumbnail */}
                        <div
                          className={`w-12 h-12 rounded-sm overflow-hidden bg-gray-700 flex-shrink-0 ${getRandomGradient()}`}
                        >
                          {/* Replace with <img src="..." /> if dynamic */}
                        </div>

                        {/* Title */}
                        <div className="flex flex-col">
                          <span className="text-white font-semibold text-sm sm:text-base">
                            {item}
                          </span>
                          <span className="text-xs text-gray-400">
                            Interest Label
                          </span>
                        </div>
                      </div>

                      {/* Right: Timestamp + Heart */}
                      <div className="flex items-center space-x-4">
                        <span className="hidden sm:flex text-xs text-gray-400">
                          4 weeks ago
                        </span>
                        <Button
                          variant="ghost"
                          size="lg"
                          className={`w-10 h-10 sm:w-12 sm:h-12 heart-button ${
                            isLiked ? "liked" : ""
                          }`}
                          style={{ color: isLiked ? "#1db954" : "#b2b2b2" }}
                          onClick={handleLike}
                        >
                          <Heart
                            className={`h-5 w-5 sm:h-6 sm:w-6 ${
                              isLiked ? "fill-current" : ""
                            }`}
                          />
                        </Button>
                        <span className="text-xs text-gray-400">2:29</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
