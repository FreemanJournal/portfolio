import Link from 'next/link';
import React from 'react'
import parse from 'html-react-parser';
import Image from 'next/image';
import styles from './Projects.module.css'
export default function Projects({ projects }) {
    return (
        <section className="text-slate-600 bg-gray-50">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto text-center ">
                    <h2 className="text-3xl font-bold sm:text-4xl">Projects</h2>
                    <hr />
                    <p className="mt-4 text-slate-600 bold">
                        Here some projects that I have done recently
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
                    {
                        projects?.map((project, index) => {

                            const { id, title, description, projectPhoto, projectSlug } = project.node
                            return (
                                <div
                                    className="block relative pb-10  border  rounded-lg shadow-xl"
                                    key={index}

                                >
                                    <div className="h-52 w-full  relative flex items-center justify-center ">
                                        <div className={`${styles.projectImg} mx-auto`} style={{ backgroundImage:`url(${projectPhoto.url})` }}>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h5 className="text-xl font-bold">
                                            {title}
                                        </h5>

                                        <p className="mt-2 text-sm text-gray-500">
                                            {description.markdown}
                                        </p>

                                        <button
                                            className="inline-block absolute bottom-5 right-5 animate-bounce pb-1 mt-4 font-medium text-emerald-500 border-b border-emerald-500 "
                                        >
                                            <Link href={`/project/${projectSlug}`}>Details</Link>
                                            <span aria-hidden="true">&rarr;</span>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>


            </div>
        </section>
    )
}
