import Navbar from './navbar'
import Footer from './footer'

export default function Layout({children}) {
  return(
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar/>
      <div className="grow pt-10 pb-4">
        {children}
      </div>
      <Footer/>
    </div>
  )
}
