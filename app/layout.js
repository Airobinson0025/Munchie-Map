import './globals.css'
import Navbar from './components/Navbar'



export const metadata = {
  title: 'Munchie Map',
  description: 'Top rated resturants in your area.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
