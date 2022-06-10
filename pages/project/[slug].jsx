import Head from 'next/head';
import parse from 'html-react-parser';
import { getProjectDetails } from '../../services';
export default function ProjectDetails({ project }) {


  const { title, description, projectScreenShots, liveLink, clientCode, serverCode } = project



  return (
    <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>




    <section>
      <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <div className="aspect-w-1 aspect-h-1">
              <img
                alt="Project Screen Shot"
                className="object-contain hover:object-scale-down duration-300 rounded-xl"
                src={projectScreenShots[0].url}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 lg:mt-4">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  alt="Project Screen Shot"
                  className="object-cover hover:object-scale-down rounded-xl"
                  src={projectScreenShots[1].url}
                />
              </div>

              <div className="aspect-w-1 aspect-h-1">
                <img
                  alt="Project Screen Shot"
                  className="object-cover hover:object-scale-down hover:duration-300 rounded-xl"
                  src={projectScreenShots[2].url}
                />
              </div>


            </div>
          </div>

          <div className="sticky top-0">
            <strong className="  tracking-wide px-3 font-bold text-xl py-0.5  bg-gray-100 text-slate-600"> Project Details </strong>

            <div className="flex justify-between mt-8">
              <div className="max-w-full">
                <h1 className="text-2xl font-bold">
                  {title}
                </h1>
              </div>
            </div>

            <details className="relative mt-4 group">
              <summary className="block">
                <div >
               
                  <div className="prose max-w-none group-open:hidden">
                  <h3 className='text-2xl'>Features</h3>
                  <hr className='mb-3'/>
                    {parse(description.html)}
                  </div>
                </div>
              </summary>

            </details>

            <div className="flex flex-wrap  gap-4 mt-8">
              <a className="relative inline-block text-sm font-medium text-emerald-600 group active:text-emerald-500 focus:outline-none focus:ring" href={liveLink} target="_blank" rel="noreferrer">
                <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-emerald-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span className="relative block px-8 py-3 bg-white border border-current">
                  Live Link
                </span>
              </a>
              <a className="relative inline-block text-sm font-medium text-emerald-600 group active:text-emerald-500 focus:outline-none focus:ring" href={clientCode} target="_blank" rel="noreferrer">
                <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-emerald-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span className="relative block px-8 py-3 bg-white border border-current">
                  Client Code
                </span>
              </a>
              {
                !!serverCode ?
                  <a className="relative inline-block text-sm font-medium text-emerald-600 group active:text-emerald-500 focus:outline-none focus:ring" href={serverCode} target="_blank" rel="noreferrer">
                    <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-emerald-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span className="relative block px-8 py-3 bg-white border border-current">
                      Server Code
                    </span>
                  </a> :
                  <></>
              }


            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  )
}

export const getStaticPaths = async () => {

  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}
export async function getStaticProps({ params }) {
  const data = await getProjectDetails(params.slug)

  return {
    props: { project: data }
  }
}
