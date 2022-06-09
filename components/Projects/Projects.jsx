import React from 'react'

export default function Projects({ projects }) {


    return (
        <section className="text-slate-600 bg-gray-50">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">Projects</h2>

                    <p className="mt-4 text-slate-600 bold">
                        Here some projects that I have done recently
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                    {
                        projects?.map((project, index) => {
                            const {title,description,projectPhoto} = project.node
                            return (
                                <div
                                    className="block relative pb-10 overflow-hidden border border-gray-100 rounded-lg shadow-sm"
                                    key={index}
                                    
                                >
                                    <img
                                        className="object-cover w-full h-56"
                                        src={projectPhoto.url}
                                        alt=""
                                    />

                                    <div className="p-6">
                                        <h5 className="text-xl font-bold">
                                           {title}
                                        </h5>

                                        <p className="mt-2 text-sm text-gray-500">
                                            {description.markdown}
                                        </p>

                                        <button
                                            className="inline-block absolute bottom-5 right-5 animate-bounce pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500 "
                                        >
                                            Details
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
