import { Inter ,Roboto_Slab,Russo_One} from "next/font/google"
import "./globals.css"
import { AudioProvider } from "@/components/audio-provider"
import { Toaster } from 'react-hot-toast'


const inter = Inter({ subsets: ["latin"] })
const robotoSlab = Roboto_Slab({ subsets: ["latin"], variable: "--font-roboto" })
// const gothic = Special_Gothic_Expanded_One({subsets:["latin"]})
const russo = Russo_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-russo',
})

export const metadata = {
  title: "Your Name - Portfolio",
  description: "A Spotify-inspired portfolio template with loading animation",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${robotoSlab.variable} ${russo.variable} `}>
        <AudioProvider>{children}</AudioProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
