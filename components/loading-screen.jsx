"use client"


export function LoadingScreen() {
  

   

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center">
      <div className="spotify-logo mb-8"></div>

      <div className="text-center space-y-4 fade-in">
        <h1 className="text-2xl font-bold text-white">getting Portfolio</h1>
         

        <div className="loading-dots mt-20 ml-[78px]">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
      </div>
    </div>
  )
}
