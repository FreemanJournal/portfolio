import {Navigation,Footer} from '../'
export default function Layout({ children }) {
    return (
      <div>
        <Navigation />
        {children}
        <Footer />
      </div>
    )
  }