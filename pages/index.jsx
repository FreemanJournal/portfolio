import Head from 'next/head'
import { ToastContainer } from 'react-toastify';
import { AboutMe, Contact, Footer, HeroSection, Layout, Navigation, Projects } from '../components'
import { getProjects } from "../services"
import 'react-toastify/dist/ReactToastify.css';
const Home = ({ projects }) => {
  return (
    <div className="relative">
      <Head>
        <title>Md Ishaq</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <ToastContainer />
      <HeroSection />
      <AboutMe/>
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;

export async function getStaticProps() {
  const projects = await getProjects() || []
  return {
    props: { projects }
  }
}
