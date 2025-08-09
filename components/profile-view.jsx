import { ChevronLeft, Heart, MoreHorizontal, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const profileData = {
  name: "Vinish das",
  title: "Full Stack Developer",
  stats: {
    projects: 12,
    followers: 156,
    following: 89,
  },
  topInterests: [
    {
      id: 1,
      name: "JavaScript",
      category: "Programming Language",
      color: "bg-yellow-500",
    },
    {
      id: 2,
      name: "React",
      category: "Frontend Framework",
      color: "bg-blue-500",
    },
    {
      id: 3,
      name: "Node.js",
      category: "Backend Runtime",
      color: "bg-green-600",
    },
    {
      id: 4,
      name: "TypeScript",
      category: "Programming Language",
      color: "bg-blue-600",
    },
    { id: 5, name: "Next.js", category: "React Framework", color: "bg-black" },
    {
      id: 6,
      name: "Tailwind CSS",
      category: "CSS Framework",
      color: "bg-cyan-500",
    },
  ],
  recentActivity: [
    {
      id: 1,
      title: "E-commerce Platform",
      subtitle: "Recently worked on",
      icon: "EP",
      color: "bg-blue-600",
    },
    {
      id: 2,
      title: "Portfolio Website",
      subtitle: "Recently updated",
      icon: "PW",
      color: "bg-green-600",
    },
    {
      id: 3,
      title: "Task Manager App",
      subtitle: "Recently completed",
      icon: "TM",
      color: "bg-purple-600",
    },
  ],
};

export function ProfileView({ onBack }) {
  return (
    <div
      className="h-screen flex flex-col"
      style={{
        background: `linear-gradient(180deg, #121212 0%, #000000 100%)`,
      }}
    >
      {/* Header */}
      <div className="relative">
        <div className="h-64 sm:h-80 lg:h-44 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 border-2 border-red-500">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative p-4 sm:p-6 h-30 flex flex-col justify-between slide-up">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="self-start rounded-full bg-black/40 hover:bg-black/60 w-8 h-8 sm:w-10 sm:h-10 spotify-button"
            >
              <ChevronLeft className="h-4 w-4" style={{ color: "#ffffff" }} />
            </Button>

            <div className="flex flex-col pl-32 sm:flex-row items-start sm:items-end space-y-4 sm:space-y-0 sm:space-x-6  ">
              <div className="w-20 h-22 sm:w-28 sm:h-28 lg:w-20 lg:h-20 rounded-full overflow-hidden shadow-2xl flex-shrink-0 bg-gray-600 flex self-start items-center justify-center border-2 border-red-500  ">
                <div className="text-white text-4xl sm:text-2xl lg:text-2xl font-bold">
                  {profileData.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>
              </div>

              <div className="flex-1 space-y-2 sm:space-y-4 min-w-0">
                <div
                  className="text-xs sm:text-sm"
                  style={{ color: "#b2b2b2" }}
                >
                  Profile
                </div>
                <h1
                  className="text-2xl sm:text-4xl lg:text-2xl font-bold leading-tight"
                  style={{ color: "#ffffff" }}
                >
                  {profileData.name}
                </h1>
                <p className="text-sm sm:text-lg" style={{ color: "#b2b2b2" }}>
                  {profileData.title}
                </p>
                <div
                  className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm"
                  style={{ color: "#b2b2b2" }}
                >
                  <span>{profileData.stats.projects} Public Projects</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{profileData.stats.followers} Followers</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{profileData.stats.following} Following</span>
                </div>
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
        <div className="flex items-center gap-3 sm:gap-6 stagger-animation">
          <Button
            size="lg"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-400 play-button"
          >
            <Play
              className="h-5 w-5 sm:h-6 sm:w-6 text-black ml-1"
              fill="currentColor"
            />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="w-10 h-10 sm:w-12 sm:h-12 spotify-button"
            style={{ color: "#b2b2b2" }}
          >
            <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="w-10 h-10 sm:w-12 sm:h-12 spotify-button"
            style={{ color: "#b2b2b2" }}
          >
            <MoreHorizontal className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>
      </div>

      {/* Scrollable Content */}
      <ScrollArea className="flex-1 overflow-y-auto">
        <div className="px-4 sm:px-6 pb-6 space-y-6 sm:space-y-8 slide-up">
          {/* Recent Activity */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2
                className="text-lg sm:text-xl font-bold"
                style={{ color: "#ffffff" }}
              >
                Recent Activity
              </h2>
              <Button
                variant="ghost"
                className="text-sm spotify-button"
                style={{ color: "#b2b2b2" }}
              >
                Show all
              </Button>
            </div>
            <div className="space-y-2 stagger-animation">
              {profileData.recentActivity.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800/50 p-3 h-auto rounded-lg group spotify-card-hover"
                  style={{ color: "#b2b2b2" }}
                >
                  <div
                    className={`w-12 h-12 ${item.color} rounded mr-3 flex items-center justify-center flex-shrink-0`}
                  >
                    <div className="text-white text-sm font-bold">
                      {item.icon}
                    </div>
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="text-white text-sm font-medium truncate">
                      {item.title}
                    </div>
                    <div
                      className="text-xs text-gray-400 truncate"
                      style={{ color: "#b2b2b2" }}
                    >
                      {item.subtitle}
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center play-button">
                      <Play
                        className="h-3 w-3 text-black ml-0.5"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Top Interests */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2
                  className="text-lg sm:text-xl font-bold"
                  style={{ color: "#ffffff" }}
                >
                  Top interests this month
                </h2>
                <p className="text-sm" style={{ color: "#b2b2b2" }}>
                  Only visible to you
                </p>
              </div>
              <Button
                variant="ghost"
                className="text-sm spotify-button"
                style={{ color: "#b2b2b2" }}
              >
                Show all
              </Button>
            </div>

            {/* Mobile Scroll */}
            <div className="sm:hidden">
              <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
                {profileData.topInterests.slice(0, 4).map((interest, index) => (
                  <div
                    key={interest.id}
                    className="flex-shrink-0 w-32 text-center fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`w-32 h-32 ${interest.color} rounded-full mb-3 flex items-center justify-center spotify-card-hover`}
                    >
                      <div className="text-white text-lg font-bold">
                        {interest.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>
                    </div>
                    <h3
                      className="font-medium text-sm truncate"
                      style={{ color: "#ffffff" }}
                    >
                      {interest.name}
                    </h3>
                    <p className="text-xs" style={{ color: "#b2b2b2" }}>
                      {interest.category}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 stagger-animation">
              {profileData.topInterests.map((interest, index) => (
                <div
                  key={interest.id}
                  className="text-center group cursor-pointer fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-full aspect-square ${interest.color} rounded-full mb-3 flex items-center justify-center spotify-card-hover`}
                  >
                    <div className="text-white text-xl font-bold">
                      {interest.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>
                  </div>
                  <h3
                    className="font-medium text-sm truncate"
                    style={{ color: "#ffffff" }}
                  >
                    {interest.name}
                  </h3>
                  <p className="text-xs" style={{ color: "#b2b2b2" }}>
                    {interest.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
