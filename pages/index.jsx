import Head from 'next/head'
import { ToastContainer } from 'react-toastify';
import { Contact, HeroSection, Projects } from '../components'
import {getProjects} from "../services"
import 'react-toastify/dist/ReactToastify.css';
const Home = ({projects}) => {
  return (
    <div className="relative">
    
      <Head>
        <title>Md Ishaq</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer/>

      <HeroSection />
      <Projects projects={projects}/>
      <Contact/>
    </div>
  )
}

export default Home;

export async function getStaticProps(){
  const projects = await getProjects() || []
  return{
    props:{projects}
  }
}
