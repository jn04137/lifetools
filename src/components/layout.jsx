import Navbar from './navbar'
import Footer from './footer'

export default function Layout({children}) {
  return(
    <div className="flex flex-col justify-between">
      <Navbar/>
        <div className="grow">
          {children}
        </div>
      <Footer/>
    </div>
  )
}
