import Head from 'next/head'
import { HeroSection, Projects } from '../components'
import {getProjects} from "../services"
const Home = ({projects}) => {
  console.log('projects',projects);
  return (
    <div className="">
      <Head>
        <title>Md Ishaq</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <Projects projects={projects}/>
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
