import Head from 'next/head'
import {HeroSection} from '../components'
const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Md Ishaq</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />

    </div>
  )
}

export default Home
